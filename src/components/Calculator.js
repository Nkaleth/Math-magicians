import { React, useState } from 'react';
import './Calculator.css';
import ButtonCalculator from './Button';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorObj, setCalculatorObj] = useState({});

  const CalcuClick = (e) => {
    setCalculatorObj(calculate(calculatorObj, e.target.innerText));
  };

  return (
    <div className="ContainerCalc">
      <p className="Result">{ calculatorObj.next || calculatorObj.total || 0 }</p>
      <section className="Totalbuttons">
        <div className="ButtonsCont">
          <section className="Numbers">
            <ButtonCalculator text="AC" funcClick={CalcuClick} />
            <ButtonCalculator text="+/-" funcClick={CalcuClick} />
            <ButtonCalculator text="%" funcClick={CalcuClick} />
            <ButtonCalculator text="7" funcClick={CalcuClick} />
            <ButtonCalculator text="8" funcClick={CalcuClick} />
            <ButtonCalculator text="9" funcClick={CalcuClick} />
            <ButtonCalculator text="4" funcClick={CalcuClick} />
            <ButtonCalculator text="5" funcClick={CalcuClick} />
            <ButtonCalculator text="6" funcClick={CalcuClick} />
            <ButtonCalculator text="1" funcClick={CalcuClick} />
            <ButtonCalculator text="2" funcClick={CalcuClick} />
            <ButtonCalculator text="3" funcClick={CalcuClick} />
          </section>
          <div className="lastrowNum">
            <ButtonCalculator text="0" funcClick={CalcuClick} />
            <ButtonCalculator text="." funcClick={CalcuClick} />
          </div>
        </div>
        <section className="Operators">
          <ButtonCalculator text="÷" funcClick={CalcuClick} />
          <ButtonCalculator text="x" funcClick={CalcuClick} />
          <ButtonCalculator text="-" funcClick={CalcuClick} />
          <ButtonCalculator text="+" funcClick={CalcuClick} />
          <ButtonCalculator text="=" funcClick={CalcuClick} />
        </section>
      </section>
    </div>
  );
}

export default Calculator;
