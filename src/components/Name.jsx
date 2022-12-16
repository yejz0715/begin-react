import React, { useState } from "react";

const Name = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleId = (e) => {
    setId(e.target.value);
  };
  return (
    <div>
      <p>
        {" "}
        안녕하세요! 제 이름은 {name},아이디는 {id} 입니다.
      </p>
      <input
        type="text"
        value={name}
        onChange={handleName}
        placeholder="이름을 입력하세요!"
      />
      &nbsp;
      <input
        type="text"
        value={id}
        onChange={handleId}
        placeholder="아이디 입력하세요!"
      />
    </div>
  );
};
export default Name;
