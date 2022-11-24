import React from 'react'
import Wrapper from '../wrapper/wrapper'
import styles from './header.module.css'

const Header = () => {
    return (
        <Wrapper containerName={styles.main__header}>
            <div className={styles.layers}>
                <div className={styles.layer__header}>
                    <div className={styles.layers__caption}>Welcome to Gallery</div>
                    <div className={styles.layers__title}>Art studio</div>
                </div>
                <div className={styles.layer + ' ' + styles.layers__base}></div>
                <div className={styles.layer + ' ' + styles.layers__middle}></div>
                <div className={styles.layer + ' ' + styles.layers__front}></div>
                <div className={styles.layer + ' ' + styles.layers__other}></div>
                <div className={styles.layer + ' ' + styles.layers__otherTwo}></div>
                <div className={styles.layer + ' ' + styles.layers__preFront}></div>
            </div>
        </Wrapper>
    )
}



export default Header