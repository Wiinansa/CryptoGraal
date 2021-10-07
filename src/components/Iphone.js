import './Iphone.css'
import imagesIphone from './images/iphoneX.png'
import { Parallax } from 'react-parallax';

function Iphone() {
    return (
        <div>
    <Parallax>
        <div className="wrapper">
            <img src={imagesIphone}/>
        </div>
    </Parallax>
    </div>
    )
}



export default Iphone