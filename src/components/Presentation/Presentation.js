import './Presentation.css';

function Presentation() {
    return (
        <div className="App-presentation">
            <h1>Welcome to CryptoGraal</h1>
            <h2>The place where the impossible is possible</h2>
            <div className="column">
                <div className="half-content">
                    <p>Shopping online with crypto -- simplified. <br/><br/>
                    Order from major hubs of commerce such as Amazon, Walmart, and eBay using your favorite cryptocurrency. No additional accounts necessary</p>
                </div>
                <div className="half-content">
                    <p>Become a token holder and save up to 10% off when you shop online! <br/><br/>
                    Enjoy token holder benefits such as free shipping, VIP access, token airdrops, and more!</p>
                </div>
            </div>
            
            <button className="signup-button">Sign Up Now</button>

        </div>
        
    );
}

export default Presentation