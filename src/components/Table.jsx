import React from 'react';
import '../stylesheets/Table.css';

const Table = ({ data }) => {
  const headers = Object.keys(data[0]);

  const renderEstado = (estado) => {
    const circleClass = estado === 'Disponible' ? 'status-disponible' : 'status-espera';
    return (
        <span>
        <span className={`status-circle ${circleClass}`}></span>
          {estado}
      </span>
    );
  };

  return (
      <div className="table-container">
        <table className="table">
          <thead>
          <tr>
            {headers.map((header) => (
                <th key={header}>{header}</th>
            ))}
          </tr>
          </thead>
          <tbody>
          {data.map((row, index) => (
              <tr key={index}>
                {Object.entries(row).map(([key, value], i) => (
                    <td key={i}>
                      {key === 'Estado' ? renderEstado(value) : value}
                    </td>
                ))}
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default Table;
