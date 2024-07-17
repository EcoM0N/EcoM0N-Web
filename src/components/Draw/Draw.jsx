import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Draw.css";
import Drawback from "../../assets/image/Drawback.png";
import Drawballbtn from "../../assets/image/Drawballbtn.png";
import Coin from "../../assets/image/Coin.png";

const Draw = () => {
  const [coins, setCoins] = useState(20); // 초기 코인 수
  const [isRotated, setIsRotated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleImageClick = () => {
    // 코인 감소 로직
    const newCoins = coins - 10;
    if (newCoins < 10) {
      navigate("/Drawpointzero"); // 코인이 10 미만이면 Drawpointzero 페이지로 이동
    } else {
      setCoins(newCoins);
      setIsRotated(true);
      setIsAnimating(true);
      setTimeout(() => {
        navigate("/Drawball");
      }, 2000);
    }
  };

  useEffect(() => {
    const handleAnimationEnd = () => {
      setIsAnimating(false);
    };

    const drawballbtnElement = document.querySelector(".Drawballbtn");
    if (drawballbtnElement) {
      drawballbtnElement.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (drawballbtnElement) {
        drawballbtnElement.removeEventListener(
          "animationend",
          handleAnimationEnd
        );
      }
    };
  }, []);

  return (
    <div>
      <p className="CoinText">{coins}</p>
      <img className="Coin" src={Coin} alt="" />
      <img className="Drawback" src={Drawback} alt="" />
      <div>
        <img
          className="Drawballbtn"
          src={Drawballbtn}
          alt=""
          onClick={() => {
            handleImageClick();
          }}
          style={{
            transform: isRotated ? "rotate(720deg)" : "rotate(0deg)",
            transition: isAnimating ? "transform 2s ease" : "none",
          }}
        />
      </div>
      <div>
        <Link to="/Main">
          <button className="DrawbackBtn">뒤로가기</button>
        </Link>
      </div>
    </div>
  );
};

export default Draw;
