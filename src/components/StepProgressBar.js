import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';

class StepProgressBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
    this.increaseStep = this.increaseStep.bind(this);
    this.decreaseStep = this.decreaseStep.bind(this);
  }

  static propTypes = {
    steps: PropTypes.array.isRequired,
    stepClass: PropTypes.string,
    progressClass: PropTypes.string,
    buttonWrapperClass: PropTypes.string,
    primaryBtnClass: PropTypes.string,
    secondaryBtnClass: PropTypes.string,
    contentClass: PropTypes.string
  };

  increaseStep() {
    this.setState((state) => {
      return {step: state.step + 1};
    });
  }

  decreaseStep() {
    this.setState((state) => {
      return {step: state.step - 1};
    });
  }

  render() {
    const { step } = this.state;
    return (
      <div>
        <div className={this.props.progressClass}>
          <ProgressBar 
            bgColor="blue" 
            completed={(100 / this.props.steps.length) * step} 
            containerClass="progress-bg"
          />
          {this.props.steps.map((item, index) => (
            <div 
              className={this.props.stepClass} 
              style={{ backgroundColor: index < step ? 'green' : (index == step ? 'blue' : 'gray') }}
            >
              {index}
            </div>
          ))}
        </div>
        <div className={this.props.contentClass}>
          {this.props.steps[step].content}
        </div>
        <div className={this.props.buttonWrapperClass}>
          <button 
            className={this.props.primaryBtnClass} 
            onClick={this.decreaseStep}
          >
            Voltar
          </button>
          <button 
            className={this.props.secondaryBtnClass} 
            onClick={this.increaseStep}
          >
            Continuar
          </button>
        </div>
      </div>
    );
  }
}

export default StepProgressBar;