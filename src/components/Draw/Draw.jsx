import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Draw.css";
import Drawback from "../../assets/image/Drawback.png";
import Drawballbtn from "../../assets/image/Drawballbtn.png";
import Coin from "../../assets/image/Coin.png";

const Draw = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleImageClick = () => {
    setIsRotated(true);
    setIsAnimating(true);
    setTimeout(() => {
      navigate("/Drawball");
    }, 2000);
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
