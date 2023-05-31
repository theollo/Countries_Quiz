import { useState, useEffect } from "react";
import Reply from "./Reply";

const SERVER_URL = "http://localhost:8080";
const PlayerForm = ({ gameStarted, resetAll, createNewGame, reply, makeAGuess}) => {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [guess, setGuess]=useState("");

  const handleChange = (event) => {
    setNewPlayerName(event.target.value);
  };
const handleGuessChange = (event)=>{
  setGuess(event.target.value);
}

const handleResetGame = (event)=>{
  event.preventDefault();
  resetAll();
}

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createNewGame(newPlayerName);
  };
  const handleGuessSumbit = (event) => {
    event.preventDefault();
    makeAGuess(guess);
  };

  return (
    <>
    {!gameStarted ?
    (<>
      <h1 id="title">Countries Quiz</h1>
      <form onSubmit={handleFormSubmit} id="username">
        <input id="userInput"
          type="text"
          name="name"
          placeholder="Enter Username"
          value={newPlayerName}
          onChange={handleChange}
        />
        <button type="submit" id="startButton">START</button> 
      </form>
      </>) : (<>
      <form id="guess">
      <input id="guessInput"
          type = "text"
          name = "guess"
          placeholder="Enter your guess"
          value = {guess}
          onChange={handleGuessChange}/>
          <button onClick={handleGuessSumbit} id="guessSubmit">GUESS</button>
      </form>
      <Reply reply={reply} /> 
      </> )}
      <button onClick = {handleResetGame} id="reset">RESET GAME</button>
    </>
  );
};

export default PlayerForm;
