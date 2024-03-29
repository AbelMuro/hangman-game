import React, {useEffect} from 'react';
import { useDispatch ,  useSelector} from 'react-redux';
import styles from './styles.module.css';

function Keyboard() {
    const dispatch = useDispatch();
    const guess = useSelector(state => state.guess)
    const letters = new Array(26).fill(null).map((letter, i) => {
        return (i + 10).toString(36);
    });

    const handleKey = (e) => {
        if(!e.target.matches('button')) return;
        window.scrollTo({top: 0, behavior: 'smooth'});

        let letter = e.target.getAttribute('data-key');
        dispatch({type: 'UPDATE_GUESS', payload: letter});
        e.target.style.opacity = '0.25';
        e.target.style.pointerEvents = 'none';
        e.target.disabled = true;
    }

    useEffect(() => {
        if(guess !== '') return;

        const allkeys = document.querySelectorAll('.' + styles.key);
        allkeys.forEach((key) => {
            key.style.opacity = '';
            key.style.pointerEvents = '';
            key.disabled = false;
        })
    }, [guess])

    useEffect(() => {
        let keydown = (e) => {
            let keyPressed = e.key;

            const allkeys = document.querySelectorAll('.' + styles.key);
            Array.from(allkeys).some((key) => {
                let currentKey = key.getAttribute('data-key');
                if(currentKey === keyPressed){
                    key.click();
                    return true;
                }
                else 
                    return false
                    
            })
        }
        window.addEventListener('keydown', keydown)
        return () => window.removeEventListener('keydown', keydown)
    }, [])

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