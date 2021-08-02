import React from 'react';

class InputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  static defaultProps = {
    step: 1
  };

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  decrement() {
    this.props.onChange(this.props.value - this.props.step);
  }

  increment() {
    this.props.onChange(this.props.value + this.props.step);
  }

  render() {
    return (
      <div>
        <button 
          className="value-button" 
          onClick={this.decrement}
        >
          -
        </button>
        <input 
          type="number" 
          max={this.props.max} 
          min={this.props.min} 
          value={this.props.value} 
          onChange={this.handleChange} 
          step={this.props.step}
        />
        <button 
          className="value-button" 
          onClick={this.increment}
        >
          +
        </button>
      </div>
    );
  }
}

export default InputNumber;