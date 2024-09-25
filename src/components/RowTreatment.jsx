import { FaPencil, FaTrash } from "react-icons/fa6";

function RowTreatment({ med, quantity, date, renovate }) {
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
              opacity: 0.7,
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
        >
          <i
              style={{
                color: "white",
                backgroundColor: "red",
                display: "flex",
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 999,
              }}
          >
            <FaTrash/>
          </i>
          <i
              style={{
                color: "white",
                backgroundColor: "green",
                display: "flex",
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 999,
              }}
          >
            <FaPencil/>
          </i>
        </div>
      </div>
  );
}

export default RowTreatment;