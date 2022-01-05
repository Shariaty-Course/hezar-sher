import { Switch, Route } from "react-router-dom";
import Home from "src/pages/home";

function Router() {
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
    </Switch>;
}

export default Router;
