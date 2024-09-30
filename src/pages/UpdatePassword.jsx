import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

function UpdatePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, seterrorPassword] = useState("");
  const [successPassword, setsuccessPassword] = useState(false);

  const handleSubmit = () => {
    //TODO verificar contraseña vieja
    if (password.length < 6) {
      seterrorPassword("La contraseña debe tener al menos 6 caracteres.");
      console.log("Error: La contraseña debe tener al menos 6 caracteres.");
    } else if (password !== confirmPassword) {
      seterrorPassword("Las contraseñas no coinciden.");
      console.log("Error: Las contraseñas no coinciden.");
    } else {
      seterrorPassword("");
      //TODO actualizar contraseña
      setsuccessPassword(true); // Simulamos éxito
      console.log("Éxito: La contraseña ha sido actualizada.", {
        currentPassword,
        newPassword: password,
        confirmPassword
      });
    }
  };

  return (
      <div style={styles.containerPassword}>
        <div style={styles.cardPassword}>
          <h2 style={styles.titlePasswordPassword}>Actualizar Contraseña</h2>

          {!successPassword ? (
              <>
                <InputField
                    id="password"
                    label="Contraseña Actual"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="inputField"
                />
                <InputField
                    id="newPassword"
                    label="Nueva Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="inputField"
                />
                <InputField
                    id="confirmPassword"
                    label="Confirmar Nueva Contraseña"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="inputField"
                />
                {errorPassword && (
                    <p style={styles.errorPassword}>{errorPassword}</p>
                )}

                <Button variant="primary" onClick={handleSubmit} className="btn">
                  Actualizar Contraseña
                </Button>

                <Button
                    variant="outline"
                    onClick={() => (window.location.href = "/")}
                    className="btn"
                >
                  Volver a Inicio
                </Button>
              </>
          ) : (
              <>
                <p style={styles.successPassword}>
                  ¡Tu contraseña ha sido actualizada exitosamente!
                </p>
                <Button
                    variant="primary"
                    onClick={() => (window.location.href = "/")}
                    className="btn"
                >
                  Volver a Inicio
                </Button>
              </>
          )}
        </div>
      </div>
  );
}

export default UpdatePassword;

const styles = {
  containerPassword: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  cardPassword: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
  },
  titlePassword: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  errorPassword: {
    color: "red",
    marginTop: "10px",
  },
  successPassword: {
    color: "green",
    fontSize: "18px",
    marginBottom: "20px",
  },
};
