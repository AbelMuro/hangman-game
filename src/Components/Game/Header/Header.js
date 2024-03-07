import React from 'react';
import PauseMenu from './PauseMenu';
import HealthBar from './HealthBar';
import styles from './styles.module.css';
import icons from './icons';

function Header({category}) {
    return(
        <header className={styles.header}>
            <section className={styles.header_content}>
                <PauseMenu/>
                <h1 className={styles.header_title}>
                    {category}
                </h1>
            </section>
            <section className={styles.header_content}>
                <HealthBar/>
                <img className={styles.header_heart} src={icons['heart']}/>
            </section>
        </header>
    )
}

export default Header;