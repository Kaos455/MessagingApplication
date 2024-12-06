import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import AppRouter from "./routes/router";


import "./styles.css"

function App() 
{ 
    return (
        <HelmetProvider>
            <AppRouter />
        </HelmetProvider>
    );
}

// Doing it in 2 steps to have a reference to the root, just in case.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);

export default App;