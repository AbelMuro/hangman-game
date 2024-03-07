import React, {useState, useEffect, useMemo} from 'react';
import Data from './Data';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function Word({category}) {
    const [word, setWord] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if(!category){
            navigate('/');
            return;
        }
        
        let words = Data.categories[category] || [];
        let random = Math.floor(Math.random() * words.length + 1);
        setWord(words[random] && words[random].name)
    }, [category])

    return(
        <section className={styles.word}>
            {word && word.split('').map((letter, i) => {
                return (
                    <div className={styles.word_letter} key={i} data-content={letter}>
                        {letter.toUpperCase()}
                    </div>
                )
            })}
        </section>
    )
}

export default Word;