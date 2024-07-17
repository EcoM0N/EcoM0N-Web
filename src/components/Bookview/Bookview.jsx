import React from "react";
import "./Bookview.css";
import Bookviewimg from "../../assets/image/Bookview.png";
import Book from "../Book/Book";
import Onefish from "../../assets/image/1.png";
import { Link } from "react-router-dom";

const Bookview = () => {
  return (
    <div className="backView">
      <div>
        <div className="bookview">
          <img className="bookviewSmallimg" src={Onefish} alt="" />
          <p className="bookviewName">무지개물고기</p>
          <p className="bookviewText">
            질병이 확산되어서 내 무지개빛 비늘이 하나씩 없어지고 있어. 내
            무지개빛 비늘을 지켜줘ㅠㅠ
          </p>
        </div>
        <Link to="/Book">
          <button className="bookviewFishBtn">확인</button>
        </Link>
        <img className="bookviewImg" src={Bookviewimg} alt="" />
      </div>
      <div className="background"></div>
      <Book />
    </div>
  );
};

export default Bookview;
