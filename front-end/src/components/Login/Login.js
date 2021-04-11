import styles from './Login.module.css'
import decode from 'jwt-decode';
import { Link } from 'react-router-dom';

const Login = ({ history }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const { userName, password } = e.target;

        fetch('http://localhost:3001/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userName: userName.value,
                password: password.value,
            }),
        })
            .then((result) => result.json())
            .then((result) => {
                const decodedToken = decode(result.token);
                localStorage.setItem('token', result.token);
                localStorage.setItem(
                    'decodedToken',
                    JSON.stringify(decodedToken)
                );
                history.push('/');
            });
    };

    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='userName'>User</label>
                <input
                    type='text'
                    required
                    id='userName'
                    name='userName'
                    placeholder='Type your username here!'
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    required
                    id='password'
                    name='password'
                    placeholder='Type your password here!'
                />
                <button>Login</button>
                <p>If you don't have a registration:</p>
                <Link to="/register">Register here!</Link>
            </form>
        </div>
    );
};

export default Login;
