import React, { useState } from 'react';

const Card = (props) => {
  const [num, setNum] = useState(0);
  // const num = 0 ;
  const plusOnClickHandler = () => {
    setNum(num + 1);
  };

  const minusOnClickHandler = () => {
    setNum(num - 1);
  };

  const onInputChangeHandler = (event) => {
    setNum(+event.target.value);
  };

  return (
    <div>
      <button onClick={minusOnClickHandler}>- </button>
      <input type="number" value={num} onChange={onInputChangeHandler} />
      <button onClick={plusOnClickHandler}>+ </button>
    </div>
  );
};

export default Card;
