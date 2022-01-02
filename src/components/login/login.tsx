import React, { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import styles from './login.module.css';

const Login = (props: any) => {
    const navigate = useNavigate();
    const goToMain = (userId: number) => {
        navigate('/main',{state:{id:userId}});
    }
    const onLogin = (event: React.MouseEvent) => {
        props.authService.login(event.currentTarget.textContent)
        .then((data: any) => goToMain(data.user.uid));
    }
    useEffect(() => {
        props.authService.onAuthChange((user: { uid: number; }) => {
            user&&goToMain(user.uid);
        })
    })
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Login</h1>
            <div className={styles.buttons}>
                <button className={styles.loginBtn} onClick={onLogin}>Google</button>
                <button className={styles.loginBtn} onClick={onLogin}>Github</button>
            </div>
        </div>
    )
}

export default Login;