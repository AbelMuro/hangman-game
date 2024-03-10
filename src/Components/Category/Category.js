import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import styles from './styles.module.css';
import icons from '~/Common/icons';
import {motion} from 'framer-motion';
import {categoryVariant} from './Variants'

function Category() {
    const navigate = useNavigate();
    const allCategories = ['movies', 'tv shows', 'countries', 'capital cities', 'animals', 'sports'];
    const dispatch = useDispatch();

    const handleGoBack = () => {
        navigate('/')
    }

    const handleCategory = (e) => {
        let category = e.target.getAttribute('data-id');
        dispatch({type: 'UPDATE_CATEGORY', payload: category});
        navigate('/game');
    }

    return(
        <main className={styles.overlay}>
            <motion.section 
                className={styles.category} 
                initial='hidden' 
                animate='show'
                transition={{staggerChildren: 0.1}}>
                    <button className={styles.category_back} onClick={handleGoBack}>
                        <img src={icons['back']}/>
                    </button>
                    <h1 className={styles.category_title}>
                        Pick a Category
                    </h1>
                    {allCategories.map((category) => {
                        return (
                            <motion.button 
                                variants={categoryVariant}
                                key={category} 
                                data-id={category}
                                type='button' 
                                className={styles.category_option}
                                onClick={handleCategory}>
                                    {category}
                            </motion.button>
                        )
                    })}
            </motion.section>
        </main>
    )
}

export default Category;