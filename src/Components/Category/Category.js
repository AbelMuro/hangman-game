import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import styles from './styles.module.css';
import icons from '~/Common/icons';

function Category() {
    const navigate = useNavigate();
    const [category, setCategory] = useState(['movies', 'tv shows', 'countries', 'capital cities', 'animals', 'sports']);
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
            <section className={styles.category}>
                <button className={styles.category_back} onClick={handleGoBack}>
                    <img src={icons['back']}/>
                </button>
                <h1 className={styles.category_title}>
                    Pick a Category
                </h1>
                {category && category.map((category) => {
                    return (
                        <button 
                            key={category} 
                            data-id={category}
                            type='button' 
                            className={styles.category_option}
                            onClick={handleCategory}>
                                {category}
                        </button>
                    )
                })}
            </section>
        </main>
    )
}

export default Category;