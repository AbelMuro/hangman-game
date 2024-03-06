import React from 'react';
import styles from './styles.module.css';
import icons from './icons';
import { useNavigate } from 'react-router-dom';

function MainMenu() {
    const navigate = useNavigate();

    const handleNavigate = (e) => {
        let path = e.target.getAttribute('data-route');
        navigate(path);
    }

    return(
        <main className={styles.menu}>
            <img className={styles.menu_logo} src={icons['logo']}/>
            <button className={styles.menu_play} onClick={handleNavigate} data-route='/category'>
                <img src={icons['play']}/>
            </button>
            <button className={styles.menu_instructions} onClick={handleNavigate} data-route='/instructions'>
                how to play
            </button>
        </main>
    )
}

export default MainMenu