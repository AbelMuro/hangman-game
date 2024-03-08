import React, {useEffect} from 'react';
import Header from './Header';
import Word from './Word'
import Keyboard from './Keyboard';
import Results from './Results';
import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

function Game() {
    const category = useSelector(state => state.category);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!category) navigate('/');
        
        return () => dispatch({type: 'RESET_GUESS'});
    }, [category])

    return(
        <main className={styles.overlay}>
            <Header category={category}/>
            <Word/>
            <Keyboard/>
            <Results/>
        </main>
    )
}

export default Game;