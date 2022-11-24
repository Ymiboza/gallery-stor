import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getArt } from '../../store/art/artSlice'
import Spinner from "../../components/spinner/spinner.jsx";
import Wrapper from '../../components/wrapper/wrapper'
import Button from "../../components/button/button";
import styles from './art-page.module.css'

const ArtPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    const { art, isLoading } = useSelector(state => state.art)

    const refreshPage = () => {
        window.location.reload()
        return false
    }

    useEffect(() => {
        dispatch(getArt(id))
    }, [dispatch, id])



    if (isLoading) return <Spinner />

    // const reload = unbind(oneReload)    

    // const oneReload = () => {
    //     document.location.reload();
    // }


    return art && (
        <div>
            <div className={styles.artContent}>
                <div className={styles.descContent}>
                    <h1 className={styles.title}>{art.name}</h1>
                    <div className={styles.price}>{art.price}</div>
                    <p className={styles.desc}>{art.description}</p>
                    <div className={styles.btn__container}>
                        <Button className={styles.artBtnBack} onClick={() => { navigate(-1) }}>Back</Button>
                        <Button
                            containerClassName={styles.buyBtnContainer}
                            className={styles.checkout}
                            onClick={() => navigate('/order')}

                        >
                            Checkout
                        </Button>
                    </div>
                </div>
                <div className={styles.imageContent}>
                    <img className={styles.image} src={art.artImage} alt="" />
                </div>
            </div>
            <div className={styles.background__body} style={{ backgroundImage: `url(${art.artImage})` }}></div>
        </div>
    )
}

export default ArtPage