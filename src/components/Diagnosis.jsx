import React, { useState } from 'react';
import { FaAngleUp, FaAngleDown, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import '../stylesheets/More.css';
import InputField from "./InputField.jsx";
import Button from "./Button.jsx";

function Diagnosis({ id, illness, classification, notes, treatment, onIllnessChange, onClassificationChange, onNotesChange, onTreatmentChange, onUpdate, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className={`more-container ${isOpen ? 'active' : ''}`}>
        <div className={`title ${isOpen ? 'active' : ''}`} onClick={handleClick}>
          <h3 className={'title-text'}>{illness}</h3>
          <div className={'icons'}>
            <FaTrashAlt className="arrow" onClick={() => onDelete(id)} />
            {isOpen ? <FaAngleUp className="arrow" /> : <FaAngleDown className="arrow" />}
          </div>
        </div>
        {isOpen && (
            <div className={'section'}>
              <div className={'info'}>
                <div className="input-row">
                  <select name="classification" className="select history" defaultValue={classification} onChange={onClassificationChange}>
                    <option value="-">-</option>
                    <option value="Estadio I">Estadio I</option>
                    <option value="Estadio II">Estadio II</option>
                    <option value="Estadio III">Estadio III</option>
                  </select>
                  <InputField label={'Observaciones'} value={notes} onChange={onNotesChange} />
                </div>
                <div className="input-full-width">
                  <InputField label={'Tratamiento'} value={treatment} onChange={onTreatmentChange} />
                </div>
                <div className={'center'}>
                  <Button children={'Actualizar'} variant={'primary'} onClick={() => onUpdate(id)} />
                </div>
              </div>
            </div>
        )}
      </div>
  );
}

export default Diagnosis;