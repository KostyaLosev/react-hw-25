import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { ThemeProvider } from "./context/ThemeContext";
import "./themeVariables.css";

const App = () => {
    return (
            <ThemeProvider>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </ThemeProvider>
    );
};

export default App;