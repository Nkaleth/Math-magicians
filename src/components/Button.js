import PropTypes from 'prop-types';
import { React, useState } from 'react';
import calculate from '../logic/calculate';

function ButtonCalculator(props) {
  const [calculatorObj, setCalculatorObj] = useState({});

  function CalcuClick(e) {
    const { name } = e.target;
    console.log(typeof (name));
    setCalculatorObj(calculate(calculatorObj, name));
    console.log(calculatorObj);
    // const { text } = this.props;
    // const { calcObj } = this.state;

    // console.log(result);
    const display = document.querySelector('.Result');
    display.innerHTML = name;
  }
  const { text } = props;

  if (text === '÷' || text === 'x' || text === '-' || text === '=' || text === '+') {
    return (
      <button onClick={CalcuClick} type="submit" className="ButtonClassOper" name={text}>
        { text }
      </button>
    );
  }
  return (
    <button onClick={CalcuClick} type="submit" className="ButtonClass" name={text}>
      { text }
    </button>
  );
}

ButtonCalculator.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonCalculator;
