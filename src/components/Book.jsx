import React from "react";
const Book = ({ title, price }) => {
  return (
    <div>
      <li>
        제목: {title}, 가격:{price}
      </li>
    </div>
  );
};
export default Book;
