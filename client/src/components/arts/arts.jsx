import React from 'react'
import styles from './arts.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getArts } from '../../store/arts/artsSlice'
import Spinner from '../spinner/spinner'
import Wrapper from '../wrapper/wrapper'
import { Link } from 'react-router-dom'
import { paths } from '../../paths'
import Button from '../button/button'
import { useSortArts } from '../../hooks/useSortArts'
import Swipers from '../swiper/swiper'
import { useState } from 'react'
import ClassicThem from '../classic-them/classic-them'
import ArtsText from '../arts-text/arts-text'
import Switch from '../switch/switch'
import { gridSliceAction } from '../../store/art/artSlice'

const Arts = () => {
    const dispatch = useDispatch()
    const { arts, isLoading } = useSelector((state) => state.arts)
    const { isDescSort, setIsDescSort, sortedArts } = useSortArts(arts || [])
    const isGrid = useSelector((state) => state.grid)
    const [isGridThem, setIsGridThem] = useState(false)
    const [isGridText, setIsGridText] = useState(false)

    useEffect(() => {
        dispatch(getArts())
    }, [dispatch])

    if (isLoading) {
        return <Spinner />
    }

    const changeThem = () => {
        dispatch(gridSliceAction(!isGrid))
        setIsGridThem(!isGridThem)
        setIsGridText(!isGridText)
    }

    return (
        <div>
            <div className={styles.sort}>
                <Wrapper containerName={styles.container__preArts} contentName={styles.content__preArts}>
                    <div className={styles.button__container}>
                        <Link
                            className={styles.createArtBtn}
                            to={paths.createArt}
                            reloadDocument
                        >
                            Add art
                        </Link>
                        {isGridThem ? (<Button containerClassName={styles.sortBtn__container} className={styles.sortBtn} onClick={() => setIsDescSort(!isDescSort)}>
                            Sort by price {`${isDescSort ? "min-max" : "max-min"}`}
                        </Button>) : ("")}

                    </div>
                    <Switch
                        onClick={() => { changeThem() }}
                    >
                    </Switch>
                </Wrapper>
            </div>
            <Wrapper containerName={styles.container__arts} contentName={styles.content__arts}>
                {isGridText ? ("") : (<ArtsText></ArtsText>)}
                {isGridThem ? (<ClassicThem className={styles.size__grid} sortedArts={sortedArts} />) : (<Swipers images={sortedArts}></Swipers>)}
            </Wrapper>
        </div>
    )
}

export default Arts