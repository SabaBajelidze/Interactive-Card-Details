export default function Form({ setCvc, setNumber, setName, setDate }) {
  return (
    <div id="form">
      <label>CARDHOLDER NAME</label>
      <input placeholder="e.g. Jane Appleseed" />
      <label>CARD NUMBER</label>
      <input placeholder="e.g. 1234 5678 9123 0000" />
      <div id="form-flex">
        <div>
          <label>EXP. DATE(MM/YY)</label>
          <div id="date-input-div">
            <input placeholder="MM" />
            <input placeholder="YY" />
          </div>
        </div>
        <div id="cvc-div">
          <label>CVC</label>
          <input placeholder="e.g. 123" />
        </div>
      </div>
      <button>Confirm</button>
    </div>
  );
}
