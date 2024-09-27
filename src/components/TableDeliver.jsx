import Button from "./Button";
import InputField from "./InputField";
import Rowtable from "./RowTable";

function TableDeliver({ onClick }) {
  const treatments = [
    {
      priority: 1,
      id: "1234567",
      name: "Marcos Perez Gimenedz",
      med: "Medicamentoddddd 2",
      quantity: "20",
      lote: 222,
      date: "27/09/24"
    },
    {
      priority: 2,
      id: "1234567",
      name: "Marcos Perez Gimenez",
      med: "Medicamento 2",
      quantity: "60",
      lote: 22332,
      date: "27/09/24"
    },
    {
      priority: 3,
      id: "1234567",
      name: "Maria Jose Rodriguez",
      med: "Medicamento 55",
      quantity: "30",
      lote: 272,
      date: "27/09/24"
    },
    {
      priority: 2,
      id: "1234567",
      name: "Marcos Perez Gimenez",
      med: "Medicamento 2",
      quantity: "60",
      lote: 222,
      date: "27/09/24"
    }
  ];
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
          children={"Asignar medicamentos"}
          onClick={() => onClick("assign")}
        />
        <InputField type="text" className={"form"} label={"Buscar"} onlyNumbers={true} maxLength={8} />
      </div>
      <br />
      <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        {treatments.map((treatment, index) => (
            <Rowtable
                key={index}
                priority={treatment.priority}
                id={treatment.id}
                name={treatment.name}
                med={treatment.med}
                quantity={treatment.quantity}
                lote={treatment.lote}
                date={treatment.date}
            />
        ))}
      </div>
    </div>
  );
}

export default TableDeliver;
