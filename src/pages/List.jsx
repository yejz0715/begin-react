import React from "react";
import { Link } from "react-router-dom";
const List = () => {
  return (
    <div>
      <h1>List Page</h1>
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/input">Input</Link>
    </div>
  );
};
export default List;
