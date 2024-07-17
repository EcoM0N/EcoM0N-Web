import React, { useState } from "react";
import "./Drawmonster.css";
import Right from "../../assets/image/right.png";
import { Link } from "react-router-dom";
import Onefish from "../../assets/image/1.png"; // 니모
import Twofish from "../../assets/image/2.png"; // 대한피쉬
import Threefish from "../../assets/image/3.png"; // 민초피쉬
import Fourfish from "../../assets/image/4.png"; // 바비물고기
import Fivefish from "../../assets/image/5.png"; // 바오피쉬
import Sixfish from "../../assets/image/6.png"; // 금붕어
import Sevenfish from "../../assets/image/7.png"; // 토끼피쉬
import Eightfish from "../../assets/image/8.png"; // 꿀꿀이
import Ninefish from "../../assets/image/9.png"; // 형광피쉬
import axios from "axios";

const Drawmonster = () => {
  const imageData = [
    Onefish, // 1. 니모
    Twofish, // 2. 대한피쉬
    Threefish, // 3. 민초피쉬
    Fourfish, // 4. 바비물고기
    Fivefish, // 5. 바오피쉬
    Sixfish, // 6. 금붕어
    Sevenfish, // 7. 토끼피쉬
    Eightfish, // 8. 꿀꿀이
    Ninefish, // 9. 형광피쉬
  ];

  const firstNames = [
    "니모임?", // 1. 니모
    "대한피쉬", // 2. 대한피쉬
    "민초피쉬", // 3. 민초피쉬
    "바비물고기", // 4. 바비물고기
    "바오피쉬", // 5. 바오피쉬
    "금붕어", // 6. 금붕어
    "토끼피쉬", // 7. 토끼피쉬
    "꿀꿀이", // 8. 꿀꼴이
    "형광피쉬", // 9. 형광피쉬
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [imageName, setImageName] = useState("");

  const handleImageClick = async (index) => {
    setSelectedImageIndex(index);

    try {
      const response = await axios.post("임시", { index });
      setImageName(response.data.imageName);
    } catch (error) {
      console.error("Error fetching image name:", error);
    }
  };

  const randomIndex = Math.floor(Math.random() * imageData.length);
  const randomImageSrc = imageData[randomIndex];
  const randomFirstNameIndex = randomIndex;
  const randomFirstName = firstNames[randomFirstNameIndex];
  const randomName = `${randomFirstName}`;

  return (
    <div className="Drawmonster">
      <Link to="/Draw">
        <img
          className="pish animate"
          src={randomImageSrc}
          alt="Signin 화면 이미지"
          onClick={() => handleImageClick(randomIndex + 1)}
        />
      </Link>
      <p className="pishText animate">{randomName}</p>
      <img className="Right" src={Right} alt="Signin 화면 이미지" />
    </div>
  );
};

export default Drawmonster;
