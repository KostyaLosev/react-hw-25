import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase-config";
import styles from "./loginForm.module.css";
import { FaCheckCircle } from "react-icons/fa";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
        await signInWithEmailAndPassword(auth, email, password);
        setSuccess(true); 
        localStorage.setItem("isLoggedIn", "true");
    } catch (err) {
        setError("Login error: " + err.message);
    }
    };

    const handleCancel = () => {
    setEmail("");
    setPassword("");
    setError("");
    setSuccess(false);
    };

        return (
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label}>
            <span>User name</span>
            <input
            type="email"
            placeholder="UserName"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
            />
        </label>
        <label className={styles.label}>
            <span>Password</span>
            <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
            />
        </label>
        <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitBtn}>Submit</button>
            <button type="button" onClick={handleCancel} className={styles.cancelBtn}>Cancel</button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        {success && (
            <div className={styles.success}>
            <FaCheckCircle className={styles.icon} />
            <span>You have successfully logged in</span>
            </div>
        )}
        </form>
    </div>
    );
};

export default LoginForm;