import Button from "./Button";
import { calculatePriority } from "../utils/utils";

function RowInventory({ gm, name, med, quantity, date }) {
  const priority = calculatePriority(date);

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
      <div className="row-table">
        <div className={`priority-indicator ${getPrioriClass(priority)}`}></div>
        <span style={{ width: "25%" }} className="column">
        {name}
      </span>
        <span style={{ width: "15%" }} className="column">
        {gm}
      </span>
        <span style={{ width: "15%" }} className="column">
        #{med}
      </span>
        <span style={{ width: "15%" }} className="column">
        {date}
      </span>
        <span style={{ width: "15%" }} className="column">
        {quantity}und
      </span>
        <div style={{ width: "15%" }} className="actions-column">
          {priority === 1 ? (
              <Button variant={"primary"} children={"Devolver"} />
          ) : null}
        </div>
      </div>
  );
}

export default RowInventory;
