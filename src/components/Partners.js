import logo from '../logo.svg';
import imagesCoinPayment from './images/coinpayment.png'
import imagesCoinBase from './images/coinBasecommerce.png'
import imagesCryptoPay from './images/crypto-com-pay-checkout-for-woocommerce.jpg'
import imagesBinancePay from './images/binance-pay.png'
import './Partners.css';

function Partners() {
  return (
    <div>
      <div className="Title-partners">
        <h2>Les partenaires</h2>
      </div>
      <div className="conteneur">
        <img src={imagesCoinPayment} className="logo-partners" alt="logo-partners" />
        <img src={imagesCoinBase} className="logo-partners" alt="logo-partners" />
        <img src={imagesCryptoPay} className="logo-partners" alt="logo-partners" />
        <img src={imagesBinancePay} className="logo-partners" alt="logo-partners" />
      </div>
    </div>
  );
}


export default Partners;