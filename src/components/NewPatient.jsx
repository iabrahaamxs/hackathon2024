import {
  FaAddressCard,
  FaHouse,
  FaLocationDot,
  FaPhone,
  FaUser,
} from "react-icons/fa6";
import InputField from "./InputField";
import Button from "./Button";
import { BsFillCalendarDateFill, BsGenderAmbiguous } from "react-icons/bs";
import { GiMedicines } from "react-icons/gi";

function NewPatient({ backClick }) {
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
        <h2>Crear nuevo paciente</h2>
      </div>
      <p>Usuario</p>
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
              <BsFillCalendarDateFill />
            </i>
            <InputField
              label={"Fecha de nacimiento"}
              id={"birthdate"}
              type={"date"}
              className={"login form"}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i style={{ fontSize: 24, marginRight: 10 }}>
              <FaLocationDot />
            </i>
            <select name="select" className="select ">
              <option value="value0">
                Seleccionar sector
              </option>
              <option value="value1">Value 1</option>
              <option value="value2">Value 2</option>
              <option value="value3">Value 3</option>
            </select>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i style={{ fontSize: 24, marginRight: 10 }}>
              <FaHouse />
            </i>
            <InputField
              label={"Dirección"}
              id={"address"}
              type={"text"}
              className={"login form"}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i style={{ fontSize: 24, marginRight: 10 }}>
              <BsGenderAmbiguous />
            </i>
            <select name="gender" className="select">
              <option value="gender0">Seleccionar género</option>
              <option value="gender1">Masculino</option>
              <option value="gender2">Femenino</option>
            </select>
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
      </div>

      <p>Enfermedad</p>
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          padding: 20,
          display: "flex",
          borderRadius: "10px",

          justifyContent: "space-around",
        }}
      >
        <div>
          <input type="radio" id="diabetes" name="diabetes"></input>
          <label style={{ marginLeft: 10 }}>Diabetes</label>
        </div>
        <div>
          <input type="radio" id="hipertension" name="Hipertensión"></input>
          <label style={{ marginLeft: 10 }}>Hipertensión</label>
        </div>
        <div>
          <input type="radio" id="cancer" name="cancer"></input>
          <label style={{ marginLeft: 10 }}>Cáncer</label>
        </div>
      </div>

      <p>Tratamiento</p>
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          padding: 20,
          display: "flex",
          borderRadius: "10px",

          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <i style={{ fontSize: 24, marginRight: 10 }}>
            <GiMedicines />
          </i>
          <select name="select" className="select " style={{ marginRight: 10 }}>
            <option value="med0">Seleccionar tratamiento</option>
            <option value="med1">medi 1</option>
            <option value="med2">medi 2</option>
            <option value="med3">medi 3</option>
          </select>
          <InputField
            label={"gramos"}
            id={"grame"}
            type={"text"}
            className={"form"}
          />
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

export default NewPatient;
