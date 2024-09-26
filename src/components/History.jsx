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
import '../stylesheets/Dashboard.css'
import {MdOutlinePhoneAndroid} from "react-icons/md";
import {useState} from "react";
import More from "./More.jsx";
import Table from "./Table.jsx";
import Diagnosis from "./Diagnosis.jsx";
import RowTreatment from "./RowTreatment.jsx";
import Modal from "./Modal.jsx";

function History({ backClick }) {
  const [inputValue, setInputValue] = useState('');
  const meds = ['Prednisona', 'Losartan', 'Insulina'];
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const sectores = ['Barrio Lindo', 'Alambique', 'Santos Luzardo', 'Cardenales', 'Los Luises'];

  const pacienteDatos = {
    id: '12352242', nombres: 'Jose María', apellidos: 'Pérez Ortega', sexo: 'Masculino', fnacimiento: '1973-04-03', sector: 'Los Luises', direccion: 'Casa imaginaria', telefono: '02567654567', celular: '04162425353'
  }

  const [id, setId] = useState(pacienteDatos.id);
  const [nombres, setNombres] = useState(pacienteDatos.nombres);
  const [apellidos, setApellidos] = useState(pacienteDatos.apellidos);
  const [sexo, setSexo] = useState(pacienteDatos.sexo);
  const [fnacimiento, setFnacimiento] = useState(pacienteDatos.fnacimiento);
  const [sector, setSector] = useState(pacienteDatos.sector);
  const [direccion, setDireccion] = useState(pacienteDatos.direccion);
  const [telefono, setTelefono] = useState(pacienteDatos.telefono);
  const [celular, setCelular] = useState(pacienteDatos.celular);

  const treatmentsData = [
      { med: 'Losartan', quantity: '30', date: '26/09/2024'},
      { med: 'Prednisona', quantity: '30', date: '26/09/2024'},
      { med: 'Xanax', quantity: '60', date: '26/09/2024'},
      { med: 'Insulina', quantity: '20', date: '26/09/2024'}]

  const [showNewTreatment, setShowNewTreatment] = useState(false);

  const handleOpenTreatment = () => setShowNewTreatment(true);
  const handleCloseTreatment = () => setShowNewTreatment(false);


  const initialDiagnosisData = [
    {illness:'Diabetes', classification: 'Estadio I', notes:'Heriditaria', treatment:''},
    {illness:'Hipertensión', classification: 'Estadio II', notes:'', treatment:''},
  ]

  const [diagnosisData, setDiagnosisData] = useState(initialDiagnosisData);

  const handleDiagnosisChange = (index, field, value) => {
    const newDiagnosisData = [...diagnosisData];
    newDiagnosisData[index][field] = value;
    setDiagnosisData(newDiagnosisData);
  };

  const [showNewDiagnosis, setShowNewDiagnosis] = useState(false);

  const handleOpenDiagnosis = () => setShowNewDiagnosis(true);
  const handleCloseDiagnosis = () => setShowNewDiagnosis(false);
  const [illness, setIllness] = useState('');
  const [classification, setClassification] = useState('-');
  const [notes, setNotes] = useState('');
  const [treatment, setTreatment] = useState('');

  const handleSave = () => {
    onSave({ illness, classification, notes, treatment });
    handleClose();
  };


  const initialAntecedentesData = {
    encamado: false, diabetes: true, dislipidemia: false, obesidad: true,
    erc: false, iam: false, acv: false, fumador: false, alergias: 'Maní', observaciones: ''
  }

  const conditions = ['Encamado', 'Diabetes', 'Dislipidemia', 'Obesidad', 'ERC', 'IAM', 'ACV', 'Fumador'];

  const [antecedentesData, setAntecedentesData] = useState(initialAntecedentesData);
  const handleCheckboxChange = (condition) => {
    setAntecedentesData({
      ...antecedentesData,
      [condition.toLowerCase()]: !antecedentesData[condition.toLowerCase()]
    });
  };

  const handleAntecedentesChange = (field, value) => {
    setAntecedentesData({
      ...antecedentesData,
      [field]: value,
    });
  };

  const dataEntregas = [
    { Medicamento: 'Losartan', Cantidad: '30', Entregado: '26/09/2024'},
    { Medicamento: 'Prednisona', Cantidad: '30', Entregado: '26/09/2024'},
    { Medicamento: 'Xanax', Cantidad: '60', Entregado: '26/09/2024'},
    { Medicamento: 'Insulina', Cantidad: '20', Entregado: '26/09/2024'}
  ];


  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  return (
      <div>
        <div className={'section header'}>
          <h2>Historia médica</h2>
          <Button children="Volver" onClick={() => backClick("patients")} variant={'outline'} />
        </div>

        <p>Datos del paciente</p>
        <div className={'section'}>
          <div className={'row'}>
            <div className={'input'}>
              <i style={{fontSize: 24, marginRight: 10}}>
                <FaAddressCard/>
              </i>
              <InputField
                  label={"Identificación"}
                  id={"documento"}
                  type={"text"}
                  className={"history form"}
                  value={id}
                  onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className={'input'}>
              <i style={{fontSize: 24, marginRight: 10}}>
                <FaUser/>
              </i>
              <InputField
                  label={"Nombre"}
                  id={"name"}
                  type={"text"}
                  className={"history form"}
                  value={nombres}
                  onChange={(e) => setNombres(e.target.value)}
              />
            </div>
            <div className={'input'}>
              <i style={{fontSize: 24, marginRight: 10}}>
                <FaUser/>
              </i>
              <InputField
                  label={"Apellido"}
                  id={"last-name"}
                  type={"text"}
                  className={"history form"}
                  value={apellidos}
                  onChange={(e) => setApellidos(e.target.value)}
              />
            </div>
          </div>
          <div className={'row'}>
            <div className={'input'}>
              <i style={{fontSize: 24, marginRight: 10}}>
                <BsGenderAmbiguous/>
              </i>
              <select name="gender" className="select history" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>
            </div>
            <div className={'input'}>
              <i style={{fontSize: 24, marginRight: 10}}>
                <BsFillCalendarDateFill/>
              </i>
              <InputField
                  label={"Fecha de nacimiento"}
                  id={"birthdate"}
                  type={"date"}
                  className={"history form"}
                  value={fnacimiento}
                  onChange={(e) => setFnacimiento(e.target.value)}
              />
            </div>
          </div>
          <div className={'row'}>
            <div className={'input'}>
              <i style={{fontSize: 24, marginRight: 10}}>
                <FaLocationDot/>
              </i>
              <select name="select" className="select history" value={sector}
                      onChange={(e) => setSector(e.target.value)}>
                {sectores.map((sector, index) => (
                    <option key={index} value={sector}>
                      {sector}
                    </option>
                ))}
              </select>
            </div>
            <div className={'input'}>
              <i style={{fontSize: 24, marginRight: 10}}>
                <FaHouse/>
              </i>
              <InputField
                  label={"Dirección"}
                  id={"address"}
                  type={"text"}
                  className={"login form"}
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
          </div>
          <div className={'row'}>
            <div className={'input'}>
              <i style={{fontSize: 24, marginRight: 10}}>
                <FaPhone/>
              </i>
              <InputField
                  label={"Teléfono"}
                  id={"phone"}
                  type={"text"}
                  className={"history form"}
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className={'input'}>
              <i style={{fontSize: 24, marginRight: 10}}>
                <MdOutlinePhoneAndroid/>
              </i>
              <InputField
                  label={"Celular"}
                  id={"cellphone"}
                  type={"text"}
                  className={"history form"}
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
              />
            </div>
          </div>
          <div className={'update'}>
            <Button children={'Actualizar'} variant={'primary'}/>
          </div>
        </div>

        <p>Tratamientos</p>
        <div className={'section treatments'}>
          {treatmentsData.map((item, index) => (
              <RowTreatment
                  med={item.med}
                  date={item.date}
                  quantity={item.quantity}
                  renovate={item.renovate}
              />
          ))}
          <div className={'center'}>
            <Button
                children={'Agregar tratamiento'}
                variant={'primary'}
                onClick={handleOpenTreatment}
            /></div>
        </div>
        <Modal show={showNewTreatment} handleClose={handleCloseTreatment}>
          <h2>Agregar Nuevo Tratamiento</h2>
          <InputField type="text" label={'Medicamento'} value={inputValue}
                      onChange={handleChange}
                      suggestions={meds}/>
          <InputField type="date" label={'Fecha de inicio'}/>
          <InputField type="number" label={'Cantidad mensual'}/>
          <div className={'center'}><Button variant={'primary'} children={'Guardar'} onClick={handleCloseTreatment}/>
          </div>
        </Modal>

        <p>Diagnósticos actuales</p>
        <div className={'section'}>
          {diagnosisData.map((item, index) => (
              <Diagnosis
                  key={index}
                  illness={item.illness}
                  classification={item.classification}
                  notes={item.notes}
                  treatment={item.treatment}
                  onIllnessChange={(e) => handleDiagnosisChange(index, 'illness', e.target.value)}
                  onClassificationChange={(e) => handleDiagnosisChange(index, 'classification', e.target.value)}
                  onNotesChange={(e) => handleDiagnosisChange(index, 'notes', e.target.value)}
                  onTreatmentChange={(e) => handleDiagnosisChange(index, 'treatment', e.target.value)}
              />
          ))}
          <div className={'center'}>
            <Button
                children={'Agregar diagnóstico'}
                variant={'primary'}
                onClick={handleOpenDiagnosis}
            /></div>
      </div>
        <Modal show={showNewDiagnosis} handleClose={handleCloseDiagnosis}>
          <h2>Agregar Nuevo Diagnóstico</h2>
          <InputField label="Enfermedad" value={illness} onChange={(e) => setIllness(e.target.value)}/>
          <div className="input-row">
            <select name="classification" className="select history" value={classification}
                    onChange={(e) => setClassification(e.target.value)}>
              <option value="-">-</option>
              <option value="Estadio I">Estadio I</option>
              <option value="Estadio II">Estadio II</option>
              <option value="Estadio III">Estadio III</option>
            </select>
            <InputField label="Observaciones" value={notes} onChange={(e) => setNotes(e.target.value)}/>
          </div>
          <div className="input-full-width">
            <InputField label="Tratamiento" value={treatment} onChange={(e) => setTreatment(e.target.value)}/>
          </div>
          <div className={'center'}><Button variant={'primary'} children={'Guardar'} onClick={handleCloseTreatment}/>
          </div>
        </Modal>

        <p>Antecedentes</p>
        <div className={'section'}>
          <div className={'antecedentes'}>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
              {conditions.map((condition, index) => (
                  <label key={index} className="checkbox-label"
                         style={{flex: '1 1 22%', display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                    <input
                        type="checkbox"
                        value={condition}
                        checked={antecedentesData[condition.toLowerCase()]}
                        onChange={() => handleCheckboxChange(condition)}
                    />
                    <span className="checkbox-custom" style={{marginLeft: '5px'}}></span>
                    {condition}
                  </label>
              ))}
            </div>
            <InputField
                label={'Alergias'}
                value={antecedentesData.alergias}
                onChange={(e) => handleAntecedentesChange('alergias', e.target.value)}
            />
            <InputField
                label={'Observaciones'}
                value={antecedentesData.observaciones}
                onChange={(e) => handleAntecedentesChange('observaciones', e.target.value)}
            />
          </div>
          <div className={'update'}>
            <Button children={'Actualizar'} variant={'primary'}/>
          </div>
        </div>

        <More
            title={'Historial de entregas'}
            infoComponent={<div style={{width: '90%', margin: 'auto'}}><Table data={dataEntregas}/></div>}
        />

        <More
            title={'Información adicional'}
            infoComponent={<img style={{width: '500px'}}
                                src={'https://i.etsystatic.com/36842711/r/il/fe5889/4888519418/il_570xN.4888519418_azww.jpg'}/>}
        />
        
      </div>
  );
}

export default History;