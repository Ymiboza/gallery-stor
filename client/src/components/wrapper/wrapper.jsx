import React from 'react'
import styles from './wrapper.module.css'



const Wrapper = ({ children, containerName = "", contentName = "" }) => {
    return (
        <div id='smooth-wrapper' data-speed="0.5" className={`${styles.container} ${containerName}`}>
            <div id='smooth-content' className={`${contentName}`}>
                {children}
            </div>
        </div>
    )
}

export default Wrapper