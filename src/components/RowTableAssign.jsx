import { FaPencil, FaTrash } from "react-icons/fa6";
import "../stylesheets/Rowtable.css"; // Asegúrate de tener un archivo CSS para este componente
import Button from "./Button";

function RowtableAssign({
  pri,
  id,
  name,
  med,
  cant,
  lote,
  date1,
  date2,
  dispo,
}) {
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
    <div className="row-table shadow">
      <div className={`priority-indicator ${getPrioriClass(pri)}`}></div>
      <span className="column id-column">{id}</span>
      <span className="column name-column">{name}</span>
      <span className="column med-column">{med}</span>
      <span className="column cant-column-assign">{cant}und</span>
      <span className="column date-column-assign">{date1}</span>
      <span className="column date-column-assign">{date2}</span>
      <div className="actions-column">
        <Button
          variant={dispo ? "primary" : "secondary"}
          children={"Asignar"}
        />
      </div>
    </div>
  );
}

export default RowtableAssign;
