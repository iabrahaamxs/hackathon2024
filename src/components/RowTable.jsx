import { FaPencil, FaTrash } from "react-icons/fa6";
import "../stylesheets/Rowtable.css"; // Asegúrate de tener un archivo CSS para este componente

function Rowtable({ pri, id, name, med, cant, lote, date }) {
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
      <span className="column cant-column">{cant}</span>
      <span className="column lote-column">#{lote}</span>
      <span className="column date-column">{date}</span>
      <div className="actions-column">
        <button className="action-btn delete-btn" aria-label="Delete">
          <FaTrash />
        </button>
        <button className="action-btn edit-btn" aria-label="Edit">
          <FaPencil />
        </button>
      </div>
    </div>
  );
}

export default Rowtable;
