import React from "react";
import { useState } from "react";

const NickName = () => {
  const [inputs, setInputs] = useState({ name: "", nickName: "" });

  const { name, nickName } = inputs;
  const handleInput = (e) => {
    const { id, value } = e.target;
    setInputs({ ...inputs, [id]: value });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickName: "",
    });
  };
  return (
    <div>
      <p>
        안녕하세요! 제 이름은 {name}, 닉네임은 {nickName} 입니다.
      </p>
      <input
        type="text"
        onChange={handleInput}
        id="name"
        value={name}
        placeholder="이름"
      />
      <input
        type="text"
        onChange={handleInput}
        id="nickName"
        value={nickName}
        placeholder="닉네임"
      />
      <button onClick={onReset}>초기화</button>
    </div>
  );
};
export default NickName;
