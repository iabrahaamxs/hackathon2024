import { useState } from "react";
import CardCreateUser from "./CardCreateUser";
import NewPatient from "./NewPatient";
import NewDonor from "./NewDonor";
import NewAdmin from "./NewAdmin";

function RegisterUser() {
  const [page, setPage] = useState("create");

  const handleClick = (option) => {
    setPage(option);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        height: '100%'
      }}
    >
      {page === "create" ? (
        <>
          <CardCreateUser txt="pacientes" count={68} onClick={handleClick} />
          <CardCreateUser txt="donantes" count={7} onClick={handleClick} />
          <CardCreateUser
            txt="administradores"
            count={3}
            onClick={handleClick}
          />
        </>
      ) : null}

      {page === "pacientes" ? <NewPatient /> : null}
      {page === "donantes" ? <NewDonor /> : null}
      {page === "administradores" ? <NewAdmin /> : null}
    </div>
  );
}

export default RegisterUser;
