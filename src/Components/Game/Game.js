import React from 'react';
import Header from './Header';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

function Game() {
    const category = useSelector(state => state.category);


    return(
        <main className={styles.overlay}>
            <Header/>
        </main>
    )
}

export default Game;