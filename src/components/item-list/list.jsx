import React from 'react';
import Item from '../item/item';
import styles from './list.module.css';

const List = (props) => {

    return(
        <ul className={styles.container}>
            <li>
                {
                    props.item.map((item,key) => {
                        return <Item item={item} key={key} checked={props.checked}/>
                    })
                }
            </li>
        </ul>
    )
}

export default List;