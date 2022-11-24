import React from 'react'
import styles from './classic-them.module.css'
import ArtsItem from '../arts-item/artsItem';

const ClassicThem = ({
    sortedArts = [],
}) => {
    return (
        <div className={styles.artGrid}>
            {sortedArts && sortedArts.map((plane) => <ArtsItem sizeClass={styles.size__grid} key={plane._id} {...plane} />)}
        </div>
    )
}

export default ClassicThem