import React from 'react';
import PauseMenu from './PauseMenu';
import styles from './styles.module.css';
import icons from './icons';

function Header() {
    return(
        <header className={styles.header}>
            <section className={styles.header_content}>
                <PauseMenu/>
                <h1 className={styles.header_title}>
                    Countries
                </h1>
            </section>
            <section className={styles.header_content}>
                <progress value='45' max='100'className={styles.header_health}></progress>
                <img className={styles.header_heart} src={icons['heart']}/>
            </section>
        </header>
    )
}

export default Header;