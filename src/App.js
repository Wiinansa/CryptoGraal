import Partners from './components/Partners/Partners';
import Offre from './components/Offers/Offre';
import Team from './components/Team/Team';
import IphoneInvest from './components/Investment/IphoneInvest';
import IphoneTrade from './components/Investment/IphoneTrade';
import Header from "./components/Header/Header";
import Faq from "./components/FAQ/Faq";
import Login from "./components/Login/Login"
import {
    BrowserRouter as Router,
    Switch as SwitchDom,
    Route,
    Link
} from "react-router-dom";
import Presentation from "./components/Presentation/Presentation";

function App() {
    return (
        <div>
        <Router>
            <div>
                <Header />
            </div>
            <SwitchDom>
                <Route path={"/login"}>
                    <Login />
                </Route>
                <Route exact path={"/"}>
                    <div className={"App"}>
                    <Presentation />
                    </div>
            <Partners />
            <Offre />
            <IphoneInvest />
            <IphoneTrade />
            <Faq />
            <Team />
                </Route>
            </SwitchDom>
        </Router>
</div>
    );
}

export default App;