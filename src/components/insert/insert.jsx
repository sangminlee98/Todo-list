import React, { useRef } from 'react';
import styles from './insert.module.css';

const Insert = (props) => {
    const inputRef = useRef();

    const onEnter = (e) => {
        if(e.key === 'Enter') {
            onSubmit(e);
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value;
        if(value === ''){
            return;
        } else {
        props.onAdd(value);
        inputRef.current.value = '';
        inputRef.current.focus();
        }
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
                autoComplete="off"
            />
            <button className={styles.submit} onClick={onSubmit}>
                ADD
            </button>
        </form>
    );
}

export default Insert;