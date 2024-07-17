import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Main.css";
import Mainback from "../../assets/image/Mainback.png";
import Drawbtn from "../../assets/image/Drawbtn.png";
import Mypagebtn from "../../assets/image/Mypagebtn.png";
import Bookbtn from "../../assets/image/Bookbtn.png";
import Water from "../../assets/image/Water.png";
import { Link } from "react-router-dom";
import Greenfish from "../../assets/image/Greenfish.png";

const Main = () => {
  const [waveTop, setWaveTop] = useState(0);
  const { state } = useLocation();
  const { userInputValue } = state || {};

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveTop((prevTop) => prevTop + 1);
      if (waveTop >= userInputValue) {
        setWaveTop(Number(userInputValue));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [waveTop, userInputValue]);

  return (
    <div>
      <span className="waveback">
        <span className="wave" style={{ top: `${waveTop}%` }}></span>
      </span>
      <img className="Greenfish" src={Greenfish} alt="물고기" />
      <img className="mainBackImg" src={Mainback} alt="Main 화면 이미지" />
      <div className="btnBox">
        <Link className="btn" to={`/Draw`}>
          <img className="btn" src={Drawbtn} alt="뽑기버튼" />
        </Link>
        <Link className="btn" to={`/Book`}>
          <img className="btn" src={Bookbtn} alt="도감버튼" />
        </Link>
        <Link className="btn" to={`/Mypage`}>
          <img className="btn" src={Mypagebtn} alt="마이페이지버튼" />
        </Link>
        <Link className="btn" to={`/Board`}>
          <img className="btn waterbtn" src={Water} alt="물 사용 게시판버튼" />
        </Link>
      </div>
      <p className="waterL">0%</p>
    </div>
  );
};

export default Main;
