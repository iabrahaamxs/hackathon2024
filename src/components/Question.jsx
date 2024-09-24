import '../stylesheets/Question.css'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function Question({ question, answer, isOpen, onClick }) {

  return (
      <div className={`question-container ${isOpen ? 'active' : ''}`}>
        <div className={`question ${isOpen ? 'active' : ''}`} onClick={onClick}>
          <h3 className={'question-text'}>{question}</h3>
          {isOpen ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
        </div>
        {isOpen && (
            <div className={'answer'}>
              <p className={'answer-text'}>{answer}</p>
            </div>
        )}
      </div>
  );
}

export default Question;