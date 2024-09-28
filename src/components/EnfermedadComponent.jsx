import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import { FaTrash } from "react-icons/fa6";

const EnfermedadComponent = ({
  enfermedadesExistentes,
  agregarEnfermedad,
  eliminarEnfermedad,
}) => {
  const [nuevaEnfermedad, setNuevaEnfermedad] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevaEnfermedad.trim().length < 3) {
      setError("La enfermedad debe tener al menos 3 caracteres.");
      return;
    }
    agregarEnfermedad(nuevaEnfermedad);
    setNuevaEnfermedad(""); // Limpiar el input después de agregar
    setError(""); // Limpiar el mensaje de error
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
        <InputField
          label={"Ingresar enfermedad"}
          className="form"
          value={nuevaEnfermedad}
          onChange={(e) => setNuevaEnfermedad(e.target.value)}
        />
        {error && (
          <div
            style={{
              color: "red",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            {error}
          </div>
        )}
        <Button children={"Agregar"} variant={"primary"} />
      </form>

      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Enfermedades en sistema:
        </h3>
        <ul
          style={{ listStyleType: "none", paddingLeft: "0", fontSize: "16px" }}
        >
          {enfermedadesExistentes.map((enfermedad) => (
            <div key={enfermedad.id} style={{ display: "flex" }}>
              <li
                style={{
                  padding: "8px",
                  backgroundColor: "#f9f9f9",
                  marginBottom: "8px",
                  borderRadius: "5px",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                {enfermedad.name}
              </li>
              <button
                className="action-btn delete-btn"
                aria-label="Delete"
                onClick={() => eliminarEnfermedad(enfermedad.id)}
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EnfermedadComponent;
