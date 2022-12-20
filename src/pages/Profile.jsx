import React from "react";
import Name from "../components/Name";
import Gender from "../components/Gender";
import Age from "../components/Age";
import Email from "../components/Email";
import Study from "../components/Study";
import img from "../assets/img.png";
import "../style/style.css";
import NickName from "../components/NickName";
import BucketList from "../components/BucketList";

const Profile = () => {
  return (
    <div>
      <h1>
        <img src={img} alt="img" width="100px" />
        예지를 소개합니다.
      </h1>
      <div id="wrapper">
        <Name />
        <NickName />
        <Gender />
        <Age />
        <Email email="yeze0715@gmail.com" />
        <Study study="react" />
        <BucketList />
      </div>
    </div>
  );
};
export default Profile;
