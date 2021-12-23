import React from 'react';
import styles from './insert.module.css';

const Insert = (props) => {
    return(
        <form className={styles.form}>
            <input
             className={styles.insert}
             type="text"
             name='text'
             placeholder='입력하세요'
            />
            <button className={styles.submit}>
                ADD
            </button>
        </form>
    );
}

export default Insert;