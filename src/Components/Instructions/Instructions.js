import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import icons from '~/Common/icons';

function Instructions() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    }

    return(
        <main className={styles.overlay}>
            <section className={styles.instructions}>
                <button className={styles.instructions_back} onClick={handleGoBack}>
                    <img src={icons['back']}/>
                </button>
                <h1 className={styles.instructions_title}>
                    How to Play
                </h1>
                <article className={styles.instructions_steps}>
                    <h2>
                        01  
                    </h2>   
                    <h3>
                        choose a category
                    </h3>    
                    <p>
                        First, choose a word category, like animals or movies. 
                        The computer then randomly selects a secret word from 
                        that topic and shows you blanks for each letter of the 
                        word. 
                    </p>
                </article>    
                <article className={styles.instructions_steps}>
                    <h2>
                        02  
                    </h2>   
                    <h3>
                       guess letters
                    </h3>    
                    <p>
                        Take turns guessing letters. The computer fills in 
                        the relevant blank spaces if your guess is correct. 
                        If it’s wrong, you lose some health, which empties 
                        after eight incorrect guesses.
                    </p>
                </article>                   
                <article className={styles.instructions_steps}>
                    <h2>
                        03  
                    </h2>   
                    <h3>
                        win or lose
                    </h3>    
                    <p>
                        You win by guessing all the letters in the word before 
                        your health runs out. If the health bar empties 
                        before you guess the word, you lose.
                    </p>
                </article>   
            </section>   
     
        </main>

    )
}

export default Instructions;