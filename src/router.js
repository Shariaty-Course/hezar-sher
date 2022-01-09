import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "src/consts/routes";
import HomePage from "src/pages/home";
import FaalPage from "src/pages/faal";
import GanjinehPage from "src/pages/ganjineh";
import PoetPage from "src/pages/poet";

function Router() {
    const { home, faal, ganjineh, shaer } = routes;

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={home} element={<HomePage />} />
                <Route path={faal} element={<FaalPage />} />
                <Route path={ganjineh} element={<GanjinehPage />} />
                <Route path={`${shaer}/:id`} element={<PoetPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
