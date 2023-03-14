import { useState } from "react";

export default function Form({ setCvc, setNumber, setName, setDate, date, setMain }) {

  const [error, setError] = useState({name: null, number: null, date: null, cvc: null, button: null});

  function handleErrorBorder(node) {
    node.style.border = '1px solid red';
  }

  function handleErrorBorderOriginal(node) {
    node.style.border = '1px solid var(--light-grayish-violet)';
  }

  function handleNameChange(e) {
    if(e.target.value === '') {
      setName('jane appleseed');
      setError({...error, name: 'Name field is required'});
      handleErrorBorder(e.target);
    } else {
      setName(e.target.value);
      setError({...error, name: 'none'});
      handleErrorBorderOriginal(e.target);
    }
  }

  function formatNumber(number) {
    let arr = number.split('');
    arr.splice(4,0,' ');
    arr.splice(9,0,' ');
    arr.splice(14,0,' ');
    return arr.join('');
  }

  function handleNumberChange(e) {
    if(e.target.value === '') {
      setNumber('0000 0000 0000 0000');
      setError({...error, number: 'Number field is required'});
      handleErrorBorder(e.target);
    } else if(isNaN(e.target.value)) {
      setNumber('');
      setError({...error, number: 'You should enter valid number.'});
      handleErrorBorder(e.target);
    } else if(e.target.value.length !== 16) {
      const formatedNumber = formatNumber(e.target.value);
      setNumber(formatedNumber);
      setError({...error, number: 'Number must be 16 characters long.'});
      handleErrorBorder(e.target);
    } else {
      const formatedNumber = formatNumber(e.target.value);
      setNumber(formatedNumber);
      handleErrorBorderOriginal(e.target);
      setError({...error, number: 'none'})
    }
  }

  function handleCvcChange(e) {
    if(e.target.value === '') {
      setCvc('000')
      setError({...error, cvc: 'Cvc field is required'});
      handleErrorBorder(e.target);
    } else if(isNaN(e.target.value)) {
      setCvc('');
      setError({...error, cvc: 'Cvc must be a valid number'});
      handleErrorBorder(e.target);
    } else if(e.target.value.length !== 3) {
      setCvc(e.target.value);
      setError({...error, cvc: 'Cvc must be 3 characters long'});
      handleErrorBorder(e.target);
    } else {
      setCvc(e.target.value);
      setError({...error, cvc: 'none'});
      handleErrorBorderOriginal(e.target);
    }
  }

  function handleMonthChange(e) {
    if(e.target.value === '' || !document.getElementById('date-year').value) {
      setDate({...date, month: '00'})
      setError({...error, date: 'Month and Year Fields are required'});
    } else if(isNaN(e.target.value)) {
      setDate({...date, month: ''});
      setError({...error, date: 'Month should be valid number'});
    } else if(e.target.value.length !== 2) {
      setDate({...date, month: e.target.value});
      setError({...error, date: 'Month should be 2 characters long'});
    } else {
      setDate({...date, month: e.target.value});
      if(document.getElementById('date-year').value.length === 2) {
        setDate({...date, month: e.target.value})
        setError({...error, date: 'none'});
      } else {
        setError({...error, date: 'Year should be 2 characters long'});
      }
    }
  }

  function handleYearChange(e) {
    if(e.target.value === '' || !document.getElementById('date-month').value) {
      setDate({...date, year: '00'})
      setError({...error, date: 'Month and Year Fields are required'});
    } else if(isNaN(e.target.value)) {
      setDate({...date, year: ''});
      setError({...error, date: 'Year should be valid number'});
    } else if(e.target.value.length !== 2) {
      setDate({...date, year: e.target.value});
      setError({...error, date: 'Year should be 2 characters long'});
    } else {
      setDate({...date, year: e.target.value});
      if(document.getElementById('date-month').value.length === 2) {
        setError({...error, date: 'none'});
      } else {
        setError({...error, date: 'Month should be 2 characters long'});
      }
    }
  }

  return (
    <div id="form">
      <label>CARDHOLDER NAME</label>
      <input placeholder="e.g. Jane Appleseed" maxLength='20' onChange={e => handleNameChange(e)}/>
      {error.name && error.name !== 'none' && <p className="error">{error.name}</p>}
      <label>CARD NUMBER</label>
      <input placeholder="e.g. 1234 5678 9123 0000" onChange={e => handleNumberChange(e)} maxLength='16'/>
      {error.number && error.number !== 'none' && <p className="error">{error.number}</p>}
      <div id="form-flex">
        <div>
          <label>EXP. DATE(MM/YY)</label>
          <div id="date-input-div">
            <input placeholder="MM" maxLength='2' onChange={e => handleMonthChange(e)} id='date-month'/>
            <input placeholder="YY" maxLength='2' onChange={e => handleYearChange(e)} id='date-year'/>
          </div>
          {error.date && error.date !== 'none' && <p className="error">{error.date}</p>}
        </div>
        <div id="cvc-div">
          <label>CVC</label>
          <input placeholder="e.g. 123" onChange={e => handleCvcChange(e)} maxLength='3'/>
          {error.cvc && error.cvc !== 'none' && <p className="error">{error.cvc}</p>}
        </div>
      </div>
      <button className="button" onClick={() => {
        if(error.name === 'none' && error.number === 'none' && error.date === 'none' && error.cvc === 'none') {
          setError({...error, button: null});
          setMain(false);
        } else {
          setError({...error, button: 'Enter valid information'})
        }
      }}>Confirm</button>
      {error.button && <p className="error">{error.button}</p>}
    </div>
  );
}