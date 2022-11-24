import React from 'react'
import styles from './arts-text.module.css'

const ArtsText = () => {
    return (
        <div className={styles.swiper__desc}>
            <h2 className={styles.swiper__title}>Art Studio</h2>
            <p className={styles.swiper__paragraph}>This is a project created by Evgeny Runchev for portfolio and further development (Maybe). The project will allow novice authors to upload their work and receive some devedent from them. Check out the work here.</p>
        </div>
    )
}

export default ArtsText