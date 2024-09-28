import React, { useEffect, useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import RowPatient from "./RowPatient.jsx";
import History from "./History.jsx";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { LocalStorage } from "../utils/LocalStorage.js";
import { IllnessApi } from "../api/illness.js";

function Patients() {
  const [page, setPage] = useState("patients");
  const [filter, setFilter] = useState([]);
  const [illnesses, setIllnesses] = useState([
    "diabetes",
    "hipertension",
    "asma",
  ]);
  const [patients, setPatients] = useState([
    {
      id: "14234123",
      priority: 1,
      name: "José Luis Rodríguez López",
      illness: ["diabetes", "Hipertensión"],
    },
    { id: "14234124", priority: 2, name: "María García", illness: ["asma"] },
    {
      id: "14234125",
      priority: 3,
      name: "Carlos Pérez",
      illness: ["diabetes"],
    },
  ]);

  const handleClick = (page) => {
    setPage(page);
  };

  const handleClickHistory = (page, id) => {
    setPage(page);
    console.log(id);
    // TODO: Lógica para buscar la historia
  };

  const handleCheckboxChange = (condition) => {
    setFilter((prevFilter) =>
      prevFilter.includes(condition)
        ? prevFilter.filter((ill) => ill !== condition)
        : [...prevFilter, condition]
    );
  };

  const handleDeletePatient = (id) => {
    const patient = patients.find((p) => p.id === id);
    Swal.fire({
      title: `¿Estás seguro de que deseas eliminar a ${patient.name}?`,
      text: "No podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, bórralo",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setPatients((prevPatients) =>
          prevPatients.filter((patient) => patient.id !== id)
        );
        console.log(`Paciente eliminado: ${patient.name}`);
        Swal.fire(
          "¡Eliminado!",
          `Paciente ${patient.name} eliminado con éxito.`,
          "success"
        );
      }
    });
  };

  const filteredPatients = patients.filter(
    (patient) =>
      filter.length === 0 || patient.illness.some((ill) => filter.includes(ill))
  );

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
        setIllnesses(enfer);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {page === "patients" ? (
        <>
          <div
            style={{
              backgroundColor: "white",
              padding: 10,
              display: "flex",
              borderRadius: "10px",
            }}
          >
            <h3>Pacientes</h3>
          </div>
          <br />
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
                justifyContent: "right",
                alignItems: "right",
              }}
            >
              <InputField
                type="text"
                className={"form"}
                label={"Buscar"}
                onlyNumbers={true}
                maxLength={8}
              />
            </div>
            <br />
            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {illnesses.map((i, index) => (
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
                      value={i.name}
                      checked={filter.includes(i.name)}
                      onChange={() => handleCheckboxChange(i.name)}
                    />
                    <span
                      className="checkbox-custom"
                      style={{ marginLeft: "5px" }}
                    ></span>
                    {i.name}
                  </label>
                ))}
              </div>
              {filteredPatients.map((patient) => (
                <RowPatient
                  key={patient.id}
                  id={patient.id}
                  name={patient.name}
                  priority={patient.priority}
                  illness={patient.illness}
                  handleClick={() => handleClickHistory("history", patient.id)}
                  onDelete={handleDeletePatient}
                />
              ))}
            </div>
          </div>
          <br />
        </>
      ) : null}
      {page === "history" ? <History backClick={handleClick} /> : null}
    </>
  );
}

export default Patients;
