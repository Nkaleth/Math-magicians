import React from 'react';
import './Calculator.css';
import { ButtonNumbers, ButtonOperator } from './Button';

function Calculator() {
  return (
    <div className="ContainerCalc">
      <p className="Result">0</p>
      <section className="Totalbuttons">
        <div className="ButtonsCont">
          <section className="Numbers">
            <ButtonNumbers text="AC" />
            <ButtonNumbers text="+/-" />
            <ButtonNumbers text="%" />
            <ButtonNumbers text="7" />
            <ButtonNumbers text="8" />
            <ButtonNumbers text="9" />
            <ButtonNumbers text="4" />
            <ButtonNumbers text="5" />
            <ButtonNumbers text="6" />
            <ButtonNumbers text="1" />
            <ButtonNumbers text="2" />
            <ButtonNumbers text="3" />
          </section>
          <div className="lastrowNum">
            <ButtonNumbers text="0" />
            <ButtonNumbers text="." />
          </div>
        </div>
        <section className="Operators">

          <ButtonOperator text="÷" />
          <ButtonOperator text="x" />
          <ButtonOperator text="-" />
          <ButtonOperator text="+" />
          <ButtonOperator text="=" />
        </section>
      </section>
    </div>
  );
}

export default Calculator;
