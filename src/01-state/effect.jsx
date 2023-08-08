import React, { useState, useEffect } from 'react';

const Effect = () => {
  const [prix, setPrix] = useState(20);
  const [total, setTotal] = useState(100);

  const incrementPrix = () => {
    setPrix(prix + 5);
  }

  const incrementTotal = () => {
    setTotal(total + 5);
  }

  useEffect(() => {
    if (total !== 100) {
      alert(`La valeur du total a changé : ${total}`);
    }
  }, [total]);

  return (
    <div>
      <h1>Ex2 :</h1>
      <p>Prix : {prix}</p>
      <p>Total : {total}</p>
      <button onClick={incrementPrix}>Incrémenter Prix</button>
      <button onClick={incrementTotal}>Incrémenter Total</button>
    </div>
  );
}

export default Effect;
