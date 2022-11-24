import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/button'
import styles from './order-page.module.css'

const OrderPage = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.order}>
            <h1 className={styles.order__title}>
                Your order will be sent to you by email or other messenger
            </h1>
            <Button containerClassName={styles.button} className={styles.button__back} onClick={() => navigate('/')}>
                Back
            </Button>
        </div>
    )
}

export default OrderPage