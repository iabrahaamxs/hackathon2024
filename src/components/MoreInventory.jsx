import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "../stylesheets/More.css";

function MoreInventory({ title, gm, cant, infoComponent }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`more-container ${isOpen ? "active" : ""}`}>
      <div
        style={{ opacity: 0.6, gap: 50 }}
        className={`title ${isOpen ? "active" : ""}`}
        onClick={handleClick}
      >
        <h4 className={"title-text"}>{title}</h4>
        <h4>{gm}g</h4>
        <div style={{ width: "50%" }}></div>
        <h4>{cant} unidades</h4>

        {isOpen ? (
          <FaAngleUp className="arrow" />
        ) : (
          <FaAngleDown className="arrow" />
        )}
      </div>
      {isOpen && <div className={"info"}>{infoComponent}</div>}
    </div>
  );
}

export default MoreInventory;
