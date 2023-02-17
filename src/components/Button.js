import PropTypes from 'prop-types';
import React from 'react';

function ButtonCalculator({ text, funcClick }) {
  if (text === '÷' || text === 'x' || text === '-' || text === '=' || text === '+') {
    return (
      <button onClick={funcClick} type="button" className="ButtonClassOper" name={text}>
        { text }
      </button>
    );
  }
  return (
    <button onClick={funcClick} type="button" className="ButtonClass" name={text}>
      { text }
    </button>
  );
}

ButtonCalculator.propTypes = {
  text: PropTypes.string.isRequired,
  funcClick: PropTypes.func.isRequired,
};

export default ButtonCalculator;
