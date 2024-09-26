import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import Modal from "./Modal";
import RowtableMedicine from "./RowTableMedicine";
function TableMedicine() {
  const [showModal, setShowModal] = useState(false);
  const medicamentos = [
    {
      nombre: "Paracetamol",
      illness: ["diabetes", "hipertension"],
    },
    { nombre: "Ibuprofeno", illness: ["diabetes"] },
    { nombre: "Amoxicilina", illness: ["diabetes", "C", "D"] },
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
          children={"Insertar medicina"}
          onClick={() => setShowModal(true)}
        />
        <InputField type="text" className={"form"} label={"Buscar"} />
      </div>
      <br />
      <Modal show={showModal} handleClose={() => setShowModal(false)}>
        <h2>Insertar Medicina</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <InputField type="text" label={"Medicina"} className="form" />
        </div>

        <div className={"center"}>
          <Button
            variant={"primary"}
            children={"Guardar"}
            onClick={() => setShowModal(false)}
          />
        </div>
      </Modal>
      <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        {medicamentos.map((row) => (
          <RowtableMedicine name={row.nombre} illness={row.illness} />
        ))}
      </div>
    </div>
  );
}

export default TableMedicine;
