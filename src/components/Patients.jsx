import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import RowPatient from "./RowPatient.jsx";
import History from "./History.jsx";

function Patients() {
  const [page, setPage] = useState("patients");

  const handleClick = (page) => {
    setPage(page);
  };

  const [filter, setFilter] = useState([]);
  const illnesses = ['diabetes', 'hipertension', 'asma'];
  const patients = [
    { id: '14234123', priority: 1, name: 'José Luis Rodríguez López', illness: ['diabetes', 'hipertension'] },
    { id: '14234124', priority: 2, name: 'María García', illness: ['asma'] },
    { id: '14234125', priority: 3, name: 'Carlos Pérez', illness: ['diabetes'] }
  ];

  const handleCheckboxChange = (condition) => {
    setFilter((prevFilter) =>
        prevFilter.includes(condition)
            ? prevFilter.filter((ill) => ill !== condition)
            : [...prevFilter, condition]
    );
  };

  const filteredPatients = patients.filter((patient) =>
      filter.length === 0 || patient.illness.some((ill) => filter.includes(ill))
  );

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
                  <InputField type="text" className={"form"} label={"Buscar"} onlyNumbers={true} maxLength={8} />
                </div>
                <br />
                <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {illnesses.map((condition, index) => (
                        <label key={index} className="checkbox-label"
                               style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                          <input
                              type="checkbox"
                              value={condition}
                              checked={filter.includes(condition)}
                              onChange={() => handleCheckboxChange(condition)}
                          />
                          <span className="checkbox-custom" style={{ marginLeft: '5px' }}></span>
                          {condition.charAt(0).toUpperCase() + condition.slice(1)}
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
                          handleClick={() => handleClick("history")}
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
