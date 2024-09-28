import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Button from "./Button";
import EnfermedadComponent from "./EnfermedadComponent";
import { IllnessApi } from "../api/illness";
import { useNavigate } from "react-router-dom";
import { LocalStorage } from "../utils/LocalStorage";

function Illness({ clickBack }) {
  const navigate = useNavigate();
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

  const insertIllnes = async (e) => {
    const jwt = LocalStorage.Get("token");
    if (!jwt) {
      navigate("/");
      return;
    }

    const res = await IllnessApi.postIllness(jwt, e);
    console.log("enfermedad subida a la api", res);
  };

  const agregarEnfermedad = (nuevaEnfermedad) => {
    Swal.fire({
      title: "Confirmar Inserción",
      text: `¿Estás seguro de que deseas agregar la enfermedad ${nuevaEnfermedad}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, agregar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevaId = enfermedades.length + 1;
        const nueva = { id: nuevaId, nombre: nuevaEnfermedad };
        setEnfermedades([...enfermedades, nueva]);
        console.log(`Enfermedad agregada: ${nuevaId} - ${nuevaEnfermedad}`);
        //TODO Lógica para insertar la enfermedad

        insertIllnes(nuevaEnfermedad);
        Swal.fire({
          title: "¡Agregado!",
          text: `Enfermedad agregada: ${nuevaId} - ${nuevaEnfermedad}`,
          icon: "success",
          timer: 3000,
          showConfirmButton: false,
        });
      }
    });
  };

  const eliminarEnfermedad = (id) => {
    const enfermedad = enfermedades.find((e) => e.id === id);
    Swal.fire({
      title: `¿Estás seguro de que deseas eliminar ${enfermedad.nombre}?`,
      text: "No podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, bórralo",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setEliminaciones((prevEliminaciones) => [
          ...prevEliminaciones,
          enfermedad,
        ]);
        setEnfermedades(enfermedades.filter((e) => e.id !== id));
        console.log(
          `Enfermedad eliminada: ${enfermedad.id} - ${enfermedad.nombre}`
        );
        //TODO Lógica para eliminar la enfermedad
        Swal.fire(
          "¡Eliminado!",
          `Enfermedad eliminada: ${enfermedad.id} - ${enfermedad.nombre}`,
          "success"
        );
      }
    });
  };

  const revertirEliminacion = (id) => {
    const enfermedad = eliminaciones.find((e) => e.id === id);
    if (enfermedad) {
      setEnfermedades((prevEnfermedades) => [...prevEnfermedades, enfermedad]);
      setEliminaciones((prevEliminaciones) =>
        prevEliminaciones.filter((e) => e.id !== id)
      );
      console.log(
        `Eliminación revertida: ${enfermedad.id} - ${enfermedad.nombre}`
      );
      Swal.fire({
        title: "¡Revertido!",
        text: `Eliminación revertida: ${enfermedad.id} - ${enfermedad.nombre}`,
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const jwt = LocalStorage.Get("token");
      if (!jwt) {
        navigate("/");
        return;
      }
      try {
        const res = await IllnessApi.getIllness(jwt); //llamando a las enfer
        setEnfermedades(res);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  });

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
