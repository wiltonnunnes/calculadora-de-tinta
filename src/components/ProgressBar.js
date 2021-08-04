import React from 'react';
import styled from 'styled-components';

const ProgressBar = props => {
  const { bgColor, completed, containerClass } = props;

  const Container = styled.div`
    height: 20;
    width: 100%;
    background-color: #e0e0de;
    border-radius: 50;
    margin: 50;
  `;

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgColor
  };

  return (
    <Container>
      <div style={fillerStyles} />
    </Container>
  );
};

export default ProgressBar;