import Button from "./Button";
import { FaAddressCard, FaHouse, FaPhone, FaUser } from "react-icons/fa6";
import InputField from "./InputField";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

function NewAdmin({ backClick }) {
  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          padding: 10,
          display: "flex",
          borderRadius: "10px",
        }}
      >
        <h2>Crear nuevo administrador</h2>
      </div>
      <br />
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          borderRadius: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i style={{ fontSize: 24, marginRight: 10 }}>
              <FaUser />
            </i>
            <InputField
              label={"Nombre"}
              id={"name"}
              type={"text"}
              className={"login form"}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i style={{ fontSize: 24, marginRight: 10 }}>
              <FaUser />
            </i>
            <InputField
              label={"Apellido"}
              id={"last-name"}
              type={"text"}
              className={"login form"}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i style={{ fontSize: 24, marginRight: 10 }}>
              <FaAddressCard />
            </i>
            <InputField
              label={"Identificación"}
              id={"documento"}
              type={"text"}
              className={"login form"}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i style={{ fontSize: 24, marginRight: 10 }}>
              <FaPhone />
            </i>
            <InputField
              label={"Teléfono"}
              id={"phone"}
              type={"text"}
              className={"login form"}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i style={{ fontSize: 24, marginRight: 10 }}>
              <MdEmail />
            </i>
            <InputField
              label={"Correo"}
              id={"email"}
              type={"email"}
              className={"login form"}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i style={{ fontSize: 24, marginRight: 10 }}>
              <FaLock />
            </i>
            <InputField
              label={"Contraseña"}
              id={"password"}
              type={"text"}
              className={"login form"}
            />
          </div>
        </div>
      </div>

      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button children="Cancelar" onClick={() => backClick("create")} />
        <Button children="Guardar" variant={"primary"} />
      </div>
    </div>
  );
}

export default NewAdmin;
