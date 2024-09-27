import Button from "./Button";
import EnfermedadComponent from "./EnfermedadComponent";

function Illness({ clickBack }) {
  const enfermedades = [
    "Alergia",
    "Asma",
    "Diabetes",
    "Hipertensión",
    "Cáncer",
    "Depresión",
  ];
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
        <EnfermedadComponent enfermedadesExistentes={enfermedades} />
        
      </div>
    </>
  );
}

export default Illness;
