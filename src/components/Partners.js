import logo from '../logo.svg';
import './Partners.css';

function Partners() {
  return (
    <div className="Title-partners">
      <h2>Les partenaires</h2>
      <div>
      <img src={logo} className="logo-partners" alt="logo-partners<" />
      <img src={logo} className="logo-partners" alt="logo-partners<" />
      <img src={logo} className="logo-partners" alt="logo-partners<" />
      <img src={logo} className="logo-partners" alt="logo-partners<" />
      </div>
    </div>
  );
}


export default Partners;
