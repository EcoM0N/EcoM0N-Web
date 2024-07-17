import React from "react";
import "./Mypage.css";
import MypageImg from "../../assets/image/Mypage.png";
import Logout from "../../assets/image/Logout.png";
import Drawbtn from "../../assets/image/Drawbtn.png";
import Bookbtn from "../../assets/image/Bookbtn.png";
import { Link } from "react-router-dom";

const Mypage = () => {
  return (
    <div>
      <div className="mypage">
        <p className="myPageID">LeeYeeJin</p>
        <p className="myPageP">20</p>
        <div className="myPageBtnImg">
          <Link to={`/Book`}>
            <img className="Bookbtn" src={Bookbtn} alt="도감 이미지" />
          </Link>
          <Link to={`/Draw`}>
            <img className="Drawbtn" src={Drawbtn} alt="뽑기 이미지" />
          </Link>
        </div>
        <img className="myPageImg" src={MypageImg} alt="마이페이지 이미지" />
        <Link to={`/Signin`}>
          <img className="logOut" src={Logout} alt="로그아웃" />
        </Link>
      </div>
    </div>
  );
};

export default Mypage;
