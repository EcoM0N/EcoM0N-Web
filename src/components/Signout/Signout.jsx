import React from "react";
import "./Signout.css";
import Signupimg from "../../assets/image/Signup.png";

const Signout = () => {
  return (
    <div>
      <div className="signUpBack">
        <input type="text" name="" id="" placeholder="아이디를 적어주세요." />
        <img
          className="signUpnBackImg"
          src={Signupimg}
          alt="Signup 화면 이미지"
        />
      </div>
    </div>
  );
};

export default Signout;
