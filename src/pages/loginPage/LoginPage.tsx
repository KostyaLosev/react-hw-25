import MainLoginForm from "../../components/loginPageComponents/MainLoginForm";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";

const LoginPage = () => {
    return(
    <div>
        <Header cartCount={0}/>
        <MainLoginForm />
        <Footer/>
    </div>
    )
};

export default LoginPage;