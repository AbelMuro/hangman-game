import React from 'react';
import styles from './styles.module.css';
import icons from './icons';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
import {menuVariant} from './Variants';

function MainMenu() {
    const navigate = useNavigate();

    const handleNavigate = (e) => {
        let path = e.target.getAttribute('data-route');
        navigate(path);
    }

    return(
        <motion.main className={styles.menu} initial='hidden' animate='show' variants={menuVariant}>
            <img className={styles.menu_logo} src={icons['logo']}/>
            <button className={styles.menu_play} onClick={handleNavigate} data-route='/category'>
                <img src={icons['play']}/>
            </button>
            <button className={styles.menu_instructions} onClick={handleNavigate} data-route='/instructions'>
                how to play
            </button>
        </motion.main>
    )
}

export default MainMenu