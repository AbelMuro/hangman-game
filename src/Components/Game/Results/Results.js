import React from 'react';
import styles from './styles.module.css';
import icons from './icons'

function Results() {
    return(
        <div className={styles.overlay}>
            <dialog open={true} className={styles.result}>
                <h1 className={styles.result_title}>
                    You Win
                </h1>
                <ul className={styles.result_buttons}>
                    <li>
                        <button className={styles.result_button}>
                            play again!
                        </button>
                    </li>
                    <li>
                        <button className={styles.result_button}>
                            new category
                        </button>
                    </li>
                    <li>
                        <button className={styles.result_button}>
                            quit game
                        </button>
                    </li>
                </ul>
            </dialog>
        </div>
    )
}

export default Results;