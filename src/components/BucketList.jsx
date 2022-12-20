import React, { useState } from "react";
const BucketList = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    setList([...list, text]);
    setText("");
  };
  const handleDelete = (target) => {
    setList(list.filter((_, index) => index !== target));
  };
  return (
    <div>
      <h3>예지의 버킷리스트</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="입력하세요!"
      />
      &nbsp;
      <button onClick={handleAdd}>추가</button>
      <ul>
        {list.map((text, index) => (
          <li key={index}>
            {text}
            <button onClick={() => handleDelete(index)}>삭제</button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BucketList;
