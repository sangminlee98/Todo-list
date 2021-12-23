import React from 'react';
import styles from './title.module.css';

const Title = (props) => {
    return (
        <header className={styles.header}>
            <h1>Todo - List</h1>
        </header>
    )
}

export default Title;