import { FaUser, FaUsers } from "react-icons/fa6";
import Button from "./Button";
import InputField from "./InputField";
import { FaAddressCard, FaLock } from "react-icons/fa";

function NewDonor({ backClick }) {
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
        <h2>Crear nuevo donante</h2>
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
        <div style={{display: "flex", flexDirection: "column", gap: 30}}>
          <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "center",
              }}
          >
            <i style={{fontSize: 24, marginRight: 10}}>
              <FaUser/>
            </i>
            <InputField
                label={"Nombre"}
                id={"name"}
                type={"text"}
                className={"login form"}
                onlyLetters={true}
                maxLength={50}
            />
          </div>
          <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "center",
              }}
          >
            <i style={{fontSize: 24, marginRight: 10}}>
              <FaUsers/>
            </i>
            <select className="select ">
              <option value="value0">Tipo de organización</option>
              <option value="value1">Value 1</option>
              <option value="value2">Value 2</option>
              <option value="value3">Value 3</option>
            </select>
          </div>
          <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "center",
              }}
          >
            <i style={{fontSize: 24, marginRight: 10}}>
              <FaAddressCard/>
            </i>
            <InputField
                label={"Identificación"}
                id={"rif"}
                type={"text"}
                className={"login form"}
                onlyAlphanumeric={true}
                maxLength={11}
            />
          </div>
          <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "center",
              }}
          >
            <i style={{fontSize: 24, marginRight: 10}}>
              <FaLock/>
            </i>
            <InputField
                label={"Contraseña"}
                id={"passsword"}
                type={"password"}
                className={"login form"}
                maxLength={16}
            />
          </div>
          <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "center",
              }}
          >
            <i style={{fontSize: 24, marginRight: 10}}>
              <FaLock/>
            </i>
            <InputField
                label={"Confirmar contraseña"}
                id={"passsword"}
                type={"password"}
                className={"login form"}
                maxLength={16}
            />
          </div>
        </div>
      </div>

      <br/>

      <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
      >
        <Button children="Cancelar" onClick={() => backClick("create")}/>
        <Button children="Guardar" variant={"primary"}/>
      </div>
    </div>
  );
}

export default NewDonor;
