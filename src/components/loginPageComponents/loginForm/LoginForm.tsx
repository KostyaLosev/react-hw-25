import { useReducer } from "react";
import styles from "./loginForm.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { setEmail, setPassword, resetForm, loginUser } from "../../../features/AuthSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

const LoginForm = () => {
    const dispatch = useAppDispatch();
    const { email, password, loading, error, success } = useAppSelector(state => state.auth);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
};

    const handleCancel = () => {
    dispatch(resetForm());
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
            onChange={(e) => dispatch(setEmail(e.target.value))}
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
            onChange={(e) => dispatch(setPassword(e.target.value))}
            className={styles.input}
            required
            />
        </label>
        <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitBtn} disabled={loading}>
            Submit
            </button>
            <button type="button" onClick={handleCancel} className={styles.cancelBtn}>
            Cancel
            </button>
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
