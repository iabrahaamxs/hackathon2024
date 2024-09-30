import { useEffect, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import InputField from "./InputField";
import QuestionAdmin from "./QuestionAdmin";
import "../stylesheets/InputField.css";
import { useNavigate } from "react-router-dom";
import { LocalStorage } from "../utils/LocalStorage";
import { FaqApi } from "../api/FaqApi";
import Swal from 'sweetalert2';

function DashFAQ() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  const handleQuestionClick = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const handleQuestionDelete = async (index) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Quieres eliminar esta pregunta?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        const jwt = LocalStorage.Get("token");
        //TODO Eliminar pregunta

        Swal.fire(
            '¡Eliminado!',
            'La pregunta ha sido eliminada.',
            'success'
        );

        // Recargar las preguntas
        const faq = await FaqApi.getFaq(jwt);
        setQuestions(faq);
      } catch (error) {
        console.error("Error:", error);
        Swal.fire('Error', 'Hubo un problema al eliminar la pregunta.', 'error');
      }
    }
  };

  const clickShowModal = (type, question = null) => {
    if (type === "add") {
      setTitleModal("Agregar pregunta frecuente");
      setSelectedQuestion(null);
    } else {
      setTitleModal("Actualizar pregunta frecuente");
      setSelectedQuestion(question);
    }
    setShowModal(true);
  };

  const handleSave = async () => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: selectedQuestion ? "¿Quieres actualizar esta pregunta?" : "¿Quieres agregar esta pregunta?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, guardar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        const jwt = LocalStorage.Get("token");
        if (selectedQuestion) {
          //TODO Actualizar pregunta
        } else {
          const newQuestion = {
            question: document.querySelector('.form').value,
            answer: document.querySelector('.textarea').value
          };
          //TODO Crear nueva pregunta
        }

        Swal.fire(
            '¡Guardado!',
            selectedQuestion ? 'La pregunta ha sido actualizada.' : 'La pregunta ha sido agregada.',
            'success'
        );

        setShowModal(false);
        // Recargar las preguntas
        const faq = await FaqApi.getFaq(jwt);
        setQuestions(faq);
      } catch (error) {
        console.error("Error:", error);
        Swal.fire('Error', 'Hubo un problema al guardar la pregunta.', 'error');
      }
    }
  };

  const toggleVisibility = async (id, currentView) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: currentView ? "¿Quieres ocultar esta pregunta?" : "¿Quieres hacer visible esta pregunta?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cambiar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        const jwt = LocalStorage.Get("token");
        //TODO cambiar estado de la pregunta
        Swal.fire(
            '¡Actualizado!',
            currentView ? 'La pregunta ha sido ocultada.' : 'La pregunta es ahora visible.',
            'success'
        );

        // Recargar las preguntas
        const faq = await FaqApi.getFaq(jwt);
        setQuestions(faq);
      } catch (error) {
        console.error("Error:", error);
        Swal.fire('Error', 'Hubo un problema al actualizar la visibilidad de la pregunta.', 'error');
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const jwt = LocalStorage.Get("token");
      if (!jwt) {
        navigate("/");
        return;
      }
      try {
        const faq = await FaqApi.getFaq(jwt); //llamando a las faq
        setQuestions(faq);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [navigate]);

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
              <InputField
                  type="text"
                  label="Pregunta"
                  className="form"
                  value={selectedQuestion ? selectedQuestion.question : ""}
                  onChange={(e) => setSelectedQuestion({ ...selectedQuestion, question: e.target.value })}
              />
              <label htmlFor="myTextarea">Respuesta</label>
              <textarea
                  className="textarea"
                  rows="4"
                  cols="80"
                  value={selectedQuestion ? selectedQuestion.answer : ""}
                  onChange={(e) => setSelectedQuestion({ ...selectedQuestion, answer: e.target.value })}
              ></textarea>
              <Button variant={"primary"} children={"Guardar"} onClick={handleSave} />
            </div>
          </Modal>
          <div className="Faq">
            {questions.map((q, index) => (
                <QuestionAdmin
                    key={index}
                    id={q.id}
                    question={q.question}
                    answer={q.answer}
                    view={q.view}
                    isOpen={openQuestionIndex === index}
                    onClick={() => handleQuestionClick(index)}
                    btnUpdate={() => clickShowModal("update", q)}
                    btnDelete={() => handleQuestionDelete(index)}
                    toggleVisibility={toggleVisibility}
                />
            ))}
          </div>
        </div>
      </>
  );
}

export default DashFAQ;
