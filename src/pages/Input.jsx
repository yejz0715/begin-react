import React from "react";
import Text from "../components/Text";
import User from "../components/User";
import Book from "../components/Book";
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
  const books = [
    { id: 1, title: "만일 내가 인생을 다시 산다면", price: 15000 },
    { id: 2, title: "트랜드 코리아 2023", price: 17000 },
    { id: 3, title: "불편한 편의점", price: 12000 },
    { id: 4, title: "아버지의 해방일지", price: 13500 },
  ];
  return (
    <div>
      <h1>입력하세요!</h1>
      <Text />
      <h1>소개합니다.</h1>
      {users.map((item) => (
        <User key={item.id} name={item.name} age={item.age} />
      ))}
      <h1>베스트셀러</h1>
      <b>12월 4주 종합 베스트셀러</b>
      {books.map((item) => (
        <Book key={item.id} title={item.title} price={item.price} />
      ))}
    </div>
  );
};
export default Input;
