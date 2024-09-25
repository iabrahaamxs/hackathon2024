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
    <>
      {page === "create" ? (
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            height: "100%",
          }}
        >
          <CardCreateUser txt="pacientes" count={68} onClick={handleClick} />
          <CardCreateUser txt="donantes" count={7} onClick={handleClick} />
          <CardCreateUser
            txt="administradores"
            count={3}
            onClick={handleClick}
          />
        </div>
      ) : null}

      {page === "pacientes" ? <NewPatient backClick={handleClick} /> : null}
      {page === "donantes" ? <NewDonor backClick={handleClick} /> : null}
      {page === "administradores" ? <NewAdmin /> : null}
    </>
  );
}

export default RegisterUser;
