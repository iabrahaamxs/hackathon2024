import '../stylesheets/Home.css'
import Tabs from '../assets/Tabs.jsx'
import InputField from "../assets/InputField.jsx";
import Button from "../assets/Button.jsx";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const Ingresar = () => {
    return(
        <div>
          <h4>Documento</h4>
          <InputField label={"Cédula o RIF"} id={"documento"} type={"text"} className={"login"}/>
          <h4>Contraseña</h4>
          <InputField label={"Ingrese su contraseña"} id={"contrasena"} type={"text"} className={"login"}/>
          <div className={"center"}><Button variant={"primary"} children={"Iniciar sesión"}/></div>
        </div>
    );
  }

  const Consultar = () => {
    return (<div>
    <h4>Documento</h4>
      <InputField label={"Ingrese su cédula"} id={"documento"} type={"text"} className={"login"} />
      <div className={"center"}><Button variant={"primary"} children={"Buscar"} /></div>
    </div>);
  }

  const tabs = [
    {label: 'Consultar', content: <Consultar/>},
    {label: 'Ingresar', content: <Ingresar/>},
  ];


  return (
      <div>
        <Tabs tabs={tabs}/>
      </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  return (
      <div className={'home'}>
        <div className={'welcome'}>
          <h1>Llevando salud a los más necesitados</h1>
          <div className={'center'}><img
              src="https://www.nicepng.com/png/detail/204-2049937_logo-de-farmacia-png.png"
              alt=""/>
          </div>
          <div className={"center"}>
            <Button
                variant={"primary"}
                children={"Nosotros"}
                onClick={() =>  navigate('/nosotros')}
            /></div>
          <div className={"center"}>
            <Button
                variant={"primary"}
                children={"Preguntas frecuentes"}
                onClick={() =>  navigate('/preguntas-frecuentes')}
            /></div>
        </div>
        <div className={'container'}>
          <Login/>
        </div>
      </div>
  );
}
