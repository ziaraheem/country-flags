import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useState } from "react";

function Quiz(props) {
  const [score, setScore] = useState(0);
  let answers = [];

  let mainQuestions = props.data;
  let correctAnswer = null;

  useEffect(() => {
    correctAnswer = mainQuestions[0];
    answers.push(mainQuestions[0]);

    mainQuestions = mainQuestions.shift();

    for (let i = 0; i <= 2; i++) {
      answers.push(
        mainQuestions[Math.floor(Math.random() * mainQuestions.length)]
      );
    }

    answers = answers.sort(() => Math.random() - 0.5);
  }, []);

  const handleOnclick = (event) => {
    if (event.target.value.name === correctAnswer.name) {
      alert("corect answer");
      setScore(score + 1);
    } else {
      alert("wrong answer");
      setScore(0);
    }
  };
  return (
    <div className="quiz">
      <h3>score:{score}</h3>
      {correctAnswer ? (
        <img src={correctAnswer.image} className="flag"></img>
      ) : (
        <p>loading...</p>
      )}
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        {answers.map((button) => {
          return (
            <Button variant="contained" value={button} onClick={handleOnclick}>
              {button.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default Quiz;
