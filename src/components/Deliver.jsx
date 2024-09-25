import Button from "./Button";
import InputField from "./InputField";
import Rowtable from "./RowTable";

function Deliver() {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          padding: 10,
          display: "flex",
          borderRadius: "10px",
        }}
      >
        <h3>Entregas pendientes</h3>
      </div>
      <br />
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          justifyContent: "center",
          gap: 20,
          height: "100%",
          padding: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button variant={"primary"} children={"Asignar medicamentos"} />
          <InputField type="text" className={"form"} label={"Buscar"} />
        </div>
        <br />
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          <Rowtable
            pri={1}
            id={"1234567"}
            name={"Marcos Perez Gimenez"}
            med={"Medicamento 2"}
            lote={222}
            date={"27/09/24"}
          />
          <Rowtable
            pri={2}
            id={"1234567"}
            name={"Marcos Perez Gimenez"}
            med={"Medicamento 2"}
            lote={222}
            date={"27/09/24"}
          />
          <Rowtable
            pri={3}
            id={"1234567"}
            name={"Maria Jose Rodriguez"}
            med={"Medicamento 55"}
            lote={272}
            date={"27/09/24"}
          />
          <Rowtable
            pri={2}
            id={"1234567"}
            name={"Marcos Perez Gimenez"}
            med={"Medicamento 2"}
            lote={222}
            date={"27/09/24"}
          />
        </div>
      </div>
      <br />
    </>
  );
}

export default Deliver;
