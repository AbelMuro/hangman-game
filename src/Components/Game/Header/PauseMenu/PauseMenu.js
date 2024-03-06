import React from 'react';
import styles from './styles.module.css';
import icons from './icons'

function PauseMenu() {
    return(
        <>
            <button className={styles.header_menu}>
                <img src={icons['menu']}/>
            </button>
            <menu>

            </menu>        
        </>

    )
}

export default PauseMenu;