import './App.css';
import Presentation from './components/Presentation'
import './components/Presentation.css'
import Faq from './components/Faq'
import Header from './components/Header';
import Partners from './components/Partners';
import Offre from './components/Offre';
import Team from './components/Team';
import IphoneInvest from './components/IphoneInvest';
import IphoneTrade from './components/IphoneTrade';
import OffreCrypto from './components/OffresCrypto.js';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Presentation />
        <Partners />
          <Offre />
          <OffreCrypto/>  
          <IphoneInvest />
          <IphoneTrade />
          <Team />
          <Faq />
      </div>
    </div>
  );}

export default App;