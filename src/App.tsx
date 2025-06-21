import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { ThemeProvider } from "./context/ThemeContext";
import "./themeVariables.css";

const App = () => {
    return (
        <div>
            <ThemeProvider>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;