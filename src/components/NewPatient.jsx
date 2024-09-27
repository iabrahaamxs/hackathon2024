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
import Swal from "sweetalert2";

function NewPatient({ backClick }) {
  const [error, setError] = useState("");

  const sectores = ['Barrio Lindo', 'Alambique', 'Santos Luzardo', 'Cardenales', 'Los Luises'];
  const [sector, setSector] = useState();
  const meds = ['Prednisona', 'Losartan', 'Insulina'];

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [documento, setDocumento] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");
  const [illness, setIllness] = useState("diabetes");
  const [med, setMed] = useState("");
  const [quantity, setQuantity] = useState("");
  const [priority, setPriority] = useState("")

  const handleSave = () => {
    if (!name || !lastName || !documento || !phone || !priority) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    if (name.length < 3) {
      setError("El nombre debe tener al menos 3 caracteres.");
      return;
    }
    if (lastName.length < 3) {
      setError("El apellido debe tener al menos 3 caracteres.");
      return;
    }
    if (documento.length < 6) {
      setError("La identificación debe tener al menos 6 caracteres.");
      return;
    }
    if (phone.length !== 11) {
      setError("El teléfono debe tener 11 dígitos.");
      return;
    }

    const newAdmin = {
      name,
      lastName,
      documento,
      phone,
      priority,
    };

    Swal.fire({
      title: 'Confirmar Información',
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Apellido:</strong> ${lastName}</p>
        <p><strong>Documento:</strong> ${documento}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Prioridad:</strong> ${priority}</p>
      `,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        console.log("Nuevo administrador creado:", newAdmin);
        // TODO: Lógica para guardar el nuevo administrador
        setError("");
        Swal.fire(
            '¡Administrador Creado!',
            'El nuevo administrador ha sido creado exitosamente.',
            'success'
        ).then(() => {
          // Limpiar los campos después de mostrar el mensaje de éxito
          setName("");
          setLastName("");
          setDocument("");
          setPhone("");
          setConfirmPassword("");
          setPriority("");
        });
      }
    });
  };



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
        <div style={{display: "flex", justifyContent: "center", gap: 30}}>
        <div style={{display: "flex", alignItems: "center"}}>
          <select name="select" className="select" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="0">Seleccionar prioridad</option>
            <option value="1">Alta</option>
            <option value="2">Media</option>
            <option value="3">Baja</option>
          </select>
        </div></div>
        <div style={{display: "flex", justifyContent: "center", gap: 30}}>
          <div style={{display: "flex", alignItems: "center"}}>
            <i style={{fontSize: 24, marginRight: 10}}>
              <FaUser/>
            </i>
            <InputField
                label={"Nombres"}
                id={"name"}
                type={"text"}
                className={"login form"}
                onlyLetters={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <i style={{fontSize: 24, marginRight: 10}}>
              <FaUser/>
            </i>
            <InputField
                label={"Apellidos"}
                id={"last-name"}
                type={"text"}
                className={"login form"}
                onlyLetters={true}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "center", gap: 30}}>
          <div style={{display: "flex", alignItems: "center"}}>
            <i style={{fontSize: 24, marginRight: 10}}>
              <FaAddressCard/>
            </i>
            <InputField
                label={"Identificación"}
                id={"documento"}
                type={"text"}
                className={"login form"}
                onlyNumbers={true}
                maxLength={8}
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
            />
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <i style={{fontSize: 24, marginRight: 10}}>
              <BsFillCalendarDateFill/>
            </i>
            <InputField
                label={"Fecha de nacimiento"}
                id={"birthdate"}
                type={"date"}
                className={"login form"}
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "center", gap: 30}}>
          <div style={{display: "flex", alignItems: "center"}}>
            <i style={{fontSize: 24, marginRight: 10}}>
              <FaLocationDot/>
            </i>
            <select name="select" className="select" value={sector} onChange={(e) => setSector(e.target.value)}>
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
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "center", gap: 30}}>
          <div style={{display: "flex", alignItems: "center"}}>
            <i style={{fontSize: 24, marginRight: 10}}>
              <BsGenderAmbiguous/>
            </i>
            <select name="sex" className="select" value={sex} onChange={(e) => setSex(e.target.value)}>
              <option value="0">Sexo</option>
              <option value="m">Masculino</option>
              <option value="f">Femenino</option>
            </select>
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <i style={{fontSize: 24, marginRight: 10}}>
              <FaPhone/>
            </i>
            <InputField
                label={"Teléfono"}
                id={"phone"}
                type={"text"}
                className={"login form"}
                onlyNumbers={true}
                maxLength={11}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
            <input
                type="radio"
                id="diabetes"
                name="illness"
                value="diabetes"
                checked={illness === "diabetes"}
                onChange={(e) => setIllness(e.target.value)}
            />            <label style={{marginLeft: 10}}>Diabetes</label>
          </div>
          <div>
            <input
                type="radio"
                id="hipertension"
                name="illness"
                value="hipertension"
                checked={illness === "hipertension"}
                onChange={(e) => setIllness(e.target.value)}
            /> <label style={{marginLeft: 10}}>Hipertensión</label>
          </div>
          <div>
            <input
                type="radio"
                id="cancer"
                name="illness"
                value="cancer"
                checked={illness === "cancer"}
                onChange={(e) => setIllness(e.target.value)}
            /> <label style={{marginLeft: 10}}>Cáncer</label>
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
            <select name="select" className="select" value={med} onChange={(e) => setMed(e.target.value)}>
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
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>
        <div className={'center'}><p style={{padding: 0, margin: "15px 0 -10px 0"}}>Ingrese un tratamiento. Luego podrá
          crear más.</p></div>
      </div>

      <br/>

      {error && (
          <div style={{ textAlign: "center", color: "red", marginBottom: "10px" }}>
            {error}
          </div>
      )}

      <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
      >
        <Button children="Cancelar" onClick={() => backClick("create")} />
        <Button children="Guardar" variant={"primary"} onClick={handleSave} />
      </div>
    </div>
  );
}

export default NewPatient;
