import React, { useState } from "react";
const Text = () => {
  const [inputs, setInputs] = useState({
    fruit: "",
    food: "",
    person: "",
    subject: "",
    color: "",
  });
  const { fruit, food, person, subject, color } = inputs;

  const handleInput = (e) => {
    const { id, value } = e.target;
    setInputs({ ...inputs, [id]: value });
  };
  const handleReset = () => {
    setInputs({
      fruit: "",
      food: "",
      person: "",
      subject: "",
      color: "",
    });
  };
  return (
    <div>
      <p>
        좋아하는 것: {fruit} {food} {person} {subject} {color}
      </p>
      <input
        type="text"
        id="fruit"
        value={fruit}
        onChange={handleInput}
        placeholder="좋아하는 과일"
      />
      &nbsp;
      <input
        type="text"
        id="food"
        value={food}
        onChange={handleInput}
        placeholder="좋아하는 음식"
      />
      &nbsp;
      <input
        type="text"
        id="person"
        value={person}
        onChange={handleInput}
        placeholder="좋아하는 배우"
      />
      &nbsp;
      <input
        type="text"
        id="subject"
        value={subject}
        onChange={handleInput}
        placeholder="좋아하는 과목"
      />
      &nbsp;
      <input
        type="text"
        id="color"
        value={color}
        onChange={handleInput}
        placeholder="좋아하는 색"
      />
      &nbsp;
      <button onClick={handleReset}>reset</button>
    </div>
  );
};
export default Text;
