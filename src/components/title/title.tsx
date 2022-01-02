import styles from './title.module.css';

const Title = ({onLogout}: any) => {
    return (
        <header className={styles.header}>
            <h1>Todo - List</h1>
            <button onClick={onLogout} className={styles.logout}>Logout</button>
        </header>
    )
}
export default Title;