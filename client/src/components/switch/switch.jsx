import React from 'react'
import styles from './switch.module.css'

const Switch = ({
    onClick = () => null,
}) => {
    return (
        <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.switch__slider + " " + styles.switch__round} onClick={onClick}></span>
        </label>
    )
}

export default Switch