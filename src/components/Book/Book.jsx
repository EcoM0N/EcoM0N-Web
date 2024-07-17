import React from "react";
import "./Book.css";
import Bookback from "../../assets/image/Bookback.png";

import { Link } from "react-router-dom";

const Book = () => {
  return (
    <div>
      <img className="bookBackImg" src={Bookback} alt="도감 배경" />
      <div className="bookImg">
        {/* <Link className="btn" to={`/Book/:idx`}>
          <img src={one} alt="" />
        </Link> */
        /* <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={saven} alt="" />
        <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={saven} alt="" /> */}
      </div>
      <div className="bottomBtn">
        <Link to={`/Main`}>
          <button className="backBtn">뒤로가기</button>
        </Link>
      </div>
    </div>
  );
};

export default Book;
