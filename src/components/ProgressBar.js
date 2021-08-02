import React from 'react';

const ProgressBar = props => {
  const { bgColor, completed, containerClass } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgColor
  };

  return (
    <div 
      className={containerClass}
    >
      <div style={fillerStyles} />
    </div>
  );
};

export default ProgressBar;