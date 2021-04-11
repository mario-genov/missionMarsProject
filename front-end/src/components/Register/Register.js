import styles from "./Register.module.css";
import decode from "jwt-decode";

const Register = ({ history }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, userName, password } = e.target;

    fetch("http://localhost:3001/user", {
      method: "POST",
      headers: { "Content-Type": "application.json" },
      body: JSON.stringify({
        fullName: fullName.value,
        email: email.value,
        userName: userName.value,
        password: password.value,
      }),
    })
      .then((result) => result.json())
      .then((result) => {
        const decodedToken = decode(result.token);
        localStorage.setItem("token", result.token);
        localStorage.setItem("decodedToken", JSON.stringify(decodedToken));
        history.push("/");
      });
  };

  return (
    <div className={styles.register}>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='fullName'>Full name:</label>
        <input
          type='text'
          required
          id='fullName'
          name='fullName'
          placeholder='Type your name and surname here!'
        />
        <label htmlFor='userName'>User:</label>
        <input
          type='text'
          required
          id='userName'
          name='userName'
          placeholder='Type your username here!'
        />
        <label htmlFor='userName'>Email:</label>
        <input
          type='email'
          required
          id='email'
          name='email'
          placeholder='Type your email here!'
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          required
          id='password'
          name='password'
          placeholder='Type your password here!'
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
