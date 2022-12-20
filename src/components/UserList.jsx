import React, { useState } from "react";
const UserList = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const handleAdd = () => {
    setList([...list, name]);
    setName("");
  };
  const handleDelete = (target) => {
    setList(list.filter((_, index) => index !== target));
  };
  return (
    <div>
      <b>이름을 입력하시오!</b>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="입력하세요!"
      />
      <button onClick={handleAdd}>확인</button>
      <ul>
        {list.map((name, index) => (
          <li key={index}>
            {name}
            <button onClick={() => handleDelete(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
