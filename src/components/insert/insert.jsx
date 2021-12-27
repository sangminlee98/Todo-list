import React, { useRef } from 'react';
import styles from './insert.module.css';

const Insert = (props) => {
    const inputRef = useRef();

    const onEnter = (e) => {
        if(e.key === 'Enter') {
            onSubmit();
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value;
        props.onAdd(value);
        inputRef.current.value = '';
        inputRef.focus();
    }
    return(
        <form className={styles.form}>
            <input
                className={styles.insert}
                type="text"
                name='text'
                placeholder='입력하세요'
                ref={inputRef}
                onKeyPress={onEnter}
            />
            <button className={styles.submit} onClick={onSubmit}>
                ADD
            </button>
        </form>
    );
}

export default Insert;