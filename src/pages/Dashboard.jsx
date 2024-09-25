//import { Link } from "react-router-dom";
import { useState } from "react";
import BtnOption from "../components/BtnOption";
import "../stylesheets/Panel.css";
import { useNavigate } from "react-router-dom";
import RegisterUser from "../components/RegisterUser";

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState("deliver");
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (option === "logout") {
      navigate("/");
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="panel">
        <div className="panel-title">
          <img
            src="https://www.nicepng.com/png/detail/204-2049937_logo-de-farmacia-png.png"
            alt=""
          />
          <h3>CCCD</h3>
        </div>
        <BtnOption
          text="Entregar medicamentos"
          iconName="deliver"
          selected={selectedOption === "deliver"}
          handleClick={handleOptionClick}
        />
        <BtnOption
          text="Registrar usuario"
          iconName="user"
          selected={selectedOption === "user"}
          handleClick={handleOptionClick}
        />
        <BtnOption
          text="Pacientes"
          iconName="patient"
          selected={selectedOption === "patient"}
          handleClick={handleOptionClick}
        />
        <BtnOption
          text="Inventario"
          iconName="box"
          selected={selectedOption === "box"}
          handleClick={handleOptionClick}
        />
        <BtnOption
          text="Reportes y estadísticas"
          iconName="report"
          selected={selectedOption === "report"}
          handleClick={handleOptionClick}
        />
        <BtnOption
          text="Preguntas frecuentes"
          iconName="question"
          selected={selectedOption === "question"}
          handleClick={handleOptionClick}
        />
        <BtnOption
          text="Cerrar sesión"
          iconName="logout"
          selected={selectedOption === "logout"}
          handleClick={handleOptionClick}
        />
      </aside>

      <article
        style={{
          // background: "white",
          padding: 40,
           flex: 1,
          // borderRadius: "10px",
          // paddingLeft: "10px",
        }}
      >
        {selectedOption === "deliver" ? (
          <h2>Entregar medicamentos view</h2>
        ) : null}
        {selectedOption === "user" ? <RegisterUser /> : null}
        {selectedOption === "patient" ? <h2>Pacientes view</h2> : null}
        {selectedOption === "box" ? <h2>Inventario view</h2> : null}
        {selectedOption === "report" ? (
          <h2>Reportes y estadisticas view 💀</h2>
        ) : null}
        {selectedOption === "question" ? (
          <h2>Preguntas fecuentes view</h2>
        ) : null}
      </article>
    </div>

    //  <Link to="/">Home</Link>
  );
}
