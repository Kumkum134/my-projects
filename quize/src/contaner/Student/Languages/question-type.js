import React, { useState, useEffect } from "react";
import { ChashQuestions, CPlusPlusQuestions, CQuestions, CssQuestions, ExpressQuestions, HQuestion, JavaQuestions, JavaScriptQuestion, KotlinQuestions, MongoDBQuestions, MySQLQuestions, NodeQuestions, PHPQuestions, PythonQuestions, ReactQuestion, SwiftQuestions } from "./data";

const QuestionPage = ({ questionList, questionId, onOptionClick, selectedOption, onNext }) => {
  const question = questionList.find((q) => q.id === questionId);
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (timeLeft > 0 && selectedOption === "") {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 59999);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      onNext();
    }
  }, [timeLeft, selectedOption, onNext]);

  if (!question) {
    return <div>Question not found!</div>;
  }

  return (
    <div className="question-container">
      <h1>Q {questionId}: {question.question}</h1>
      <div className="timer">Time Left: {timeLeft}m</div>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${selectedOption === option ? "selected" : ""}`}
            onClick={() => onOptionClick(option, question.answer)}
            disabled={selectedOption !== ""}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="navigation-buttons"> 
        <button onClick={onNext}>
          {questionId === questionList.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export const CHashPages = (props) => <QuestionPage questionList={ChashQuestions} {...props} />;
export const CPages = (props) => <QuestionPage questionList={CQuestions} {...props} />;
export const CPlusPages = (props) => <QuestionPage questionList={CPlusPlusQuestions} {...props} />;
export const CssPages = (props) => <QuestionPage questionList={CssQuestions} {...props} />;
export const Expresspagess = (props) => <QuestionPage questionList={ExpressQuestions} {...props} />;
export const Htmlpages = (props) => <QuestionPage questionList={HQuestion} {...props} />;
export const Javapages = (props) => <QuestionPage questionList={JavaQuestions} {...props} />;
export const Javascripts = (props) => <QuestionPage questionList={JavaScriptQuestion} {...props} />;
export const Kotlinpages = (props) => <QuestionPage questionList={KotlinQuestions} {...props} />;
export const MongoDBpages = (props) => <QuestionPage questionList={MongoDBQuestions} {...props} />;
export const MySQLpages = (props) => <QuestionPage questionList={MySQLQuestions} {...props} />;
export const Nodepages = (props) => <QuestionPage questionList={NodeQuestions} {...props} />;
export const PHPpages = (props) => <QuestionPage questionList={PHPQuestions} {...props} />;
export const Reactpages = (props) => <QuestionPage questionList={ReactQuestion} {...props} />;
export const Pythonpages = (props) => <QuestionPage questionList={PythonQuestions} {...props} />;
export const Swiftpages = (props) => <QuestionPage questionList={SwiftQuestions} {...props} />;
