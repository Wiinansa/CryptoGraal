import './IphoneTrade.css'
import imagesIphone from '../../assets/images/change-trade-tesla.png'
import check from '../../assets/images/check.png'

function IphoneTrade() {
    return (
        <div className="containerTrade">
            <div className="slogantTrade">
                <h3>Vos investissements en temps réel</h3>
                <div className="checkout">
                    <img src={check} />
                    <p>Assurez-vous que votre portefeuille augmente constamment même lorsque vous dormez</p>
                </div>
            </div>
            <div className="wrapperTrade">
                <img src={imagesIphone} />
            </div>
        </div>
    )
}



export default IphoneTrade