import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import {FaBookMedical, FaFileMedical, FaFileMedicalAlt, FaLock} from "react-icons/fa";
import { BsBox2HeartFill } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import { RiQuestionnaireFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import React from "react";

function BtnOption({ text, iconName, selected, handleClick }) {
  const iconMap = {
    deliver: <FaHandHoldingHeart />,
    user: <FaUserPlus />,
    patient: <FaFileMedical />,
    box: <BsBox2HeartFill />,
    item: <FaBookMedical />,
    report: <FaFileMedicalAlt />,
    question: <RiQuestionnaireFill />,
    logout: <MdLogout />,
    password: <FaLock />
  };

  return (
    <button
      onClick={() => handleClick(iconName)}
      style={{
        border: 0,
        cursor: "pointer",
        opacity: selected ? 1 : 0.5,
        color: selected ? "white" : "black",
        backgroundColor: selected ? "#4B9AC5" : "white",
        display: "flex",
        alignItems: "center",
        height: "45px",
      }}
      className="panel-btn"
    >
      <i style={{ fontSize: 22, marginRight: 8 }}>{iconMap[iconName]}</i>
      <p style={{ fontSize: 15 }}>{text}</p>
    </button>
  );
}

export default BtnOption;
