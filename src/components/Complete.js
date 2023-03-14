import iconComplete from '../images/icon-complete.svg'

export default function Complete({ setMain }) {
  return (
    <div id="complete">
      <img src={iconComplete} alt='icon-complete'/>
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
      <button
      className="button"
        onClick={() => {
          setMain(true);
        }}
      >
        Complete
      </button>
    </div>
  );
}
