import React from 'react';
import {useSelector} from 'react-redux';
import styles from './styles.module.css';

function Word() {
    const word = useSelector(state => state.word);
    const guess = useSelector(state => state.guess)

    return(
        <section className={styles.word}>
            {word && word.split(' ').map((currentWord, i) => {
                let letters = currentWord.split('');
                return (
                        <div className={styles.word_group} key={currentWord}>
                            {letters.map((letter, i) => {
                                if(guess.includes(letter.toLowerCase()))
                                    return (
                                        <div className={styles.word_letter} key={i}>
                                            {letter}
                                        </div>
                                    )
                                else
                                    return (
                                        <div className={styles.hidden_letter} key={i}></div>
                                    )
                                })}                 
                        </div>            
                )
            })}
        </section>
    )
}

export default Word;