import React from 'react';
import './App.css';

function App() {
  const [score,setScore] = React.useState(0)
  const [mistakes,setMistakes] = React.useState(0)
  const [currentProblem, setCurrentProblem] = React.useState(generateProblem())


  function generateNumber(max) {
    return Math.floor(Math.random()*(max + 1))
  }
  function generateProblems(){
    return {
        numberOne:generateNumber(10),
        numberTwo:generateNumber(10),
        operator: ['+','-','x'][generate(2)]
    }
  }

  return (
    <div className="App">
      <div className="main-ui">
  <p className="problem">{currentProblem.numberOne} {currentProblem.operator} {currentProblem.numberTwo}</p>

  <form action="" className="our-form">
    <input type="text" className="our-field" autoComplete="off" />
    <button>Submit</button>
  </form>

  <p className="status">You need {10 - score} more points, and are allowed to make {2-mistakes} more mistakes.</p>

  <ProgressBar />

</div>

<div className="overlay">
  <div className="overlay-inner">
    <p className="end-message"></p>
    <button className="reset-button">Start Over</button>
  </div>
</div>
    </div>
  );
}

function ProgressBar (){
  return (
    <div className="progress">
    <div className="boxes">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div clasName="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
    <div className="progress-inner"></div>
  </div>
  );
}
export default App;
