import LoginForm from "./loginForm/LoginForm";
import MainLoginText from "./mainLoginText/MainLoginText";
import styles from "./mainLoginForm.module.css"

const MainLoginForm = () => {
    return(
        <div className={styles.formContainer}>
            <MainLoginText/>
            <LoginForm/>
        </div>
    )
};

export default MainLoginForm;