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
  const [presentations, setPresentations] = useState([]);
  const [selectedPresentation, setSelectedPresentation] = useState("");
  const [isMedDisabled, setIsMedDisabled] = useState(true);
  const [isDateDisabled, setIsDateDisabled] = useState(true);
  const [isQuantityDisabled, setIsQuantityDisabled] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const patients = [
    {
      id: 1,
      cedula: '12345678',
      name: 'Juan Pérez',
      age: 45,
      gender: 'M',
      illness: 'Diabetes',
      meds: [
        { name: 'Insulina', presentations: ['10ml', '20ml', '30ml'], lastDelivery: '2024-08-30', presentation: '30ml' },
        { name: 'Metformina', presentations: ['500mg', '850mg'], lastDelivery: '2024-09-01', presentation: '500mg' }
      ]
    },
    {
      id: 2,
      cedula: '87654321',
      name: 'María Gómez',
      age: 50,
      gender: 'F',
      illness: 'Hipertensión',
      meds: [
        { name: 'Losartan', presentations: ['50mg', '100mg'], lastDelivery: '2024-09-15', presentation: '100mg' }
      ]
    },
    {
      id: 3,
      cedula: '11223344',
      name: 'Carlos López',
      age: 60,
      gender: 'M',
      illness: 'Asma',
      meds: [
        { name: 'Prednisona', presentations: ['20mg', '40mg'], lastDelivery: '2024-09-01', presentation: '20mg' }
      ]
    },
    {
      id: 4,
      cedula: '44332211',
      name: 'Ana Martínez',
      age: 35,
      gender: 'F',
      illness: 'Artritis',
      meds: [
        { name: 'Xanax', presentations: ['0.5mg', '1mg'], lastDelivery: '2024-09-10', presentation: '0.5mg' }
      ]
    },
    {
      id: 5,
      cedula: '55667788',
      name: 'Luis Rodríguez',
      age: 70,
      gender: 'M',
      illness: 'Cardiopatía',
      meds: [
        { name: 'Losartan', presentations: ['50mg', '100mg'], lastDelivery: '2024-08-25', presentation: '50mg' }
      ]
    }
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
      setPresentations([]);
      setSelectedPresentation("");
    } else {
      setPatientName("Paciente no encontrado");
      setMeds([]);
      setIsMedDisabled(true);
      setIsDateDisabled(true);
      setIsQuantityDisabled(true);
      setIsButtonDisabled(true);
      setInputMed("");
      setStartDate("");
      setQuantity("");
      setPresentations([]);
      setSelectedPresentation("");
      setErrorMed("");
    }
  };

  useEffect(() => {
    if (inputMed && cedula) {
      const patient = patients.find(p => p.cedula === cedula);
      if (patient) {
        const med = patient.meds.find(m => m.name === inputMed);
        if (med) {
          setPresentations(med.presentations);
          setSelectedPresentation(med.presentation); // Selecciona la presentación asignada al paciente

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
      setErrorMed("Todos los campos son obligatorios.");
      return;
    }
    if (quantity <= 0) {
      setErrorMed("La cantidad mensual debe ser mayor que 0.");
      return;
    }
    if (!meds.includes(inputMed)) {
      setErrorMed("El medicamento ingresado no está asociado con el paciente.");
      return;
    }

    Swal.fire({
      title: 'Confirmar Guardado',
      text: "¿Estás seguro de que deseas registrar esta entrega?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, guardar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // TODO: Lógica para guardar la entrega
        console.log("Nuevo tratamiento agregado:", { inputMed, startDate, quantity, cedula, patientName, selectedPresentation });
        setErrorMed("");
        setInputMed("");
        setStartDate("");
        setQuantity("");
        setCedula("");
        setPatientName("");
        setMeds([]);
        setPresentations([]);
        setSelectedPresentation("");
        setIsMedDisabled(true);
        setIsDateDisabled(true);
        setIsQuantityDisabled(true);
        setIsButtonDisabled(true);

        Swal.fire(
            'Guardado!',
            'La entrega se ha registrado exitosamente.',
            'success'
        );
      }
    });
  };

  return (
      <>
        <div className="header-container">
          <h2>Registrar entrega</h2>
        </div>
        <br />
        <div className="section">
          <div className="center">
            <div className="form-deliver">
              <div className="input-row">
                <InputField
                    type="text"
                    label={"Cédula del paciente"}
                    value={cedula}
                    onChange={handleCedulaChange}
                />
                <Button variant={'primary'} children={'Buscar'} onClick={handleSearchPatient} />
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
              <div className="medicine-options">
                {presentations.map((presentation, index) => (
                    <div key={index}>
                      <input
                          type="radio"
                          id={`presentation-${index}`}
                          name="presentation"
                          value={presentation}
                          checked={selectedPresentation === presentation}
                          onChange={(e) => setSelectedPresentation(e.target.value)}
                      />
                      <label htmlFor={`presentation-${index}`}>{presentation}</label>
                    </div>
                ))}
              </div>
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
              <div className="center">
                <Button variant={'primary'} children={'Guardar'} onClick={handleSaveMed} disabled={isButtonDisabled} />
              </div>
              {errorMed && <div className="error-message">{errorMed}</div>}
            </div>
          </div>
        </div>
      </>
  );
}

export default Deliver;
