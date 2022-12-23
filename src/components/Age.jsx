import React from "react";
import { useState } from "react";
const Age = () => {
  const [num, setNum] = useState(0);
  const [leftNum, setLeftNum] = useState("_ ");
  const [rightNum, setRightNum] = useState("_");
  const onIncrease = () => {
    if (num > 8) {
      return alert("더이상 접근할 수 없습니다.");
    }
    setNum((num) => num + 1);
  };
  const onDecrease = () => {
    if (num < 1) {
      return alert("더이상 접근할 수 없습니다.");
    }
    setNum((num) => num - 1);
  };
  const handleRight = () => {
    setRightNum(num);
  };
  const handleLeft = () => {
    setLeftNum(num);
  };
  const handleReset = () => {
    setNum(0);
  };
  return (
    <>
      <p>
        제 나이는 {leftNum}
        {rightNum}세 입니다. &nbsp;&nbsp;
        <button onClick={handleLeft}>L</button>&nbsp;
        <button onClick={handleRight}>R</button>
      </p>
      <label>{num}</label>&nbsp;&nbsp;
      <button onClick={onIncrease}>+1</button>&nbsp;
      <button onClick={onDecrease}>-1</button>&nbsp;
      <button onClick={handleReset}>reset</button>
    </>
  );
};
export default Age;
