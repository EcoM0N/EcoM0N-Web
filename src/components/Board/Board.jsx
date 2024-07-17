import React, { useState } from "react";
import "./Board.css";
import Waterboard from "../../assets/image/Board.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Board = () => {
  const [dishwashingTime, setDishwashingTime] = useState("");
  const [laundryTime, setLaundryTime] = useState("");
  const [showerTime, setShowerTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateInputs();

    if (isValid) {
      try {
        await axios.post("/api/board", {
          dishwashingTime,
          laundryTime,
          showerTime,
        });

        setDishwashingTime("");
        setLaundryTime("");
        setShowerTime("");
      } catch (error) {
        console.error("Error sending data to server:", error);
      }
    }
  };

  const validateInputs = () => {
    let isValid = true;

    if (isNaN(dishwashingTime)) {
      alert("설거지 시간에 문자가 포함되어 있습니다.");
      setDishwashingTime("");
      isValid = false;
    }

    if (isNaN(laundryTime)) {
      alert("세탁 시간에 문자가 포함되어 있습니다.");
      setLaundryTime("");
      isValid = false;
    }

    if (isNaN(showerTime)) {
      alert("샤워 시간에 문자가 포함되어 있습니다.");
      setShowerTime("");
      isValid = false;
    }

    return isValid;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="boardInput">
          <input
            className="boardInputCss"
            type="text"
            placeholder="설거지 시간을 적어주세요"
            value={dishwashingTime}
            onChange={(e) => setDishwashingTime(e.target.value)}
          />
          <input
            className="boardInputCss"
            type="text"
            placeholder="세탁 시간을 적어주세요"
            value={laundryTime}
            onChange={(e) => setLaundryTime(e.target.value)}
          />
          <input
            className="boardInputCss"
            type="text"
            placeholder="샤워 시간을 적어주세요"
            value={showerTime}
            onChange={(e) => setShowerTime(e.target.value)}
          />
        </div>
        <img className="waterBoard" src={Waterboard} alt="배경" />
        <button type="submit" className="waterBoardBtn">
          확인
        </button>
        <Link to={`/Main`}>
          <button className="waterbackbtn">뒤로가기</button>
        </Link>
      </form>
    </div>
  );
};

export default Board;
