import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "src/consts/routes";
import HomePage from "src/pages/home";
import FaalPage from "src/pages/faal";
import GanjinehPage from "src/pages/ganjineh";

function Router() {
    const { home, faal, ganjineh } = routes;

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={home} element={<HomePage />} />
                <Route path={faal} element={<FaalPage />} />
                <Route path={ganjineh} element={<GanjinehPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
