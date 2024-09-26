import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import InputField from "./InputField";
import QuestionAdmin from "./QuestionAdmin";
import "../stylesheets/InputField.css";

function DashFAQ() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");

  const handleQuestionClick = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const clickShowModal = (type) => {
    type === "add"
      ? setTitleModal("Agregar pregunta frecuente")
      : setTitleModal("Actualizar pregunta frecuente");
    setShowModal(true);
  };

  const questions = [
    { question: "Pregunta 1", answer: "Respuesta 1", view: true },
    { question: "Pregunta 2", answer: "Respuesta 2", view: false },
    { question: "Pregunta 3", answer: "Respuesta 3", view: true },
    { question: "Pregunta 4", answer: "Respuesta 4", view: true },
    { question: "Pregunta 5", answer: "Respuesta 5", view: false },
  ];
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
        <h3>Preguntas frecuentes</h3>
        <Button
          variant={"primary"}
          children={"Agregar pregunta"}
          onClick={() => clickShowModal("add")}
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
        <Modal
          show={showModal}
          style={{ display: "flex", padding: 30 }}
          handleClose={() => setShowModal(false)}
        >
          <div style={{ display: "grid", gap: 15 }}>
            <h2>{titleModal}</h2>
            <InputField type="text" label="Pregunta" className="form" />
            <label for="myTextarea">Respuesta</label>
            <textarea className="textarea" rows="4" cols="80"></textarea>

            <Button variant={"primary"} children={"Guardar"} />
          </div>
        </Modal>
        <div className="Faq">
          {questions.map((q, index) => (
            <QuestionAdmin
              key={index}
              question={q.question}
              answer={q.answer}
              view={q.view}
              isOpen={openQuestionIndex === index}
              onClick={() => handleQuestionClick(index)}
              btnUpdate={() => clickShowModal("update")}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default DashFAQ;
