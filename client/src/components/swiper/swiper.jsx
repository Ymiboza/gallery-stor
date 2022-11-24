import React from 'react'
import Swiper from '../../libs/swiper-bandle/swiper-bundle.min.js'
import '../../libs/swiper-bandle/swiper-bundle.min.css';
import ArtsItem from '../arts-item/artsItem';
import styles from './swiper.module.css'
import { useEffect } from 'react';
import { useRef } from 'react';
import Button from '../button/button.jsx';



const Swipers = ({
    images = [],
}) => {
    const listElement = useRef(null);
    useEffect(() => {
        const sliderMain = new Swiper('.slider_main', {
            freeMode: true,
            centeredSlides: true,
            mousewheel: true,
            parallax: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                400: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1000: {
                    slidesPerView: 2.5,
                    spaceBetween: 15
                }
            }
        });
    }, [])




    return (

        <div className={`swiper ${styles.slider} slider_main swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden`}>
            <div className={`swiper-wrapper ${styles.slier__wrapper}`}>
                {images && images.map(art => <div className={`${styles.slider__item} swiper-slide`} key={art._id}>
                    <div className={styles.slider__img} data-swiper-parallax={"20%"}><ArtsItem sizeClass={styles.size__swiper} {...art} /></div>
                </div>)}
            </div>
        </div>

    )
}

export default Swipers