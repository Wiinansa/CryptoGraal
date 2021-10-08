import './App.css';
import Presentation from './components/Presentation'
import Faq from './components/Faq'
import Header from './components/Header';
import Partners from './components/Partners';
import Offre from './components/Offre';
import Team from './components/Team';
import IphoneInvest from './components/IphoneInvest';
import IphoneTrade from './components/IphoneTrade';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <div className="presentation">
          <Presentation />
          
        </div>
        <Partners />
          <Offre />
          <IphoneInvest />
          <IphoneTrade />
          <Team />
        <div className="faq">
          <Faq />
        </div>
      </div>
    </div>
  );}

export default App;