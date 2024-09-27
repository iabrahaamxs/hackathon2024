import { GiMedicines } from "react-icons/gi";
import CardNumber from "./CardNumber";
import Button from "./Button";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaCircleRadiation, FaPlus, FaTrash } from "react-icons/fa6";
import { useState } from "react";
import RowInventory from "./RowInventory";
import MoreInventory from "./MoreInventory";
import InputField from "./InputField";
import {calculatePriority} from "../utils/utils.jsx";

function Inventory() {

  const donors = [
    { value: "D1", label: "Donor 1" },
    { value: "D2", label: "Donor 2" }
  ];

  const medicines = [
    { value: "M1", label: "Medicina 1" },
    { value: "M2", label: "Medicina 2" }
  ];

  const [donor, setDonor] = useState(donors[0].value);
  const [med, setMed] = useState(medicines[0].value);
  const [medicinesList, setMedicinesList] = useState([
    {
      id: 0,
      med: medicines[0].value,
      presentation: "",
      lote: "",
      expirationDate: "",
      quantity: ""
    }
  ]);
  const addMedicine = () => {
    setMedicinesList([
      ...medicinesList,
      {
        id: medicinesList.length,
        med: "",
        presentation: "",
        lote: "",
        expirationDate: "",
        quantity: ""
      }
    ]);
  };

  const handleMedicineChange = (index, field, value) => {
    const newMedicinesList = [...medicinesList];
    newMedicinesList[index][field] = value;
    setMedicinesList(newMedicinesList);
  };

  const removeMedicine = (index) => {
    if (medicinesList.length > 1) {
      const newMedicinesList = medicinesList.filter((_, i) => i !== index);
      setMedicinesList(newMedicinesList);
    }
  };


  const statuses = [
    { value: "all", label: "Todos" },
    { value: 1, label: "Caducadas" },
    { value: 2, label: "Por caducar" },
    { value: 3, label: "Vigentes" }
  ];


  const inventory = [
    {
      title: "medicina 1",
      rows: [
        {
          id: 6,
          name: "medicina 1",
          gm: "300g",
          med: "123",
          date: "2024/08/15",
          quantity: 77
        },
        {
          id: 5,
          name: "medicina 1",
          gm: "300g",
          med: "123",
          date: "2024/12/15",
          quantity: 77
        }
      ]
    },
    {
      title: "medicina 2",
      rows: [
        {
          id: 1,
          name: "medicina 2",
          gm: "200g",
          med: "456",
          date: "2025/08/15",
          quantity: 50
        },
        {
          id: 2,
          name: "medicina 2",
          gm: "200g",
          med: "456",
          date: "2024/12/15",
          quantity: 50
        }
      ]
    },
    {
      title: "medicina 3",
      rows: [
        {
          id: 2,
          name: "medicina 3",
          gm: "150g",
          med: "789",
          date: "2025/08/15",
          quantity: 30
        },
        {
          id: 3,
          name: "medicina 3",
          gm: "150g",
          med: "789",
          date: "2025/08/15",
          quantity: 30
        }
      ]
    }
  ];

  const [status, setStatus] = useState("all");
  const [agg, setAgg] = useState(false);

  const filteredInventory = status === "all" ? inventory : inventory.filter(inv => {
    const lowestPriority = Math.min(...inv.rows.map(row => calculatePriority(row.date)));
    return lowestPriority === status;
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = "Este campo es obligatorio";
    } 
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSave = () => {
    // Validar todos los campos antes de guardar
    let valid = true;
    medicinesList.forEach((medicine, index) => {
      if (!medicine.med || !medicine.presentation || !medicine.lote || !medicine.expirationDate || !medicine.quantity) {
        valid = false;
        validateField(`medicine-${index}-med`, medicine.med);
        validateField(`medicine-${index}-presentation`, medicine.presentation);
        validateField(`medicine-${index}-lote`, medicine.lote);
        validateField(`medicine-${index}-expirationDate`, medicine.expirationDate);
        validateField(`medicine-${index}-quantity`, medicine.quantity);
      }
    });

    if (!donor) {
      valid = false;
      validateField("donor", donor);
    }

    if (valid) {
      // Datos válidos, enviar al servidor
      const dataToSend = {
        donor,
        medicinesList
      };
      console.log("Datos válidos, enviar al servidor:", dataToSend);
      // TODO: Lógica para enviar los datos al servidor
    } else {
      console.log("Hay errores en el formulario");
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          padding: 10,
          display: "flex",
          borderRadius: "10px",
          justifyContent: "space-between",
        }}
      >
        <h3>Inventario</h3>
        <Button
          children={agg ? "Volver" : "Agregar donativo"}
          variant="primary"
          onClick={() => setAgg(!agg)}
        />
      </div>
      <br />
      {agg ? (
          <div
              style={{
                backgroundColor: "white",
                padding: 10,
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
              }}
          >
            <div style={{position: "relative"}}>
              <select
                  name="donor"
                  className="select history"
                  value={donor}
                  onChange={(e) => {
                    setDonor(e.target.value);
                    validateField("donor", e.target.value);
                  }}
              >
                {donors.map((donor) => (
                    <option key={donor.value} value={donor.value}>
                      {donor.label}
                    </option>
                ))}
              </select>
              {errors.donor && <span className="error">{errors.donor}</span>}
            </div>
            <br/>
            <br/>
            {medicinesList.map((medicine, index) => (
                <div key={index} style={{display: "flex", gap: 10, alignItems: "center"}}>
                  <div style={{position: "relative", flex: 1}}>
                    <select
                        name="Med"
                        className="select history"
                        value={medicine.med}
                        onChange={(e) => {
                          handleMedicineChange(index, "med", e.target.value);
                          validateField(`medicine-${index}-med`, e.target.value);
                        }}
                    >
                      {medicines.map((med) => (
                          <option key={med.value} value={med.value}>
                            {med.label}
                          </option>
                      ))}
                    </select>
                    {errors[`medicine-${index}-med`] &&
                        <span className="error">{errors[`medicine-${index}-med`]}</span>}
                  </div>
                  <div style={{position: "relative", flex: 1}}>
                    <InputField
                        className="form"
                        label={"Presentación (gr)"}
                        onlyNumbers={true}
                        maxLength={5}
                        value={medicine.presentation}
                        onChange={(e) => {
                          handleMedicineChange(index, "presentation", e.target.value);
                          validateField(`medicine-${index}-presentation`, e.target.value);
                        }}
                    />
                    {errors[`medicine-${index}-presentation`] &&
                        <span className="error">{errors[`medicine-${index}-presentation`]}</span>}
                  </div>
                  <div style={{position: "relative", flex: 1}}>
                    <InputField
                        className="form"
                        label={"Lote"}
                        maxLength={10}
                        value={medicine.lote}
                        onChange={(e) => {
                          handleMedicineChange(index, "lote", e.target.value);
                          validateField(`medicine-${index}-lote`, e.target.value);
                        }}
                    />
                    {errors[`medicine-${index}-lote`] &&
                        <span className="error">{errors[`medicine-${index}-lote`]}</span>}
                  </div>
                  <div style={{position: "relative", flex: 1}}>
                    <InputField
                        className="form"
                        type="date"
                        label={"Fecha Vencimiento"}
                        value={medicine.expirationDate}
                        onChange={(e) => {
                          handleMedicineChange(index, "expirationDate", e.target.value);
                          validateField(`medicine-${index}-expirationDate`, e.target.value);
                        }}
                    />
                    {errors[`medicine-${index}-expirationDate`] &&
                        <span className="error">{errors[`medicine-${index}-expirationDate`]}</span>}
                  </div>
                  <div style={{position: "relative", flex: 1}}>
                    <InputField
                        className="form"
                        label={"Cantidad"}
                        onlyNumbers={true}
                        maxLength={5}
                        value={medicine.quantity}
                        onChange={(e) => {
                          handleMedicineChange(index, "quantity", e.target.value);
                          validateField(`medicine-${index}-quantity`, e.target.value);
                        }}
                    />
                    {errors[`medicine-${index}-quantity`] &&
                        <span className="error">{errors[`medicine-${index}-quantity`]}</span>}
                  </div>
                  <button
                      className="action-btn delete-btn"
                      aria-label="Delete"
                      onClick={() => removeMedicine(index)}
                      disabled={medicinesList.length === 1}
                  >
                    <FaTrash/>
                  </button>
                </div>
            ))}
            <button
                style={{
                  width: "96%",
                  marginTop: 6,
                  border: "none",
                  padding: 6,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                  borderRadius: 6,
                  cursor: "pointer",
                }}
                onClick={addMedicine}
            >
              <FaPlus/>
              Agregar
            </button>

            <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 40,
                  marginBottom: 20,
                }}
            >
              <Button children={"Guardar donativo"} variant={"primary"} onClick={handleSave}/>
            </div>
          </div>
      ) : (
          <>
            <div
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  display: "flex",
                  borderRadius: "10px",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
            >
              <CardNumber
                  number={"500"}
                  descriptor={"Medicamentos en inventario"}
                  Icon={GiMedicines}
              />
              <CardNumber
                  number={"36"}
                  descriptor={"Medicamentos por caducar"}
                  Icon={BsFillCalendarDateFill}
              />
              <CardNumber
                  number={"21"}
                  descriptor={"Medicamentos caducados"}
                  Icon={FaCircleRadiation}
              />
            </div>
            <br/>
            <div
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: "10px",
                  justifyContent: "space-between",
                }}
            >
              <div className={"input"} style={{justifyContent: "end", gap: 10}}>
                <select
                    name="status"
                    className="select history"
                    value={status}
                    onChange={(e) => setStatus(parseInt(e.target.value))}
                >
                  {statuses.map((st) => (
                      <option key={st.value} value={st.value}>
                        {st.label}
                      </option>
                  ))}
                </select>

                <Button children={"Filtrar"} variant={"primary"}/>
              </div>
              {filteredInventory.map((inv, index) => (
                  <MoreInventory
                      key={index}
                      title={inv.title}
                      quantity={inv.rows.reduce((sum, row) => sum + row.quantity, 0)}
                      rows={inv.rows}
                  />
              ))}
            </div>
          </>
      )}
    </>
  );
}

export default Inventory;
