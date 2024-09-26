import { useState } from "react";
import TableDeliver from "./TableDeliver";
import TableAssign from "./TableAssign";

function Deliver() {
  const [page, setPage] = useState("deliver");
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          padding: 10,
          display: "flex",
          borderRadius: "10px",
        }}
      >
        <h3>
          {page === "deliver" ? "Entregas pendientes" : "Asignar medicamentos"}
        </h3>
      </div>
      <br />
      {page === "deliver" ? (
        <TableDeliver onClick={setPage} />
      ) : (
        <TableAssign onClick={setPage} />
      )}
      <br />
    </>
  );
}

export default Deliver;
