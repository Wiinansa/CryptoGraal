import './App.css';
import Presentation from './components/Presentation'
import Faq from './components/Faq'
import Header from './components/Header';

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
        <div className="faq">
          <Faq />
        </div>
      </div>
    </div>
  );
}

export default App;
