import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "src/consts/routes";
import Home from "src/pages/home";

function Router() {
    const { home } = routes;

    return (
        <BrowserRouter>
            <Routes>
                <Route path={home} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
