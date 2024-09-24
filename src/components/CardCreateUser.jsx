import Button from "./Button";
import { FaUser } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

function CardCreateUser({ txt, count }) {
  const iconMap = {
    pacientes: <FaUser />,
    donantes: <FaHandHoldingMedical />,
    administradores: <MdAdminPanelSettings />,
  };
  return (
    <div className="card-create shadow">
      <i
        className="shadow"
        style={{
          width: 100,
          height: 100,
          borderRadius: 1000,
          marginTop: -50,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 50,
        }}
      >
        {iconMap[txt]}
      </i>
      <h1 style={{ margin: "0px", fontWeight: 900}}>{count}</h1>
      <div style={{opacity:0.6}}>{txt}</div>
      <Button
        variant={"primary"}
        children={"Crear"}
        onClick={() => navigate("/nosotros")}
        style={{backgroundColor:"black"}}
      />
    </div>
  );
}

export default CardCreateUser;
