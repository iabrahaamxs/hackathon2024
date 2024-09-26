import { FaEye, FaEyeSlash, FaPencil, FaTrash } from "react-icons/fa6";
import "../stylesheets/Question.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

function QuestionAdmin({ question, answer, isOpen, onClick, view, btnUpdate }) {
  const [isView, setIsView] = useState(view);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <div
        className={`question-container ${isOpen ? "active" : ""}`}
        style={{ position: "static" }}
      >
        <div className={`question ${isOpen ? "active" : ""}`} onClick={onClick}>
          <h3 className={"question-text"}>{question}</h3>
          {isOpen ? (
            <FaAngleUp className="arrow" />
          ) : (
            <FaAngleDown className="arrow" />
          )}
        </div>
        {isOpen && (
          <div className={"answer"}>
            <p className={"answer-text"}>{answer}</p>
          </div>
        )}
      </div>
      <div className="actions-column" style={{ marginBottom: 20 }}>
        <button
          onClick={() => setIsView(!isView)}
          className="action-btn"
          style={{ color: "black" }}
          aria-label="Edit"
        >
          {isView ? <FaEye /> : <FaEyeSlash />}
        </button>
        <button
          onClick={btnUpdate}
          className="action-btn"
          aria-label="Edit"
          style={{ color: "black" }}
        >
          <FaPencil />
        </button>
        <button
          className="action-btn"
          aria-label="Delete"
          style={{ color: "black" }}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default QuestionAdmin;
