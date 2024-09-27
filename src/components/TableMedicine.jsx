import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import Modal from "./Modal";
import RowtableMedicine from "./RowTableMedicine";
import "../stylesheets/Medicines.css";
function TableMedicine() {
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");

  const openModal = (type) => {
    type === "add"
      ? setTypeModal("Insertar Medicina")
      : setTypeModal("Actualizar Medicina");
    setShowModal(true);
  };
  const enfermedades = [
    "enfermedad1",
    "enfermedad2",
    "enfermedad3",
    "enfermedad4",
  ];
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
          onClick={() => openModal("add")}
        />
        <InputField type="text" className={"form"} label={"Buscar"} />
      </div>
      <br />
      <Modal show={showModal} handleClose={() => setShowModal(false)}>
        <h2>{typeModal}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <InputField type="text" label={"Medicina"} className="form" />

          <label className="form-label">Enfermedad asociada:</label>
        </div>
        <div className="radio-group">
          {enfermedades.map((e, index) => (
            <label
              key={index}
              className="checkbox-label"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <input
                type="checkbox"
                value={e}
                //checked={filter.includes(condition)}
                //onChange={() => handleCheckboxChange(condition)}
              />
              <span
                className="checkbox-custom"
                style={{ marginLeft: "5px" }}
              ></span>
              {e}
            </label>
          ))}
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
          <RowtableMedicine
            name={row.nombre}
            illness={row.illness}
            updateClick={openModal}
          />
        ))}
      </div>
    </div>
  );
}

export default TableMedicine;
