import React from 'react';
import PropTypes from 'prop-types';

const ButtonOperator = ({ text }) => <button type="submit" className="ButtonClassOper">{text}</button>;
ButtonOperator.propTypes = {
  text: PropTypes.string.isRequired,
};

const ButtonNumbers = ({ text }) => <button type="submit" className="ButtonClass">{text}</button>;
ButtonNumbers.propTypes = {
  text: PropTypes.string.isRequired,
};

export { ButtonOperator, ButtonNumbers };
