import React, {useState, useEffect} from 'react';
import Data from './Data';
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles.module.css';

function Word({category}) {
    const dispatch = useDispatch();
    const [word, setWord] = useState('');
    const guess = useSelector(state => state.guess.guess)
    const navigate = useNavigate();

    useEffect(() => {
        if(!category){
            navigate('/');
            return;
        }
        
        let words = Data.categories[category] || [];
        let random = Math.floor(Math.random() * words.length + 1);
        setWord(words[random] && words[random].name);
        console.log(words[random].name)

        return () => dispatch({type: 'RESET_GUESS'})
        
    }, [category])


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