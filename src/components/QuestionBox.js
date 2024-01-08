import React, { useState } from "react";
import questions from "../questions";
import Result from "./Result";

export default function QuestionBox() {
  // State variables
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Get the current question
  const currentQuestion = questions[questionIndex];

  // Handles the click event when an option is selected.
  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    if (questionIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Handles the click event on the highlight button.
  const handleHighlightClick = () => {
    setIsHighlighted(true);
  };

  // Handles the click event on the remove highlight button.
  const handleRemoveHighlightClick = () => {
    setIsHighlighted(false);
  };

  return (
    <div>
      {/* Renders the result */}
      {showResult ? (
        <Result
          totalQuestions={questions.length}
          correctAnswers={correctAnswers}
        />
      ) : (
        <div className="container">
          <h2>Questions: {`${questionIndex + 1} of ${questions.length}`}</h2>
          <div className="questions">
            <p className={isHighlighted ? "highlighted" : ""}>
              {currentQuestion.text}
            </p>
          </div>
          <div>
            {/* Renders the options */}
            {currentQuestion.options.map((option) => (
              <button
                className="option-button"
                key={option.id}
                onClick={() => handleOptionClick(option.isCorrect)}
              >
                {option.text}
              </button>
            ))}
            {/* Renders the highlight and remove highlight buttons */}
          </div>
          <button className="highlight-button1" onClick={handleHighlightClick}>
            Highlight
          </button>
          <button
            className="highlight-button2"
            onClick={handleRemoveHighlightClick}
          >
            Remove Highlight
          </button>
        </div>
      )}
    </div>
  );
}
