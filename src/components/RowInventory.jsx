import Button from "./Button";
import Swal from "sweetalert2";
import { calculatePriority } from "../utils/utils";

function RowInventory({ id, gm, name, med, quantity, date, onDelete }) {
  const priority = calculatePriority(date);

  const getPrioriClass = (priority) => {
    switch (priority) {
      case 1:
        return "priority-red";
      case 2:
        return "priority-yellow";
      case 3:
        return "priority-green";
      default:
        return "";
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        //TODO Lógica para eliminar
        onDelete(id);
        Swal.fire(
            'Eliminado!',
            'El medicamento ha sido eliminado.',
            'success'
        );
      }
    });
  };

  return (
      <div className="row-table">
        <div className={`priority-indicator ${getPrioriClass(priority)}`}></div>
        <span style={{ width: "25%" }} className="column">
        {name}
      </span>
        <span style={{ width: "15%" }} className="column">
        {gm}
      </span>
        <span style={{ width: "15%" }} className="column">
        #{med}
      </span>
        <span style={{ width: "15%" }} className="column">
        {date}
      </span>
        <span style={{ width: "15%" }} className="column">
        {quantity}und
      </span>
        <div style={{ width: "15%" }} className="actions-column">
          {priority === 1 ? (
              <Button variant={"primary"} children={"Devolver"} onClick={() => handleDelete(id)} />
          ) : null}
        </div>
      </div>
  );
}

export default RowInventory;
