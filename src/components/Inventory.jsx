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
          name: "medicina 1",
          gm: "300g",
          med: "123",
          date: "12/23/34",
          quantity: 77
        },
        {
          name: "medicina 1",
          gm: "300g",
          med: "123",
          date: "12/23/34",
          quantity: 77
        }
      ]
    },
    {
      title: "medicina 2",
      rows: [
        {
          name: "medicina 2",
          gm: "200g",
          med: "456",
          date: "11/22/33",
          quantity: 50
        },
        {
          name: "medicina 2",
          gm: "200g",
          med: "456",
          date: "11/22/33",
          quantity: 50
        }
      ]
    },
    {
      title: "medicina 3",
      rows: [
        {
          name: "medicina 3",
          gm: "150g",
          med: "789",
          date: "10/21/32",
          quantity: 30
        },
        {
          name: "medicina 3",
          gm: "150g",
          med: "789",
          date: "10/21/32",
          quantity: 30
        }
      ]
    }
  ];

  const [status, setStatus] = useState("all");
  const [med, setMed] = useState("");
  const [donor, setDonor] = useState("");
  const [agg, setAgg] = useState(false);

  const filteredInventory = status === "all" ? inventory : inventory.filter(inv => {
    const lowestPriority = Math.min(...inv.rows.map(row => calculatePriority(row.date)));
    return lowestPriority === status;
  });

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
          <select
            name="donor"
            className="select history"
            value={donor}
            onChange={(e) => setDonor(e.target.value)}
          >
            <option value="M">Donor 1</option>
            <option value="F">Illness 2</option>
          </select>
          <br />
          <br />
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <select
              name="Med"
              className="select history"
              value={med}
              onChange={(e) => setMed(e.target.value)}
            >
              <option value="M">Mecidina 1</option>
              <option value="F">Illness 2</option>
            </select>
            <InputField className="form" label={"Presentación (mg)"} onlyNumbers={true} maxLength={5} />
            <InputField className="form" label={"Lote"} maxLength={10} />
            <InputField
              className="form"
              type="date"
              label={"Fecha Vencimiento"}
            />
            <InputField className="form" label={"Cantidad"} onlyNumbers={true} maxLength={5} />
            <button className="action-btn delete-btn" aria-label="Delete">
              <FaTrash />
            </button>
          </div>
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
          >
            <FaPlus />
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
            <Button children={"Guardar donativo"} variant={"primary"} />
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
          <br />
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
