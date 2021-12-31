import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './item.module.css';
import { Data } from '../../App';

interface IProps {
    item: Data,
    checked: (id: number) => void;
    onDelete: (id: number) => void;
}
const Item = (props:IProps) => {
    const clicked = () => {
        props.checked(props.item.id);
    }
    const onDelete = () => {
        props.onDelete(props.item.id)
    }
    return(
        <li className={styles.container}>
            <button className={styles.checkBtn} onClick={clicked}>
                {
                    props.item.status===true ?
                    <FontAwesomeIcon icon={faCheckCircle} size='2x' color='lightgreen'></FontAwesomeIcon> :
                    <FontAwesomeIcon icon={faCircle} size='2x' color='lightgray'></FontAwesomeIcon>
                }
                
            </button>
            <span className={props.item.status ? styles.contentT : styles.contentF}>{props.item.content}</span>
            <button className={styles.deleteBtn} onClick={onDelete}>
                <FontAwesomeIcon icon={faTrashAlt} size='2x'></FontAwesomeIcon>
            </button>
        </li>
    );
}
export default Item;