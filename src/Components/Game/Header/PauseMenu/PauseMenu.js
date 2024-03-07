import React, {useState, useRef} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import { overlayVariant, menuVariant } from './Variants';
import styles from './styles.module.css';
import icons from './icons'

function PauseMenu() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const overlayRef = useRef();
    const menuRef = useRef();

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleButton = (e) => {
        if(!e.target.matches('button')) return;
        let id = e.target.getAttribute('data-id');

        if(id === 'continue')
            setOpen(!open);
        else if(id === 'category')
            navigate('/category');
        else   
            navigate('/')
    }



    return(
        <>
            <button className={styles.pause} onClick={handleOpen}>
                <img src={icons['menu']}/>
            </button>

            <AnimatePresence>
                {open && 
                <motion.div 
                    initial='hidden'
                    animate='show'
                    exit='exit'
                    className={styles.overlay} 
                    ref={overlayRef}
                    variants={overlayVariant}
                    >
                    <motion.dialog 
                        initial='hidden'
                        animate='show'
                        exit='exit'
                        open={true} 
                        className={styles.menu} 
                        ref={menuRef}
                        variants={menuVariant}>
                            <h2 className={styles.menu_title}>
                                Paused
                            </h2>
                            <ul className={styles.menu_buttons} onClick={handleButton}>
                                <li>
                                    <button className={styles.menu_button} type='button' data-id='continue'>
                                        continue    
                                    </button>    
                                </li>
                                <li>
                                    <button className={styles.menu_button} type='button' data-id='category'> 
                                        new category
                                    </button>    
                                </li>
                                <li>
                                    <button className={styles.menu_button} type='button' data-id='quit'>
                                        quit game
                                    </button>    
                                </li>             
                            </ul>
                    </motion.dialog>                  
                </motion.div>}
            </AnimatePresence>

        </>
    )
}

export default PauseMenu;