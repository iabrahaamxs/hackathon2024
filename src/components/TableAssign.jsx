import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import Modal from "./Modal";
import RowtableAssign from "./RowTableAssign";

function TableAssign({ onClick }) {
  const [showModal, setShowModal] = useState(false);
  const rows = [
    {
      priority: 1,
      id: "1234567",
      name: "Marcos Perez Gimenez",
      med: "Medicamento 2",
      quantity: 699,
      lote: 222,
      date1: "27/09/24",
      date2: "27/09/24",
      available: true,
    },
    {
      priority: 2,
      id: "7654321",
      name: "Lucia Fernandez Lopez",
      med: "Medicamento 5",
      quantity: 150,
      lote: 987,
      date1: "28/09/24",
      date2: "28/09/24",
      available: true,
    },
    {
      priority: 3,
      id: "4567890",
      name: "Carlos Garcia Moreno",
      med: "Medicamento 3",
      quantity: 300,
      lote: 654,
      date1: "29/09/24",
      date2: "29/09/24",
      available: false,
    },
    {
      priority: 1,
      id: "7890123",
      name: "Ana Sanchez Diaz",
      med: "Medicamento 1",
      quantity: 500,
      lote: 321,
      date1: "30/09/24",
      date2: "30/09/24",
      available: true,
    },
    {
      priority: 2,
      id: "2345678",
      name: "Javier Martinez Perez",
      med: "Medicamento 4",
      quantity: 250,
      lote: 111,
      date1: "01/10/24",
      date2: "01/10/24",
      available: false,
    },
    {
      priority: 3,
      id: "3456789",
      name: "Isabel Rodriguez Torres",
      med: "Medicamento 6",
      quantity: 750,
      lote: 333,
      date1: "02/10/24",
      date2: "02/10/24",
      available: true,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        justifyContent: "center",
        gap: 20,
        height: "100%",
        padding: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          variant={"primary"}
          children={"Entregas Pendientes"}
          onClick={() => onClick("deliver")}
        />
        <InputField type="text" className={"form"} label={"Buscar"} onlyNumbers={true} maxLength={8} />
      </div>
      <br />
      <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <Modal show={showModal} handleClose={() => setShowModal(false)}>
          <h2>Asignar Medicamento</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            
            <label>Cedula:</label>
            <label>Nombre:</label>
            <label>Medicamento:</label>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <label>Fecha de retiro: </label>
              <InputField type="date" className="form" />
            </div>
          </div>

          <div className={"center"}>
            <Button
              variant={"prioritymary"}
              children={"Guardar"}
              onClick={() => setShowModal(false)}
            />
          </div>
        </Modal>
        <div className="row-table" style={{ fontSize: 12, marginBottom: -25 }}>
          <div className={`priorityority-indicator`} style={{ width: "64%" }}></div>
          <span className="column date-column-assign">Última Entrega</span>
          <span className="column date-column-assign">Renovación</span>
        </div>
        {rows.map((row) => (
          <RowtableAssign
            key={row.id}
            priority={row.priority}
            id={row.id}
            name={row.name}
            med={row.med}
            quantity={row.quantity}
            date1={row.date1}
            date2={row.date2}
            available={row.available}
            setModal={setShowModal}
          />
        ))}
      </div>
    </div>
  );
}

export default TableAssign;
