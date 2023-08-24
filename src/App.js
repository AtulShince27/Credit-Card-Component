
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='cardImage' id='cardFront'>
        <div id="cardNumber">0000 0000 0000 0000</div>
        <div className="cardHolderDetails">
          <div id="cardHolderName">JANE APPLESEED</div>
          <div id="cardExpiryMonth">EXP: 00/00</div>
        </div>
      </div>
      <div className='cardImage' id='cardBack'>
        <div id="cardCVV">000</div>
      </div>
      <div className="content-container">
        <div className="hero-image-column">
        </div>
        <div className="card-details-column">
          <div className='nameDetailRow'>
            <label htmlFor="cardholderName">Cardholder Name</label>
            <input type="text" id="cardholderName" name='cardholderName' placeholder='eg. Jane Appleseed'/>
          </div>
          <div className='cardNumberDetailRow'>
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" id="cardNumber" name='cardNumber' placeholder='eg. 1234 5678 9123 0000'/>
          </div>
          <div className='ExpiryCVVDetailsRow'>
            <div className='ExpiryDetailsColumn'>
                <label htmlFor="cardExpiryMonth">Exp. Date (MM/YY)</label>
                {/* <p>Exp. Date (MM/YY)</p> */}
                <div className="monthDetailsRow">
                  <input type="text" id="cardExpiryMonth" name='cardExpiryMonth' placeholder='MM'/>
                  <input type="text" id='cardExpiryYear' name='cardExpiryYear' placeholder='YY'/>
                </div>
            </div>
            <div className='CVVDetailsColumn'>
                <label htmlFor="cardCVV">CVC</label>
                <input type="text" id="cardCVV" name='cardCVV' placeholder='eg. 123'/>
            </div>
          </div>
          <div className='SubmitRow'>
            <button type="submit">Confirm</button>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="#">Atul Shince</a>.
      </div>
    </div>
  );
}

export default App;
