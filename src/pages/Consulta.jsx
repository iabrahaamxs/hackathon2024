import '../stylesheets/Home.css'
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";
import Table from "../components/Table.jsx"
import React from "react";

const Donante = () => {
  const navigate = useNavigate();

  const name = "Caritas";

  const data = [
    { name: 'Insulina', patients: 5 },
    { name: 'Metformina', patients: 8 },
    { name: 'Losartan', patients: 12 },
    { name: 'Prednisona', patients: 4 },
    { name: 'Xanax', patients: 6 },
    { name: 'Aspirina', patients: 10 },
    { name: 'Ibuprofeno', patients: 15 },
    { name: 'Paracetamol', patients: 20 },
    { name: 'Amoxicilina', patients: 7 },
    { name: 'Omeprazol', patients: 9 }
  ];

  // Ordenar los medicamentos por la cantidad de pacientes y seleccionar los 5 con mayor cantidad
  const topMeds = data.sort((a, b) => b.patients - a.patients).slice(0, 5);

  const headers = ["Medicamento", "Pacientes que lo necesitan"];

  return (
      <div className={'consulta-resultado'}>
        <h3>¡Hola, {name}!</h3>
        <p>Te mostramos los tratamientos más necesitados por la comunidad.</p>
        <Table data={topMeds} headers={headers} />
        <p>¡Gracias por ayudarnos a llevar salud a los más necesitados!.</p>
        <div className={"center"}>
          <Button
              variant={"primary"}
              children={"Volver"}
              onClick={() => navigate('/')}
          />
        </div>
      </div>
  );
}


const Resultado = () => {

  const navigate = useNavigate();

  const name = "María Carolina Pérez Jiménez";

  const data = [
    { Medicamento: 'Losartan', Cantidad: '30', Estado: 'Disponible', Retirar: '26/09/2024'},
    { Medicamento: 'Prednisona', Cantidad: '30', Estado: 'Espera', Retirar: '-'},
    { Medicamento: 'Xanax', Cantidad: '60', Estado: 'Espera', Retirar: '-'},
    { Medicamento: 'Insulina', Cantidad: '20', Estado: 'Disponible', Retirar: '24/09/2024'}
  ];

  return (

      <div className={'consulta-resultado'}>
        <h3>{name}</h3>
        <p>Te mostramos tus tratamientos registrados.</p>
        <Table data={data}/>
        <p>Si su medicamento se encuentra disponible, debe pasar a retirarlo en la fecha indicada a la sede de la
          Asociación Civil Aigos de Santo Luzardo, ubicada en calle 14, barrio Santo Luzardo.</p>
        <div className={"center"}>
          <Button
              variant={"primary"}
              children={"Volver"}
              onClick={() => navigate('/')}
          /></div>
      </div>
  );
}

export default function Consulta(page) {
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
                onClick={() => navigate('/nosotros')}
            /></div>
          <div className={"center"}>
            <Button
                variant={"primary"}
                children={"Preguntas frecuentes"}
                onClick={() => navigate('/preguntas-frecuentes')}
            /></div>
        </div>
        <div className={'container faq'}>
          {page === "paciente" ? <Resultado /> : <Donante />}        </div>
      </div>
  );
}
