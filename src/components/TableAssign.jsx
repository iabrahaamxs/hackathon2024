import Button from "./Button";
import InputField from "./InputField";
import Rowtable from "./RowTable";

function TableAssign({ onClick }) {
  return (
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
        <Button
          variant={"primary"}
          children={"Entregas Pendientes"}
          onClick={() => onClick("deliver")}
        />
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
  );
}

export default TableAssign;
