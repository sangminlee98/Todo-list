import React, { useEffect, useRef } from 'react';
import Item from '../item/item';
import styles from './list.module.css';

const List = (props) => {
    const ref = useRef();
    useEffect(()=> {
        ref.current.scrollIntoView({block:'end'});
    })
    return(
        <ul className={styles.container}>
            {
                props.item.map((item,key) => {
                    return <Item item={item} key={key} checked={props.checked} onDelete={props.onDelete}/>
                })
            }
            <div ref={ref}></div>
        </ul>
    )
}

export default List;