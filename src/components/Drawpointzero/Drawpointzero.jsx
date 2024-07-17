import React from "react";
import "./Drawpointzero.css";
import Drawballback from "../../assets/image/Drawballback.png";
import Pointzero from "../../assets/image/Pointzero.png";
import { Link } from "react-router-dom";

const Drawpointzero = () => {
  return (
    <div className="Drawpointzero">
      <img className="Pointzero" src={Pointzero} alt="" />
      <img className="Drawballback" src={Drawballback} alt="" />
      <Link to={`/Draw`}>
        <button className="pointzeroBtn">확인</button>
      </Link>
    </div>
  );
};

export default Drawpointzero;
