import { FaPencil, FaTrash } from "react-icons/fa6";
import "../stylesheets/Rowtable.css";

function RowtableMedicine({ id, name, illness, updateClick, deleteClick }) {
  const getTagColor = (illness) => {
    switch (illness.toLowerCase()) {
      case "diabetes":
        return "#ff9999"; // Color para diabetes
      case "hipertension":
        return "#99ccff"; // Color para hipertensión
      default:
        return "#e0e0e0"; // Color por defecto
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="row-table shadow"
        style={{ justifyContent: "space-around", width: "70%" }}
      >
        <span className="column name-column">{name}</span>
        <div style={{ display: "flex", width: "50%" }}>
          {/* mapear aqui */}

          {illness.map((ill, index) => (
            <div key={index} style={{ opacity: 0.7, display: "flex" }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "5px 10px",
                  margin: "5px",
                  borderRadius: "5px",
                  fontSize: "14px",
                  backgroundColor: getTagColor(ill),
                }}
              >
                {ill}
              </div>
            </div>
          ))}
        </div>
        <div className="actions-column-table">
          <button className="action-btn delete-btn" aria-label="Delete"
                  onClick={deleteClick}>
            <FaTrash />
          </button>
          <button
            className="action-btn edit-btn"
            aria-label="Edit"
            onClick={updateClick}
          >
            <FaPencil />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RowtableMedicine;
