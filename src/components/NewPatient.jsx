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
import {useState} from "react";

function NewPatient({ backClick }) {
  const sectores = ['Barrio Lindo', 'Alambique', 'Santos Luzardo', 'Cardenales', 'Los Luises'];
  const [sector, setSector] = useState();
  const meds = ['Prednisona', 'Losartan', 'Insulina'];


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
              onlyLetters={true}
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
              onlyLetters={true}
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
              onlyNumbers={true}
              maxLength={8}
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
          <div style={{display: "flex", alignItems: "center"}}>
            <i style={{fontSize: 24, marginRight: 10}}>
              <FaLocationDot/>
            </i>
            <select name="select" className="select" value={sector}
                    onChange={(e) => setSector(e.target.value)}>
              <option value="0">Seleccionar sector</option>
              {sectores.map((sector, index) => (
                  <option key={index} value={sector}>
                    {sector}
                  </option>
              ))}
            </select>
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <i style={{fontSize: 24, marginRight: 10}}>
              <FaHouse/>
            </i>
            <InputField
                label={"Dirección"}
                id={"address"}
                type={"text"}
                className={"login form"}
                maxLength={100}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i style={{ fontSize: 24, marginRight: 10 }}>
              <BsGenderAmbiguous />
            </i>
            <select name="sex" className="select">
              <option value="0">Sexo</option>
              <option value="m">Masculino</option>
              <option value="f">Femenino</option>
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
              onlyNumbers={true}
              maxLength={11}
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
            borderRadius: "10px",
          }}
      >
        <div style={{display: "flex", justifyContent: "space-around",}}>
          <div>
            <input type="radio" id="diabetes" name="illness" value={"diabetes"} defaultChecked></input>
            <label style={{marginLeft: 10}}>Diabetes</label>
          </div>
          <div>
            <input type="radio" id="hipertension" name="illness" value={"hipertension"}></input>
            <label style={{marginLeft: 10}}>Hipertensión</label>
          </div>
          <div>
            <input type="radio" id="cancer" name="illness" value={"cancer"}></input>
            <label style={{marginLeft: 10}}>Cáncer</label>
          </div>
        </div>
        <div className={'center'}><p style={{padding: 0, margin: "15px 0 -10px 0"}}>Seleccione una. Luego podrá registrar más.</p></div>
        </div>

      <p>Tratamiento</p>
      <div
          style={{
            backgroundColor: "white",
            height: "100%",
            padding: 20,
            borderRadius: "10px"
          }}
      >
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <div style={{display: "flex", alignItems: "center"}}>
            <i style={{fontSize: 24, marginRight: 10}}>
              <GiMedicines/>
            </i>
            <select name="select" className="select " style={{marginRight: 10}}>
              <option value="0">Seleccionar medicamento</option>
              {meds.map((med, index) => (
                  <option key={index} value={med}>
                    {med}
                  </option>
              ))}
            </select>
            <InputField
                label={"cantidad"}
                id={"quantity"}
                type={"text"}
                className={"form"}
                onlyNumbers={true}
                maxLength={3}
            />
          </div>
        </div>
        <div className={'center'}><p style={{padding: 0, margin: "15px 0 -10px 0"}}>Ingrese un tratamiento. Luego podrá
          crear más.</p></div>
      </div>

      <br/>

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
