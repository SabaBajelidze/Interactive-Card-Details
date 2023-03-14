import bgMainMobile from './images/bg-main-desktop.png';
import cardBack from './images/bg-card-back.png';
import cardFront from './images/bg-card-front.png';
import cardLogo from './images/card-logo.svg';
import { useState } from 'react';

import Form from './components/Form.js';
import Complete from './components/Complete.js';

function App() {
  const [cvc, setCvc] = useState('000');
  const [number, setNumber] = useState('0000 0000 0000 0000');
  const [name, setName] = useState('jane appleseed');
  const [date, setDate] = useState({month: '00', year: '00'});
  const [main, setMain] = useState(true);

  return (
    <>
    <div id="main-div">
      <img src={bgMainMobile} alt="mobile background" id="main-mobile" />
      <div id="card-back">
        <img src={cardBack} alt="card-back" className='card-image' />
        <p id='cvc-code'>{cvc}</p>
      </div>
      <div id="card-front">
        <img src={cardFront} alt="card-front" className='card-image' />
        <img src={cardLogo} alt='card-logo' id='card-logo' />
        <p id='card-number'>{number}</p>
        <p id='card-name'>{name}</p>
        <p id='card-date'>{date.month}/{date.year}</p>
      </div>
    </div>
    {main && <Form setCvc={setCvc} setNumber={setNumber} setName={setName} setDate={setDate} date={date} setMain={setMain} />}
    {!main && <Complete setMain={setMain}/>}
    </>
  );
}

export default App;
