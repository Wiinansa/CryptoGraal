import './Header.css';
import icon from '../../assets/images/menu.png';

function Header() {

  return (
    <div className="App-header">
      <nav className="navbar">
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <img src={icon} class="fas fa-bars"></img>
        </label>
        <label class="logo">CryptoGraal</label>
        <ul>
          <li><a class="active" href="/">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Prix</a></li>
          <li><a href="#">Équipe</a></li>
          <li><a href="#">Partenaires</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="/login">Connexion</a></li>
        </ul>
      </nav>
    </div>

  );
}

export default Header