import './test.css'
import chevron from '../../assets/images/chevron.png'
import adresse from '../../assets/images/accueil.png'
import phone from '../../assets/images/smartphone.png'
import mail from '../../assets/images/enveloppe.png'
import site from '../../assets/images/globe.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

function Footer(){
    return(
        <div className="footer-area" >
            <div className="main">
                <div className="footer">
                    <div className="single-footer">
                        <h4>About us</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.</p>

                        <div className="footer-social">

                            <a><img src={facebook}/></a>
                            <a><img src={twitter}/></a>

                        </div>

                    </div>

                    <div className="single-footer">

                        <h4>Main Menu</h4>
                        <ul>
                            <li><img src={chevron}/>home</li>
                            <li><img src={chevron}/>about us</li>
                            <li><img src={chevron}/>gallery</li>
                            <li><img src={chevron}/>contact us</li>
                        </ul>

                    </div>

                    <div className="single-footer">

                        <h4>Quick links</h4>
                        <ul>
                            <li><img src={chevron}/>privacy policy</li>
                            <li><img src={chevron}/>terms & condintions</li>
                            <li><img src={chevron}/>disclaim</li>
                        </ul>

                    </div>

                    <div className="single-footer">

                        <h4>Main Menu</h4>
                        <ul>
                            <li><img src={adresse}/>home</li>
                            <li><img src={phone}/>about us</li>
                            <li><img src={mail}/>gallery</li>
                            <li><img src={site}/>contact us</li>
                        </ul>

                    </div>

                </div>
                
            </div>

            
        </div>
    );
}   

export default Footer;