import { useReducer } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase-config";
import styles from "./loginForm.module.css";
import { FaCheckCircle } from "react-icons/fa";

const initialState = {
    email: "",
    password: "",
    error: "",
    success: false,
};

function reducer(state, action) {
    switch (action.type) {
    case "SET_EMAIL":
        return { ...state, email: action.payload };
    case "SET_PASSWORD":
        return { ...state, password: action.payload };
    case "LOGIN_SUCCESS":
        return { ...state, success: true, error: "" };
    case "LOGIN_ERROR":
        return { ...state, error: action.payload, success: false };
    case "RESET":
        return initialState;
    default:
        return state;
    }
}

const LoginForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_ERROR", payload: "" }); 

    try {
        await signInWithEmailAndPassword(auth, state.email, state.password);
        dispatch({ type: "LOGIN_SUCCESS" });
        localStorage.setItem("isLoggedIn", "true");
    } catch (err) {
        dispatch({ type: "LOGIN_ERROR", payload: "Login error: " + err.message });
    }
    };

    const handleCancel = () => {
    dispatch({ type: "RESET" });
    };

    return (
    <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
            <span>User name</span>
            <input
            type="email"
            placeholder="UserName"
            value={state.email}
            onChange={(e) =>
                dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
            className={styles.input}
            required
            />
        </label>
        <label className={styles.label}>
            <span>Password</span>
            <input
            type="password"
            placeholder="********"
            value={state.password}
            onChange={(e) =>
                dispatch({ type: "SET_PASSWORD", payload: e.target.value })
            }
            className={styles.input}
            required
            />
        </label>
        <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitBtn}>Submit</button>
            <button type="button" onClick={handleCancel} className={styles.cancelBtn}>Cancel</button>
        </div>
        {state.error && <p className={styles.error}>{state.error}</p>}
        {state.success && (
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

