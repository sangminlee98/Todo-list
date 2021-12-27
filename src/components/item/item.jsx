import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styles from './item.module.css';

const Item = (props) => {
    const clicked = () => {
        props.checked(props.item.id);
    }
    return (
        <div className={styles.container}>
            <button className={styles.checkBtn} onClick={clicked}>
                {
                    props.item.status===true ?
                    <FontAwesomeIcon icon={faCheckCircle} size='2x' color='lightgreen'></FontAwesomeIcon> :
                    <FontAwesomeIcon icon={faCircle} size='2x' color='lightgray'></FontAwesomeIcon>
                }
                
            </button>
            <span className={props.item.status ? styles.contentT : styles.contentF}>{props.item.content}</span>
            <button className={styles.deleteBtn}>
                <FontAwesomeIcon icon={faTrashAlt} size='2x'></FontAwesomeIcon>
            </button>
        </div>
    );
}

export default Item;