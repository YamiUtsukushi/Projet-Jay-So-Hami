import React, { useState } from 'react';

const Countertime = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startCounter = () => {
    if (!isRunning) {
      setIsRunning(true);
      const intervalId = setInterval(() => {
        setCounter(prevCounter => prevCounter + 1);
      }, 1000);

      // Stocker l'ID d'intervalle dans le DOM
      window.intervalId = intervalId;
    }
  }

  const pauseCounter = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(window.intervalId);
    }
  }

  const resetCounter = () => {
    setCounter(0);
    if (isRunning) {
      setIsRunning(false);
      clearInterval(window.intervalId);
    }
  }

  return (
    <div>
      <h1>Timer : {counter}</h1>
      <button onClick={startCounter}>Démarrer</button>
      <button onClick={pauseCounter}>Pause</button>
      <button onClick={resetCounter}>Réinitialiser</button>
    </div>
  );
}

export default Countertime;
