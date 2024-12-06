import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../views/home";

function AppRouter()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;