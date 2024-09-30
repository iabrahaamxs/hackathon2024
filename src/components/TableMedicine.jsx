import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import Modal from "./Modal";
import RowtableMedicine from "./RowTableMedicine";
import "../stylesheets/Medicines.css";

function TableMedicine() {
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState({ id: null, nombre: "", illness: [] });
  const [medicamentos, setMedicamentos] = useState([
    { id: 1, nombre: "Paracetamol", illness: ["diabetes", "hipertension"] },
    { id: 2, nombre: "Ibuprofeno", illness: ["diabetes"] },
    { id: 3, nombre: "Amoxicilina", illness: ["diabetes", "C", "D"] },
  ]);

  const openModal = (type, medicine = { id: null, nombre: "", illness: [] }) => {
    setTypeModal(type === "add" ? "Insertar Medicina" : "Actualizar Medicina");
    setSelectedMedicine(medicine);
    setShowModal(true);
  };

  const enfermedades = [
    "enfermedad1",
    "enfermedad2",
    "enfermedad3",
    "enfermedad4",
  ];

  const handleCheckboxChange = (illness) => {
    setSelectedMedicine((prev) => {
      const newIllness = prev.illness.includes(illness)
          ? prev.illness.filter((i) => i !== illness)
          : [...prev.illness, illness];
      return { ...prev, illness: newIllness };
    });
  };

  const handleSave = () => {
    if (typeModal === "Insertar Medicina") {
      setMedicamentos((prev) => [...prev, selectedMedicine]);
      console.log("Medicina agregada:", selectedMedicine);
    } else {
      setMedicamentos((prev) =>
          prev.map((med) =>
              med.id === selectedMedicine.id ? selectedMedicine : med
          )
      );
      console.log("Medicina actualizada:", selectedMedicine);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    console.log("Eliminando medicina con id:", id);
    setMedicamentos((prev) => prev.filter((med) => med.id !== id));
  };

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
            <InputField
                type="text"
                label={"Medicina"}
                className="form"
                value={selectedMedicine.nombre}
                onChange={(e) =>
                    setSelectedMedicine({ ...selectedMedicine, nombre: e.target.value })
                }
            />

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
                      checked={selectedMedicine.illness.includes(e)}
                      onChange={() => handleCheckboxChange(e)}
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
                onClick={handleSave}
            />
          </div>
        </Modal>
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          {medicamentos.map((row) => (
              <RowtableMedicine
                  key={row.id}
                  name={row.nombre}
                  illness={row.illness}
                  updateClick={() => openModal("update", row)}
                  deleteClick={() => handleDelete(row.id)}
              />
          ))}
        </div>
      </div>
  );
}

export default TableMedicine;
