import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import InputField from "./InputField.jsx";
import Button from "./Button.jsx";

function Deliver() {
  const [inputMed, setInputMed] = useState("");
  const [startDate, setStartDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cedula, setCedula] = useState("");
  const [patientName, setPatientName] = useState("");
  const [errorMed, setErrorMed] = useState("");
  const [meds, setMeds] = useState([]);
  const [isMedDisabled, setIsMedDisabled] = useState(true)
  const [isDateDisabled, setIsDateDisabled] = useState(true);
  const [isQuantityDisabled, setIsQuantityDisabled] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const patients = [
    { id: 1, cedula: '12345678', name: 'Juan Pérez', age: 45, gender: 'M', illness: 'Diabetes', meds: [{ name: 'Insulina', lastDelivery: '2024-08-30' }, { name: 'Metformina', lastDelivery: '2024-09-01' }] },
    { id: 2, cedula: '87654321', name: 'María Gómez', age: 50, gender: 'F', illness: 'Hipertensión', meds: [{ name: 'Losartan', lastDelivery: '2024-09-15' }] },
    { id: 3, cedula: '11223344', name: 'Carlos López', age: 60, gender: 'M', illness: 'Asma', meds: [{ name: 'Prednisona', lastDelivery: '2024-09-01' }] },
    { id: 4, cedula: '44332211', name: 'Ana Martínez', age: 35, gender: 'F', illness: 'Artritis', meds: [{ name: 'Xanax', lastDelivery: '2024-09-10' }] },
    { id: 5, cedula: '55667788', name: 'Luis Rodríguez', age: 70, gender: 'M', illness: 'Cardiopatía', meds: [{ name: 'Losartan', lastDelivery: '2024-08-25' }] }
  ];

  const handleChangeMed = (e) => {
    setInputMed(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCedulaChange = (e) => {
    setCedula(e.target.value);
  };

  const handleSearchPatient = () => {
    const patient = patients.find(p => p.cedula === cedula);
    if (patient) {
      setPatientName(patient.name);
      setMeds(patient.meds.map(med => med.name));
      setIsMedDisabled(false);
      setIsDateDisabled(true);
      setIsQuantityDisabled(true);
      setIsButtonDisabled(true);
      setInputMed("");
      setStartDate("");
      setQuantity("");
    } else {
      setPatientName("Paciente no encontrado");
      setMeds([]);
      setIsDateDisabled(true);
      setIsQuantityDisabled(true);
      setIsButtonDisabled(true);
      setStartDate("");
      setErrorMed("");
    }
  };

  useEffect(() => {
    if (inputMed && cedula) {
      const patient = patients.find(p => p.cedula === cedula);
      if (patient) {
        const med = patient.meds.find(m => m.name === inputMed);
        if (med) {
          const lastDeliveryDate = new Date(med.lastDelivery);
          const currentDate = new Date();
          const diffTime = Math.abs(currentDate - lastDeliveryDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

          setStartDate(med.lastDelivery);

          if (diffDays < 30) {
            setIsDateDisabled(true);
            setIsQuantityDisabled(true);
            setIsButtonDisabled(true);
            setErrorMed("El paciente ya recibió este medicamento en el último mes.");
          } else {
            setIsDateDisabled(false);
            setIsQuantityDisabled(false);
            setIsButtonDisabled(false);
            setErrorMed("");
          }
        }
      }
    }
  }, [inputMed, cedula]);

  const handleSaveMed = () => {
    if (!inputMed || !startDate || !quantity || !cedula || patientName === "Paciente no encontrado") {
      setErrorMed("Todos los campos son obligatorios y el paciente debe ser válido.");
      return;
    }
    if (inputMed.length < 3) {
      setErrorMed("El nombre del medicamento debe tener al menos 3 caracteres.");
      return;
    }
    if (quantity <= 0) {
      setErrorMed("La cantidad mensual debe ser mayor que 0.");
      return;
    }

    Swal.fire({
      title: 'Confirmar Guardado',
      text: "¿Estás seguro de que deseas guardar el nuevo tratamiento?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, guardar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // TODO: Lógica para guardar el nuevo tratamiento
        console.log("Nuevo tratamiento agregado:", { inputMed, startDate, quantity, cedula, patientName });
        setErrorMed("");
        setInputMed("");
        setStartDate("");
        setQuantity("");
        setCedula("");
        setPatientName("");
        setMeds([]);
        setIsDateDisabled(false);
        setIsQuantityDisabled(false);
        setIsButtonDisabled(false);

        Swal.fire(
            'Guardado!',
            'El nuevo tratamiento ha sido guardado exitosamente.',
            'success'
        );
      }
    });
  };

  return (
      <>
        <div
            style={{
              backgroundColor: "white",
              padding: 10,
              display: "flex",
              borderRadius: "10px"
            }}
        >
          <h2>Registrar entrega</h2>
        </div>
        <br />
        <div className={'section'}>
          <div className={'center'}>
            <div style={{width: "60%"}}>
              <div className="input-row">
                <InputField
                    type="text"
                    label={"Cédula del paciente"}
                    value={cedula}
                    onChange={handleCedulaChange}
                />
                <Button variant={'primary'} children={'Buscar'} onClick={handleSearchPatient}/>
              </div>
              <InputField
                  type="text"
                  label={"Nombre del paciente"}
                  value={patientName}
                  disabled={true}
              />
              <InputField
                  type="text"
                  label={"Medicamento"}
                  value={inputMed}
                  onChange={handleChangeMed}
                  suggestions={meds}
                  onlyAlphanumeric={true}
                  maxLength={50}
                  disabled={isMedDisabled}
              />
              <InputField
                  type="date"
                  label={"Fecha de entrega"}
                  value={startDate}
                  onChange={handleStartDateChange}
                  disabled={isDateDisabled}
              />
              <InputField
                  type="number"
                  label={"Cantidad mensual"}
                  value={quantity}
                  onChange={handleQuantityChange}
                  onlyNumbers={true}
                  maxLength={3}
                  disabled={isQuantityDisabled}
              />
              <div className={'center'}>
                <Button variant={'primary'} children={'Guardar'} onClick={handleSaveMed} disabled={isButtonDisabled}/>
              </div>
              {errorMed && <div style={{color: "red", textAlign: "center"}}>{errorMed}</div>}
            </div>
          </div>
        </div>
        </>
        );
}

export default Deliver;
