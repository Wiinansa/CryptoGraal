import './App.css';
import Presentation from './components/Presentation'
import Faq from './components/Faq'
import Header from './components/Header';
import Partners from './components/Partners';
import Offre from './components/Offre';
import Login from "./components/Login";
import Team from './components/Team';
import IphoneInvest from './components/IphoneInvest';
import IphoneTrade from './components/IphoneTrade';
import OffreCrypto from './components/OffresCrypto.js';

function App() {
  return (
      <div>
          <Partners />
          <Offre />
          <IphoneInvest />
          <IphoneTrade />
          <Team />
      </div>
  );}

export default App;