import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";

function New(props) {
  const [score, setScore] = useState(0);
  const [value, setValue] = useState(0);

  let mainQuestions, shuffled, options, correctAnswer;
  const resetGame = () => {
    console.log("RESET GAME");
    mainQuestions = props.data;
    mainQuestions = mainQuestions.sort(() => 0.5 - Math.random());
    shuffled = mainQuestions.sort(() => 0.5 - Math.random());
    options = shuffled.slice(0, 4);
    correctAnswer = options[Math.floor(Math.random() * options.length)];
    mainQuestions = mainQuestions.filter((item) => item !== correctAnswer);
  };
  resetGame();

  const handleOnclick = (event) => {
    console.log("even --> ", event);
    if (event.target.value === correctAnswer.name) {
      setScore(score + 1);
      alert("Corect answer");
    } else {
      resetGame();
      alert("you lose ,game restarts");
      setScore(0);
    }
    setValue((value) => value + 1);
  };

  return (
    <div className="new">
      <h3>SCORE:{score}</h3>
      <img src={correctAnswer.image} alt="A flag" className="flag"></img>
      <div className="button">
        {options.map((button) => {
          return (
            <Button
              key={button.name}
              variant="contained"
              value={button.name}
              onClick={handleOnclick}
            >
              {button.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
export default New;
