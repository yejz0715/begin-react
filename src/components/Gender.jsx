import React, { useState } from "react";
const Gender = () => {
  const [gender, setGender] = useState("");

  const handleFemale = () => {
    setGender("여자");
  };
  const handleMale = () => {
    setGender("남자");
  };
  return (
    <>
      <p>성별: {gender}</p>
      <input type="radio" name="gender" id="female" onClick={handleFemale} />
      <label htmlFor="female">여자</label>
      <input type="radio" name="gender" id="male" onClick={handleMale} />
      <label htmlFor="male">남자</label>
    </>
  );
};
export default Gender;
