import { GiMedicines } from "react-icons/gi";
import CardNumber from "./CardNumber";
import Button from "./Button";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaCircleRadiation, FaPlus, FaTrash } from "react-icons/fa6";
import { useState } from "react";
import RowInventory from "./RowInventory";
import MoreInventory from "./MoreInventory";
import InputField from "./InputField";

function Inventory() {
  const [enfermedad, setEnfermedad] = useState("");
  const [estado, setEstado] = useState("");
  const [medicina, setMedicina] = useState("");
  const [donante, setDonante] = useState("");
  const [agg, setAgg] = useState(false);

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
            name="donante"
            className="select history"
            value={donante}
            onChange={(e) => setDonante(e.target.value)}
          >
            <option value="M">Donante 1</option>
            <option value="F">Enfermedad 2</option>
          </select>
          <br />
          <br />
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <select
              name="Medicina"
              className="select history"
              value={medicina}
              onChange={(e) => setMedicina(e.target.value)}
            >
              <option value="M">Mecidina 1</option>
              <option value="F">Enfermedad 2</option>
            </select>
            <InputField className="form" label={"Presentación (mg)"} />
            <InputField className="form" label={"Lote"} />
            <InputField
              className="form"
              type="date"
              label={"Fecha Vencimiento"}
            />
            <InputField className="form" label={"Cantidad"} />
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
            <div className={"input"} style={{ justifyContent: "end", gap: 10 }}>
              <select
                name="enfermedad"
                className="select history"
                value={enfermedad}
                onChange={(e) => setEnfermedad(e.target.value)}
              >
                <option value="M">Enfermedad 1</option>
                <option value="F">Enfermedad 2</option>
              </select>
              <select
                name="estado"
                className="select history"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="M">Estado 1</option>
                <option value="F">Estado 2</option>
              </select>
              <Button children={"Filtrar"} variant={"primary"} />
            </div>
            <MoreInventory
              title={"medicina 1"}
              gm={20}
              cant={899}
              infoComponent={
                <div style={{ width: "90%", margin: "auto" }}>
                  <RowInventory
                    pri={1}
                    name={"medicina 1"}
                    gm={"300g"}
                    med={"123"}
                    date={"12/23/34"}
                    cant={"77"}
                  />
                  <RowInventory
                    pri={2}
                    name={"medicina 1"}
                    gm={"300g"}
                    med={"123"}
                    date={"12/23/34"}
                    cant={"77"}
                  />
                </div>
              }
            />
          </div>
        </>
      )}
    </>
  );
}

export default Inventory;
