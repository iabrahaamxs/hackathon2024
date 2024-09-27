import Button from "./Button";
import TableMedicine from "./TableMedicine";

function Medicine({ clickBack }) {
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
        <h3>Medicinas</h3>
        <Button
          children={"Volver"}
          variant={"primary"}
          onClick={() => clickBack("ItemHome")}
        />
      </div>
      <br />
      <div
        style={{
          backgroundColor: "white",
          padding: 10,
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
        }}
      >
        <TableMedicine />
      </div>
    </>
  );
}
export default Medicine;
