import Button from "./Button";

function RowInventory({ pri, gm, name, med, cant, date }) {
  const getPrioriClass = (pri) => {
    switch (pri) {
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
      <div className={`priority-indicator ${getPrioriClass(pri)}`}></div>
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
        {cant}und
      </span>
      <div style={{ width: "15%" }} className="actions-column">
        {pri === 1 ? (
          <Button variant={"primary"} children={"Devolver"} />
        ) : null}
      </div>
    </div>
  );
}

export default RowInventory;
