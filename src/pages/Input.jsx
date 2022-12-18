import React from "react";
import Text from "../components/Text";
import User from "../components/User";
const Input = () => {
  const users = [
    {
      id: 1,
      name: "sophie",
      age: 19,
    },
    {
      id: 2,
      name: "stephanie",
      age: 27,
    },
    {
      id: 3,
      name: "dan",
      age: 22,
    },
    {
      id: 4,
      name: "charles",
      age: 20,
    },
  ];
  return (
    <div>
      <h1>입력하세요!</h1>
      <Text />
      <h1>소개합니다.</h1>
      {users.map((item) => (
        <User key={item.id} name={item.name} age={item.age} />
      ))}
    </div>
  );
};
export default Input;
