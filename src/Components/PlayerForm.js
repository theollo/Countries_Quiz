import { useState } from "react";
import Reply from "./Reply";

const PlayerForm = ({ createPlayer, createNewGame, reply }) => {
  const [newPlayerName, setNewPlayerName] = useState("");

  const handleChange = (event) => {
    setNewPlayerName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createNewGame(newPlayerName);
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
      <Reply reply={reply} />
    </>
  );
};

export default PlayerForm;
