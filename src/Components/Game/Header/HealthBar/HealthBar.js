import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';

function HealthBar() {
    const health = useSelector(state => state.health); 
    const barRef = useRef();


    useEffect(() => {
        barRef.current.style.width = `${health}%`
    }, [health])

    return(
        <div className={styles.health} aria-label='progressbar'>
            <div className={styles.health_bar} ref={barRef}></div>
        </div>
        //<progress value={health} max='100'className={styles.healthBar}></progress>
    )
}

export default HealthBar;