import React from 'react';
import PropTypes from 'prop-types';
// import calculate from '../logic/calculate';

class ButtonCalculator extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { isPreset: false };

    /* neccesay binding */
    this.CalcuClick = this.CalcuClick.bind(this);
  }

  CalcuClick() {
    const { text } = this.props;
    // this.setState({  });
    console.log(text);
  }

  render() {
    const { text } = this.props;
    if (text === '÷' || text === 'x' || text === '-' || text === '=' || text === '+') {
      return (
        <button onClick={this.CalcuClick} type="submit" className="ButtonClassOper">
          { text }
        </button>
      );
    }
    return (
      <button onClick={this.CalcuClick} type="submit" className="ButtonClass">
        { text }
      </button>
    );
  }
}

ButtonCalculator.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonCalculator;
