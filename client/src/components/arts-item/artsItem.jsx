import React from 'react'
import styles from './artsItem.module.css'
import { Link } from 'react-router-dom'
import { paths } from '../../paths'


const ArtsItem = ({
    name = '',
    price = 0,
    artImage = '',
    _id = '',
    sizeClass = ""
}) => {

    return (
        <div className={styles.artItem}>
            <Link to={`${paths.art}/${_id}`} className={styles.artLink} reloadDocument>
                {artImage && <img className={`${sizeClass} ${styles.imageItem}`} src={artImage} alt="" />}
                <div className={styles.infoItem}>
                    <h2 className={styles.titleItem}>{name}</h2>
                    <span className={styles.spanItem}>{price}</span>
                </div>
            </Link>
        </div>
    )

}

export default ArtsItem