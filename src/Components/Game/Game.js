import React from 'react';
import Header from './Header';
import Word from './Word'
import Keyboard from './Keyboard';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

function Game() {
    const {category} = useSelector(state => state.category);

    return(
        <main className={styles.overlay}>
            <Header category={category}/>
            <Word category={category}/>
            <Keyboard/>
        </main>
    )
}

export default Game;