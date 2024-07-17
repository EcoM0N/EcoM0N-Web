import React, { useEffect, useState } from "react";
import "./Drawball.css";
import Drawballback from "../../assets/image/Drawballback.png";
import ball from "../../assets/image/Ball.png";
import { useNavigate } from "react-router-dom";

const Drawball = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const handleBallClick = () => {
    const ballElement = document.querySelector(".ball");
    ballElement.classList.add("vibrate");
    setIsAnimating(true);
    setTimeout(() => {
      navigate("/Drawmonster");
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
    <div className="Drawball">
      <img className="ball" src={ball} alt="" onClick={handleBallClick} />
      <img className="Drawballback" src={Drawballback} alt="" />
    </div>
  );
};

export default Drawball;
