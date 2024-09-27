import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

const EnfermedadComponent = ({ enfermedadesExistentes, agregarEnfermedad }) => {
  const [nuevaEnfermedad, setNuevaEnfermedad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevaEnfermedad.trim()) {
      agregarEnfermedad(nuevaEnfermedad);
      setNuevaEnfermedad(""); // Limpiar el input después de agregar
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Crear enfermedad
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        {/* <input
          type="text"
          id="nuevaEnfermedad"
          value={nuevaEnfermedad}
          onChange={(e) => setNuevaEnfermedad(e.target.value)}
          placeholder="Ingresar enfermedad"
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        /> */}
        <InputField label={"Ingresar enfermedad"} className="form" />

        {/* <button
          type="submit"
          style={{
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Agregar
        </button> */}

        <Button children={"Agregar"} variant={"primary"}/>
      </form>

      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Enfermedades en sistema:
        </h3>
        <ul
          style={{ listStyleType: "none", paddingLeft: "0", fontSize: "16px" }}
        >
          {enfermedadesExistentes.map((enfermedad, index) => (
            <li
              key={index}
              style={{
                padding: "8px",
                backgroundColor: "#f9f9f9",
                marginBottom: "8px",
                borderRadius: "5px",
              }}
            >
              {enfermedad}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EnfermedadComponent;
