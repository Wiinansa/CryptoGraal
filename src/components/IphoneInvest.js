import './IphoneInvest.css'
import imagesIphone from './images/change-invest.png'
import check from './images/check.png'

function IphoneInvest() {
    return (
        <div className="containerInvest">
        <div className="wrapperInvest">
            <img src={imagesIphone}/>
        </div>
        <div className="slogantInvest">
            <h3>Faites fructifier votre épargne</h3>
            <div className="checkout">
            <img src={check} />
            <p>Assurez-vous que votre portefeuille augmente constamment même lorsque vous dormez</p>
            </div>
        </div>
    </div>
    )
}



export default IphoneInvest