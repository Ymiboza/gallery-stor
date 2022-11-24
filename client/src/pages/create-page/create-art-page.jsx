import React, { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { createArt, resetArtErrors } from '../../store/art/artSlice';
import { paths } from '../../paths'
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Wrapper from '../../components/wrapper/wrapper';
import styles from "./create-art-page.module.css";




const CreateArtPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { errors } = useSelector(state => state.art);
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [artImage, setArtImage] = useState(null)

    const handleCreateArt = useCallback(() => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("artImage", artImage);

        dispatch(createArt(formData)).then((res) => {
            if (!res.error) {
                navigate(`${paths.art}/${res.payload._id}`, { replace: true });
            }
        });
    }, [description, dispatch, name, navigate, artImage, price]);

    return (
        <div className={styles.createContainer}>
            <form className={styles.form}>
                <h1 className={styles.title}>Create Art</h1>
                <Input
                    name="name"
                    placeholder="Art name*"
                    error={errors && errors.name && errors.name.message}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    name="price"
                    placeholder="Art price*"
                    error={errors && errors.price && errors.price.message}
                    onChange={(e) => setPrice(+e.target.value)}
                />
                <Input
                    name="description"
                    placeholder="Description"
                    error={errors && errors.description && errors.description.message}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Input
                    name="artImage"
                    type="file"
                    error={errors && errors.artImage && errors.artImage.message}
                    onChange={(e) => setArtImage(e.target.files[0])}
                />
                <div className={styles.button__container}>
                    <Button
                        className={styles.button__create}
                        onClick={handleCreateArt}
                    >
                        Create
                    </Button>
                    <Button
                        className={styles.button__back}
                        onClick={() => navigate(-1)}
                        isBackButton={true}
                    >
                        Back
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default CreateArtPage

{/* <Wrapper containerName={styles.createContainer} contentName={styles.createContent}>
<section className={styles.sectionContent}>
    <div className="frame">
        <div className={styles.frame__content}>
            <h1>Create Art</h1>
        </div>
    </div>
    <form className={styles.form}>
        <div className="frame">
            <div className={styles.frame__content}>
                <div className={styles.frame__media + " " + styles.frame__media__left}>
                    <Input
                        name='name'
                        placeholder='Name art'
                        error={errors && errors.name && errors.name.message}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </div>
        </div>

        <div className="frame">
            <div className={styles.frame__content}>
                <div className={styles.frame__media + " " + styles.frame__media__right}>
                    <Input
                        name='price'
                        placeholder='Price'
                        error={errors && errors.price && errors.price.message}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
            </div>
        </div>

        <div className="frame">
            <div className={styles.frame__content}>
                <div className={styles.frame__media + " " + styles.frame__media__left}>
                    <Input
                        name='description'
                        placeholder='Description'
                        error={errors && errors.description && errors.description.message}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
            </div>
        </div>

        <div className="frame">
            <div className={styles.frame__content}>
                <div className={styles.frame__media + " " + styles.frame__media__right}>
                    <Input
                        name='artImage'
                        type='file'
                        placeholder='Name art'
                        error={errors && errors.artImage && errors.artImage.message}
                        onChange={(e) => setArtImage(e.target.files[0])}
                    />
                </div>
            </div>
        </div>

        <div className="frame">
            <div className={styles.frame__content}>
                <div className={styles.frame__media + " " + styles.frame__media__right}>
                    <Button
                        containerClassName={styles.buttonContainer}
                        onClick={handleCreateArt}
                    >
                        Create
                    </Button>
                </div>
            </div>
        </div>
    </form>
</section>
<Button
    onClick={() => navigate(-1)}
    isBackButton={true}
    containerClassName={styles.backButtonContainer}
>
    Back
</Button>
</Wrapper> */}