import { useState } from "react";
import Button from "./Button";
import EnfermedadComponent from "./EnfermedadComponent";

function Illness({ clickBack }) {
  const [enfermedades, setEnfermedades] = useState([
    { id: 1, nombre: "Alergia" },
    { id: 2, nombre: "Asma" },
    { id: 3, nombre: "Diabetes" },
    { id: 4, nombre: "Hipertensión" },
    { id: 5, nombre: "Cáncer" },
    { id: 6, nombre: "Depresión" },
  ]);
  const [mensaje, setMensaje] = useState("");
  const [eliminaciones, setEliminaciones] = useState([]);

  const agregarEnfermedad = (nuevaEnfermedad) => {
    const nuevaId = enfermedades.length + 1;
    const nueva = { id: nuevaId, nombre: nuevaEnfermedad };
    setEnfermedades([...enfermedades, nueva]);
    console.log(`Enfermedad agregada: ${nuevaId} - ${nuevaEnfermedad}`);
    //TODO Lógica para insertar la enfermedad
    setMensaje(`Enfermedad agregada: ${nuevaId} - ${nuevaEnfermedad}`);
    setTimeout(() => setMensaje(""), 3000); // Limpiar mensaje después de 3 segundos
  };

  const eliminarEnfermedad = (id) => {
    const enfermedad = enfermedades.find((e) => e.id === id);
    setEliminaciones((prevEliminaciones) => [...prevEliminaciones, enfermedad]);
    setEnfermedades(enfermedades.filter((e) => e.id !== id));
    console.log(`Enfermedad eliminada: ${enfermedad.id} - ${enfermedad.nombre}`);
    //TODO Lógica para eliminar la enfermedad
    setMensaje(
        <>
          Enfermedad eliminada: {enfermedad.id} - {enfermedad.nombre}
          {/* <button
              onClick={() => revertirEliminacion(enfermedad.id)}
              style={{
                marginLeft: "10px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                padding: "5px 10px",
              }}
          >
            Revertir
          </button> */}
        </>
    );
  };

  const revertirEliminacion = (id) => {
    //TODO QUE EL MALDITO MMGVO BOTÓN DE REVERTIR FUNCIONE (Abraham, si ves este mensaje elimina las groserías)
    const enfermedad = eliminaciones.find((e) => e.id === id);
    if (enfermedad) {
      setEnfermedades((prevEnfermedades) => [...prevEnfermedades, enfermedad]);
      setEliminaciones((prevEliminaciones) =>
          prevEliminaciones.filter((e) => e.id !== id)
      );
      console.log(`Eliminación revertida: ${enfermedad.id} - ${enfermedad.nombre}`);
      setMensaje(`Eliminación revertida: ${enfermedad.id} - ${enfermedad.nombre}`);
      setTimeout(() => setMensaje(""), 3000); // Limpiar mensaje después de 3 segundos
    }
  };

  return (
      <>
        <div
            style={{
              backgroundColor: "white",
              padding: 10,
              display: "flex",
              borderRadius: "10px",
              justifyContent: "space-between",
            }}
        >
          <h3>Enfermedades</h3>
          <Button
              children={"Volver"}
              variant={"primary"}
              onClick={() => clickBack("ItemHome")}
          />
        </div>
        <br />
        {mensaje && (
            <div
                style={{
                  backgroundColor: "#d4edda",
                  color: "#155724",
                  padding: "10px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
            >
              {mensaje}
            </div>
        )}
        <div
            style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: "10px",
            }}
        >
          <EnfermedadComponent
              enfermedadesExistentes={enfermedades}
              agregarEnfermedad={agregarEnfermedad}
              eliminarEnfermedad={eliminarEnfermedad}
          />
        </div>
      </>
  );
}

export default Illness;

