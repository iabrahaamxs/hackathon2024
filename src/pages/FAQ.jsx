import '../stylesheets/Home.css'
import Button from "../assets/Button.jsx";
import Question from "../assets/Question.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Faq = () => {

  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const questions = [
    { question: 'Pregunta 1', answer: 'Respuesta 1'},
    { question: 'Pregunta 2', answer: 'Respuesta 2'},
    { question: 'Pregunta 3', answer: 'Respuesta 3'},
    { question: 'Pregunta 4', answer: 'Respuesta 4'},
    { question: 'Pregunta 5', answer: 'Respuesta 5'}
  ];

  return (

      <div className='Faq'>
        <div className={"center"}><h1>Preguntas frecuentes</h1></div>
          {questions.map((q, index) => (
            <Question
                key={index}
                question={q.question}
                answer={q.answer}
                isOpen={openQuestionIndex === index}
                onClick={() => handleQuestionClick(index)}
            />
        ))}
      </div>
  );
}

export default function FAQ() {
  const navigate = useNavigate();
  return (
      <div className={'home'}>
        <div className={'welcome'}>
          <h1>Llevando salud a los más necesitados</h1>
          <div className={'center'}><img
              src="https://www.nicepng.com/png/detail/204-2049937_logo-de-farmacia-png.png"
              alt=""/>
          </div>
          <div className={"center"}>
            <Button
                variant={"primary"}
                children={"Volver"}
                onClick={() =>  navigate('/')}
            /></div>
        </div>
        <div className={'container faq'}>
          <Faq />
        </div>
      </div>
  );
}
