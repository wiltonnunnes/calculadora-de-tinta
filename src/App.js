import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import InputNumber from './components/InputNumber';
import StepProgressBar from './components/StepProgressBar';

function App() {
  const [firstWallWidth, setFirstWallWidth] = useState(1);
  const [secondWallWidth, setSecondWallWidth] = useState(1);
  const [thirdWallWidth, setThirdWallWidth] = useState(1);
  const [fourthWallWidth, setFourthWallWidth] = useState(1);
  const [wallHeight, setWallHeight] = useState(2.2);
  const [numDoors, setNumDoors] = useState(0);

  const [errors, setErrors] = useState({
    firstWallWidth: '',
    secondWallWidth: '',
    thirdWallWidth: '',
    fourthWallWidth: ''
  })

  const handleSubmit = () => {};

  const Step1Content = () => (
    <div>
      <h1>1. Qual a largura das paredes que pretende pintar?</h1>
      <p>Nos campos abaixo informe em metros a largura das quatro paredes que seram pintadas.</p>
      <div>
        <label>Largura da 1ª parede</label>
        <InputNumber  
          value={firstWallWidth} 
          max={15} 
          min={1}
          onChange={(value) => {
            setFirstWallWidth(value);
          }} 
          step={0.01}
        />
        <span>Selecione um valor válido</span>
      </div>
      <div>
        <label>Largura da 2ª parede</label>
        <InputNumber  
          value={secondWallWidth} 
          max={15} 
          min={1}
          onChange={(value) => {
            setSecondWallWidth(value);
          }} 
          step={0.01}
        />
      </div>
      <div>
        <label>Largura da 3ª parede</label>
        <InputNumber  
          value={thirdWallWidth} 
          max={15} 
          min={1}
          onChange={(value) => {
            setThirdWallWidth(value);
          }} 
          step={0.01}
        />
      </div>
      <div>
        <label>Largura da 4ª parede</label>
        <InputNumber  
          value={fourthWallWidth} 
          max={15} 
          min={1}
          onChange={(value) => {
            setFourthWallWidth(value);
          }} 
          step={0.01}
        />
      </div>
    </div>
  );
  
  const Step2Content = () => (
    <div>
      <h1>1. Qual a largura das paredes que pretende pintar?</h1>
      <p>Nos campos abaixo informe em metros a largura das quatro paredes que seram pintadas.</p>
      <label>Número de portas</label>
      <InputNumber  
        value={numDoors} 
        max={15} 
        min={1}
        onChange={(value) => {
          setNumDoors(value);
        }}
      />
    </div>
  );

  const Step3Content = () => (
    <div>
      <label>Altura das paredes</label>
      <InputNumber  
        value={wallHeight} 
        max={15} 
        min={1}
        onChange={(value) => {
          setWallHeight(value);
        }}
      />
    </div>
  );

  return (
    <div>
      <StepProgressBar 
        stepClass="step" 
        steps={[
          {
            name: '',
            content: <Step1Content />
          },
          {
            name: '',
            content: <Step2Content />
          },
          {
            name: '',
            content: <Step3Content />
          }
        ]} 
        progressClass="progress" 
        secondaryBtnClass="secondaryBtn" 
        primaryBtnClass="primaryBtn" 
        buttonWrapperClass="buttonWrapper" 
        contentClass="content"
      />
    </div>
  );
}

export default App;
