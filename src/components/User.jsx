import React from "react";
const User = ({ name, age }) => {
  return (
    <div>
      <li>
        제 친구 {name}은 {age}살 입니다.
      </li>
    </div>
  );
};
export default User;
