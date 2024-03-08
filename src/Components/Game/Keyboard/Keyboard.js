import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';

function Keyboard() {
    const dispatch = useDispatch();
    const letters = new Array(26).fill(null).map((letter, i) => {
        return (i + 10).toString(36);
    });

    const handleKey = (e) => {
        if(!e.target.matches('button')) return;
        let letter = e.target.getAttribute('data-key');
        dispatch({type: 'UPDATE_GUESS', payload: letter})
        e.target.style.opacity = '0.25';
        e.target.style.pointerEvents = 'none';
    }

    return(
        <section className={styles.keys} onClick={handleKey}>
            {letters && letters.map((letter, i) => {
                return (
                    <button className={styles.key} data-key={letter} key={i}>
                        {letter}
                    </button>
                )
            })}
        </section>
    )
}

export default Keyboard;