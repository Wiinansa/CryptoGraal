import { faqs } from "./data";
import { useState } from "react";
import FaqItems from "./FaqItems";
import './Faq.css';

function Faq() {

    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
      if(clicked === index) {
        return setClicked("0")
      }
      setClicked(index)
    };

    return (
        <div className="App-faq">
            <h1>FAQ</h1>
            <div className="column">
                <ul className="question">
                    {faqs.map((faq, index) => (
                        <FaqItems onToggle={() => handleToggle(index)} active={clicked === index} key={index} faq={faq} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Faq