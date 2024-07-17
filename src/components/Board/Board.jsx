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
        await axios.post("http://localhost:8080/ecom0n/main/board", {
          shower: parseFloat(showerTime),
          cloth: parseFloat(laundryTime),
          dish: parseFloat(dishwashingTime),
        });

        alert("데이터가 성공적으로 전송되었습니다.");
        setDishwashingTime("");
        setLaundryTime("");
        setShowerTime("");
      } catch (error) {
        console.error("Error sending data to server:", error);
        alert("데이터 전송에 실패했습니다.");
      }
    }
  };

  const validateInputs = () => {
    let isValid = true;

    if (isNaN(parseFloat(dishwashingTime))) {
      alert("설거지 시간에 문자가 포함되어 있습니다.");
      setDishwashingTime("");
      isValid = false;
    }

    if (isNaN(parseFloat(laundryTime))) {
      alert("세탁 시간에 문자가 포함되어 있습니다.");
      setLaundryTime("");
      isValid = false;
    }

    if (isNaN(parseFloat(showerTime))) {
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
        <Link to="/Main">
          <button className="waterbackbtn">뒤로가기</button>
        </Link>
      </form>
    </div>
  );
};

export default Board;
