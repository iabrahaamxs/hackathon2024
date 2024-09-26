import { RiHealthBookFill } from "react-icons/ri";
import Button from "./Button";
import { GiMedicines } from "react-icons/gi";

function ItemHome({ onClick }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        height: "100%",
      }}
    >
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
          <GiMedicines />
        </i>
        <h1 style={{ margin: "0px", fontWeight: 900 }}>Medicinas</h1>
        {/* <div style={{ opacity: 0.6 }}>kajsdjkh</div> */}
        <Button
          variant={"primary"}
          children={"Crear"}
          onClick={() => onClick("medicina")}
          style={{ backgroundColor: "black" }}
        />
      </div>
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
          <RiHealthBookFill />
        </i>
        <h1 style={{ margin: "0px", fontWeight: 900 }}>Enfermedades</h1>
        <Button
          variant={"primary"}
          children={"Crear"}
          onClick={() => onClick("enfermedad")}
          style={{ backgroundColor: "black" }}
        />
      </div>
    </div>
  );
}

export default ItemHome;
