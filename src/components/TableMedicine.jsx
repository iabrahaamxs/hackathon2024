import { useEffect, useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import Modal from "./Modal";
import RowtableMedicine from "./RowTableMedicine";
import "../stylesheets/Medicines.css";
import { useNavigate } from "react-router-dom";
import { LocalStorage } from "../utils/LocalStorage";
import { IllnessApi } from "../api/illness";
import { MedicineApi } from "../api/medicine";
function TableMedicine() {
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [nueva, setNueva] = useState("");
  const [selectedIllnesses, setSelectedIllnesses] = useState([]);

  const openModal = (type) => {
    type === "add"
      ? setTypeModal("Insertar Medicina")
      : setTypeModal("Actualizar Medicina");
    setShowModal(true);
  };
  const [enfermedades, setEnfermedades] = useState([]);
  const medicamentos = [
    {
      nombre: "Paracetamol",
      illness: ["diabetes", "hipertension"],
    },
    { nombre: "Ibuprofeno", illness: ["diabetes"] },
    { nombre: "Amoxicilina", illness: ["diabetes", "C", "D"] },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const jwt = LocalStorage.Get("token");
      if (!jwt) {
        navigate("/");
        return;
      }
      try {
        const enfer = await IllnessApi.getIllness(jwt); //llamando a las enfer
        console.log(enfer);

        setEnfermedades(enfer);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // Si está marcado, agregar al array
      setSelectedIllnesses((prev) => [...prev, value]);
    } else {
      // Si está desmarcado, eliminar del array
      setSelectedIllnesses((prev) =>
        prev.filter((illness) => illness !== value)
      );
    }
  };

  const handleGuardar = async () => {
    setShowModal(false);

    const jwt = LocalStorage.Get("token");
    if (!jwt) {
      return;
    }

    const res = await MedicineApi.createMedicine(jwt, nueva, selectedIllnesses);
    console.log(res);

    setNueva("");
    setSelectedIllnesses([]);
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
          onClick={() => setShowModal(true)}
        />
        <InputField type="text" className={"form"} label={"Buscar"} />
      </div>
      <br />
      <Modal show={showModal} handleClose={() => setShowModal(false)}>
        <h2>Insertar Medicina</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <InputField
            type="text"
            label={"Medicina"}
            className="form"
            value={nueva}
            onChange={(e) => setNueva(e.target.value)}
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
                value={e.id}
                onChange={handleCheckboxChange}
              />
              <span
                className="checkbox-custom"
                style={{ marginLeft: "5px" }}
              ></span>
              {e.name}
            </label>
          ))}
        </div>

        <div className={"center"}>
          <Button
            variant={"primary"}
            children={"Guardar"}
            onClick={handleGuardar}
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
