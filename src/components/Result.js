import React from "react";

export default function Result({ totalQuestions, correctAnswers }) {
  // Calculate the score percentage
  const scorePercentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);

  return (
    // Render the result
    <div className="result">
      <h2>Quiz Result</h2>
      <p>Total Questions: {totalQuestions}</p>
      <p>Correct Answers: {correctAnswers}</p>
      <p>Wrong Answers: {totalQuestions - correctAnswers}</p>
      <p>Score Percentage: {scorePercentage}%</p>
      <br />
      <a className="Restart" href="/">
        Restart
      </a>
    </div>
  );
}
