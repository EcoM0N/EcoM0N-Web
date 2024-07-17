import React from "react";
import "./Drawmonster.css";
import Right from "../../assets/image/right.png";
import Pish from "../../assets/image/Rainpish.png";
import { Link } from "react-router-dom";

const Drawmonster = () => {
  return (
    <div className="Drawmonster">
      <Link to={`/Draw`}>
        <img className="pish animate" src={Pish} alt="Signin 화면 이미지" />
      </Link>
      <p className="pishText animate">무지개물고기</p>
      <img className="Right" src={Right} alt="Signin 화면 이미지" />
    </div>
  );
};
export default Drawmonster;
