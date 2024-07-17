import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    navigate("/Main", { state: { userInputValue: inputValue } });
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>확인</button>
    </div>
  );
};

export default Admin;