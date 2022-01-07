import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "src/consts/routes";
import HomePage from "src/pages/home";
import FaalPage from "src/pages/faal";

function Router() {
    const { home, faal } = routes;

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={home} element={<HomePage />} />
                <Route path={faal} element={<FaalPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
