import React from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';

function HealthBar() {
    const health = useSelector(state => state.health); 

    return(
        <progress value={health} max='100'className={styles.healthBar}></progress>
    )
}

export default HealthBar;