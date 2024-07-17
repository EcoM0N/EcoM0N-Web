import React from "react";
import "./Signin.css";
import Signinimg from "../../assets/image/Signin.png";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <div className="signInBack">
        <Link to="/Main">
          <button className="cacaoBtn">카카오로 시작하기</button>
        </Link>

        <img
          className="signInBackImg"
          src={Signinimg}
          alt="Signin 화면 이미지"
        />
      </div>
    </div>
  );
};

export default Signin;
