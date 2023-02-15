import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="ContainerCalc">
      <p className="Result">0</p>
      <section className="Totalbuttons">
        <div className="ButtonsCont">
          <section className="Numbers">
            <button className="ButtonClass" type="button">AC</button>
            <button className="ButtonClass" type="button">+/-</button>
            <button className="ButtonClass" type="button">%</button>
            <button className="ButtonClass" type="button">7</button>
            <button className="ButtonClass" type="button">8</button>
            <button className="ButtonClass" type="button">9</button>
            <button className="ButtonClass" type="button">4</button>
            <button className="ButtonClass" type="button">5</button>
            <button className="ButtonClass" type="button">6</button>
            <button className="ButtonClass" type="button">1</button>
            <button className="ButtonClass" type="button">2</button>
            <button className="ButtonClass" type="button">3</button>
          </section>
          <div className="lastrowNum">
            <button className="ButtonClass" type="button">0</button>
            <button className="ButtonClass" type="button">.</button>
          </div>
        </div>
        <section className="Operators">
          <button className="ButtonClassOper" type="button">÷</button>
          <button className="ButtonClassOper" type="button">x</button>
          <button className="ButtonClassOper" type="button">-</button>
          <button className="ButtonClassOper" type="button">+</button>
          <button className="ButtonClassOper" type="button">=</button>
        </section>
      </section>
    </div>
  );
}

export default Calculator;
