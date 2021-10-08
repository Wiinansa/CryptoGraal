import valide from './checked.png'
import './OffresCrypto.css'

function OffreCrypto(){
    return(
        <div className="Offres">

            <div className="Cartes">

                <h1>Gratuit</h1>
                <h4>Pas de minimum</h4>
                <h3>0 rabais</h3>
                
                <ul><img src={valide}/>0 rabais</ul>
                <ul><img src={valide}/>Livraison gratuite en Europe</ul>
                <ul><img src={valide}/>Commandez n'importe où sur notre plateforme</ul>
                <ul><img src={valide}/>Pas de limite de commande</ul>
                <ul><img src={valide}/>Pas de revente autorisée</ul>

                <div className="btn1">
                    Sign up
                </div>

            </div>

            <div className="Cartes">

                <h1>Dynamique</h1>
                <h4>1 SPI</h4>
                <h3>JUSQU'À 5% DE RÉDUCTION</h3>
                
                <ul><img src={valide}/>Plan de mise à l'échelle dynamique jusqu'à 5% de réduction sur Shopping.io</ul>
                <ul><img src={valide}/>Chaque $SPI compte pour des remises supplémentaires</ul>
                <ul><img src={valide}/>Lié à la valeur en USD du SPI</ul>
                <ul><img src={valide}/>Livraison gratuite en Europe</ul>
                <ul><img src={valide}/>Pas de limite de commande</ul>
                <ul><img src={valide}/>Pas de revente autorisée</ul> 

                <div className="btn2">
                    Sign up
                </div>

            </div>

            <div className="Cartes">

                <h1>VIP</h1>
                <h4>1000 SPI</h4>
                <h3>10% DE RÉDUCTION</h3>
                
                <ul><img src={valide}/>10 % de réduction sur toutes les commandes sur CryptoGraal.io</ul>
                <ul><img src={valide}/>Accès au groupe Telegram uniquement VIP</ul>
                <ul><img src={valide}/>Livraison gratuite en Europe</ul>
                <ul><img src={valide}/>Pas de limite de commande</ul>
                <ul><img src={valide}/>Pas de revente autorisée</ul>

                <div className="btn3">
                    Sign up
                </div>

            </div>

            <div className="Cartes">

                <h1>Vrai Homme</h1>
                <h4>1000 SPI</h4>
                <h3>BIENTÔT DISPONIBLE</h3>

                <ul><img src={valide}/>Accédez jusqu'à 5% de réduction sur les produits Amazon</ul>
                <ul><img src={valide}/>Livraison gratuite en Europe</ul>
                <ul><img src={valide}/>Chat en direct et support client SAV</ul>
                <ul><img src={valide}/>Accès au dropship via notre intégration Amazon</ul>
                <ul><img src={valide}/>Remises dynamiques vers le dropshipping sur notre plateforme</ul>
                <ul><img src={valide}/>Les remises sont calculées en valeur en USD des avoirs GSPI</ul>

                <div className="btn4">
                    Sign up
                </div>
            </div>
        </div>
               

    );
}

export default OffreCrypto;