import { useState } from "react";
import Reply from "./Reply";

const PlayerForm = ({ createPlayer, createNewGame, reply,makeAGuess}) => {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [guess, setGuess]=useState("");

  const handleChange = (event) => {
    setNewPlayerName(event.target.value);
  };
const handleGuessChange = (event)=>{
  setGuess(event.target.value);
}

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createNewGame(newPlayerName);
  };
  const handleGuess = (event) => {
    event.preventDefault();
    makeAGuess(guess);
  };
  


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
      <form onSubmit={handleGuess}>
      <input
          type = "text"
          name = "guess"
          placeholder="Enter your guess"
          value = {guess}
          onChange={handleGuessChange}/>
          <button type="submit">Submit your guess</button>
      </form>
      <Reply reply={reply} />
    </>
  );
};

export default PlayerForm;
