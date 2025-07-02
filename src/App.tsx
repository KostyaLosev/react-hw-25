import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { ThemeProvider } from "./context/ThemeContext";
import "./themeVariables.css";
import AuthProvider from "./providers/AuthProvider";

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </ThemeProvider>
            </AuthProvider>
    );
};

export default App;