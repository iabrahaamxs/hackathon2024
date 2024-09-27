import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "../stylesheets/More.css";
import RowInventory from "./RowInventory";
import { calculatePriority } from "../utils/utils";

function MoreInventory({ title, gm, quantity, rows }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const priority = Math.min(...rows.map(row => calculatePriority(row.date)));

  const getPrioriClass = (priority) => {
    switch (priority) {
      case 1:
        return "priority-red";
      case 2:
        return "priority-yellow";
      case 3:
        return "priority-green";
      default:
        return "";
    }
  };

  return (
      <div className={`more-container ${isOpen ? "active" : ""}`}>
        <div
            style={{opacity: 0.6, gap: 50}}
            className={`title ${isOpen ? "active" : ""}`}
            onClick={handleClick}
        >
        <div style={{display: "flex", alignItems: "center"}}><div className={`priority-indicator ${getPrioriClass(priority)}`}></div>
          <h4 className={"title-text"}>{title}</h4></div>
          <div style={{width: "50%"}}></div>
          <h4>{quantity} unidades</h4>
          {isOpen ? (
              <FaAngleUp className="arrow"/>
          ) : (
              <FaAngleDown className="arrow"/>
          )}
        </div>
        {isOpen && (
            <div className={"info"}>
              {rows.map((row, index) => (
                  <RowInventory
                      key={index}
                      gm={row.gm}
                      name={row.name}
                      med={row.med}
                      date={row.date}
                      quantity={row.quantity}
                  />
              ))}
            </div>
        )}
      </div>
  );
}

export default MoreInventory;