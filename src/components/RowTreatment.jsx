import { FaPencil, FaTrash } from "react-icons/fa6";

function RowTreatment({ med, quantity, date, onDelete, treatmentId }) {
  return (
      <div
          className="shadow"
          style={{
            width: "80%",
            margin: "auto",
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            fontSize: 16,
          }}
      >
        <span style={{width: "14%", opacity: 0.7}}>{med}</span>
        <span style={{width: "10%", opacity: 0.7}}>{quantity} uds.</span>
        <span style={{width: "15%", opacity: 0.7}}>{date}</span>
        <div
            style={{
              width: "10%",
              display: "flex",
              justifyContent: "end"
            }}
        >
          <button className="action-btn delete-btn" aria-label="Delete" onClick={() => onDelete(treatmentId)}>
            <FaTrash/>
          </button>
        </div>
      </div>
  );
}

export default RowTreatment;