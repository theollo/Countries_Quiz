import { useState, useEffect } from "react";
import Reply from "./Reply";

const SERVER_URL = "http://localhost:8080";
const PlayerForm = ({ resetAll, resetGame, resetPlayer, createNewGame, reply, makeAGuess}) => {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [guess, setGuess]=useState("");
  const [gameReset, setGameReset] = useState(false)

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
//   const resetPlayer = () =>{
//    fetch(`${SERVER_URL}/players/1`,{
//     method:"DELETE",
//     headers:{"Content-Type": "application/json"}
//   })
// }
//   const resetGame = () =>{
//    fetch(`${SERVER_URL}/games/1`,{
//     method:"DELETE",
//     headers:{"Content-Type": "application/json"}
//   })
// }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Username"
          value={newPlayerName}
          onChange={handleChange}
        />
        <button type="submit">Create new player</button> 
      </form>
      <form>
      <input
          type = "text"
          name = "guess"
          placeholder="Enter your guess"
          value = {guess}
          onChange={handleGuessChange}/>
          <button onClick = {handleResetGame}>Reset Game</button>
          <button onClick={handleGuessSumbit}>Submit your guess</button>
        
      </form>
      <Reply reply={reply} />
    </>
  );
};

export default PlayerForm;
