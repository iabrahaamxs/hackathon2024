import { FaPencil, FaTrash } from "react-icons/fa6";

function Rowtable({ pri, id, name, med, cant, lote, date }) {
  const getPriori = (pri) => {
    if (pri === 1) {
      return "red";
    } else if (pri === 2) {
      return "yellow";
    } else if (pri === 3) {
      return "green";
    } else return "";
  };
  return (
    <div
      className="shadow"
      style={{
        width: "100%",
        height: 50,
        display: "flex",
        alignItems: "center",
        fontSize: 16,
      }}
    >
      <div
        style={{
          backgroundColor: getPriori(pri),
          width: 10,
          height: 10,
          borderRadius: 9999,
          margin: 10,
        }}
      ></div>
      <span style={{ width: "10%", opacity: 0.7 }}>{id}</span>
      <span style={{ width: "30%", opacity: 0.7 }}>{name}</span>
      <span style={{ width: "14%", opacity: 0.7 }}>{med}</span>
      <span style={{ width: "10%", opacity: 0.7, backgroundColor: "black" }}>
        {cant}
      </span>
      <span style={{ width: "10%", opacity: 0.7 }}>#{lote}</span>
      <span style={{ width: "15%", opacity: 0.7 }}>{date}</span>
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
          <FaTrash />
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
          <FaPencil />
        </i>
      </div>
    </div>
  );
}

export default Rowtable;
