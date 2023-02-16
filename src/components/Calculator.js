import React from 'react';
import './Calculator.css';
import ButtonCalculator from './Button';

function Calculator() {
  return (
    <div className="ContainerCalc">
      <p className="Result">0</p>
      <section className="Totalbuttons">
        <div className="ButtonsCont">
          <section className="Numbers">
            <ButtonCalculator text="AC" />
            <ButtonCalculator text="+/-" />
            <ButtonCalculator text="%" />
            <ButtonCalculator text="7" />
            <ButtonCalculator text="8" />
            <ButtonCalculator text="9" />
            <ButtonCalculator text="4" />
            <ButtonCalculator text="5" />
            <ButtonCalculator text="6" />
            <ButtonCalculator text="1" />
            <ButtonCalculator text="2" />
            <ButtonCalculator text="3" />
          </section>
          <div className="lastrowNum">
            <ButtonCalculator text="0" />
            <ButtonCalculator text="." />
          </div>
        </div>
        <section className="Operators">
          <ButtonCalculator text="÷" />
          <ButtonCalculator text="x" />
          <ButtonCalculator text="-" />
          <ButtonCalculator text="+" />
          <ButtonCalculator text="=" />
        </section>
      </section>
    </div>
  );
}

export default Calculator;
