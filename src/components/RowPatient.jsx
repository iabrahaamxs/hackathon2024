import { FaPencil, FaTrash } from "react-icons/fa6";
import Button from "./Button.jsx";
import { FaCalendarCheck } from "react-icons/fa";

function RowPatient({ priority, id, name, illness, handleClick, onDelete }) {
  const getPriority = (priority) => {
    if (priority === 1) {
      return "red";
    } else if (priority === 2) {
      return "yellow";
    } else if (priority === 3) {
      return "green";
    } else return "";
  };

  const getTagColor = (illness) => {
    switch (illness.toLowerCase()) {
      case 'diabetes':
        return '#ff9999'; // Color para diabetes
      case 'hipertension':
        return '#99ccff'; // Color para hipertensión
      default:
        return '#e0e0e0'; // Color por defecto
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
      <div
          className="shadow"
          style={{
            width: "100%",
            height: 50,
            display: "flex",
            alignItems: "center",
            fontSize: 16,
          }}
      >
        <div
            style={{
              backgroundColor: getPriority(priority),
              width: 10,
              height: 10,
              borderRadius: 9999,
              margin: 10,
            }}
        ></div>
        <span style={{ width: "10%", opacity: 0.7 }}>{id}</span>
        <span style={{ width: "30%", opacity: 0.7 }}>{name}</span>
        <div style={{ width: "30%", opacity: 0.7 }}>
          {illness.map((ill, index) => (
              <div key={index} style={{ ...tagStyle, backgroundColor: getTagColor(ill) }}>
                {capitalizeFirstLetter(ill)}
              </div>
          ))}
        </div>
        <div style={{ width: "20%" }}>
          <Button variant={'outline'} children={'Ver historia'} onClick={handleClick} />
        </div>
        <div className="actions-column">
          <button className="action-btn delete-btn" aria-label="Delete" onClick={() => onDelete(id)}>
            <FaTrash />
          </button>
        </div>
      </div>
  );
}

const tagStyle = {
  display: 'inline-block',
  padding: '5px 10px',
  margin: '5px',
  borderRadius: '5px',
  fontSize: '14px'
};

export default RowPatient;

