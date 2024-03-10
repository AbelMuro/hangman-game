import React, {useState, useEffect, useRef} from 'react';
import useMediaQuery from '~/Hooks/useMediaQuery.js'
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import {motion, AnimatePresence} from 'framer-motion';
import { overlayVariant, dialogVariant } from './Variants';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import icons from './icons';

function Results() {
    const [mobile] = useMediaQuery('(max-width: 620px)');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState(false);
    const resultsTitleRef = useRef();
    const health = useSelector(state => state.health);
    const guess = useSelector(state => state.guess);
    const word = useSelector(state => state.word);

    const handleButton = (e) => {
        if(!e.target.matches('button')) return;
        let id = e.target.getAttribute('data-id');
        setOpen(false);     
        dispatch({type: 'UPDATE_WORD'});
        dispatch({type: 'RESET_GUESS'});
        dispatch({type: 'RESET_HEALTH'});        
        if(id === 'category')
            navigate('/category')
        else if(id === 'quit')
            navigate('/');
    }

    useEffect(() => {
        if(health === 0){
            setResult(false);
            setOpen(true);
        }
    }, [health])

    useEffect(() => {
        let letters = word.replaceAll(' ', '').split('');
        let points = letters.reduce((acc, letter) => {
            if(guess.includes(letter.toLowerCase()))
                return acc + 1;
            else
                return acc;
        }, 0)

        if(points === letters.length){
            setResult(true);
            setOpen(true);
        }
            
    }, [guess, word])



    return(
        <AnimatePresence>
            {open && <motion.div 
                        className={styles.overlay} 
                        initial='hidden' 
                        animate='show' 
                        exit='exit' 
                        variants={overlayVariant}>
                            <motion.dialog 
                                open={true} 
                                className={styles.result} 
                                initial='hidden'
                                animate='show'
                                exit='exit'
                                variants={dialogVariant}>
                                {result ? 
                                    <h1 className={styles.result_won}>
                                        You Win
                                    </h1> :
                                    <h1 className={styles.result_lost}>
                                        You Lose
                                    </h1>
                                }
                                <ul className={styles.result_buttons} onClick={handleButton}>
                                    <li>
                                        <button className={styles.result_button} data-id='play again'>
                                            {mobile ? 'Continue' : 'play again!'}
                                        </button>
                                    </li>
                                    <li>
                                        <button className={styles.result_button} data-id='category'>
                                            new category
                                        </button>
                                    </li>
                                    <li>
                                        <button className={styles.result_button} data-id='quit'>
                                            quit game
                                        </button>
                                    </li>
                                </ul>
                            </motion.dialog>
                        </motion.div>
            }
        </AnimatePresence>
    )
}

export default Results;