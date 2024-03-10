import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import styles from './styles.module.css';
import {motion, useAnimationControls} from 'framer-motion';
import { letterVariant } from './Variants';

function Word() {
    const controls = useAnimationControls();
    const word = useSelector(state => state.word);
    const guess = useSelector(state => state.guess);

    useEffect(() => {
        controls.start('show');
        return () => controls.stop();
    }, [word])

    return(
        <motion.section 
            className={styles.word} 
            initial='hidden'
            animate={controls}
            transition={{
                staggerChildren: 0.2
            }}>
                {word && word.split(' ').map((currentWord, i) => {
                    let letters = currentWord.split('');
                    return (
                            <div className={styles.word_group} key={currentWord}>
                                {letters.map((letter, i) => {
                                    if(guess.includes(letter.toLowerCase()))
                                        return (
                                            <motion.div className={styles.word_letter} key={i} variants={letterVariant}>
                                                {letter}
                                            </motion.div>
                                        )
                                    else
                                        return (
                                            <motion.div className={styles.hidden_letter} key={i} variants={letterVariant}></motion.div>
                                        )
                                    })}                 
                            </div>            
                    )
                })}
        </motion.section>
    )
}

export default Word;