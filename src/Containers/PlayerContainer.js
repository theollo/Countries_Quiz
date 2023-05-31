import { useEffect, useState } from "react";
import Game from "../Components/Game";
import PlayerForm from "../Components/PlayerForm";

const SERVER_URL = "http://localhost:8080";

const PlayerContainer = () => {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});
  const [game, setGame] = useState({});
  const [reply, setReply] = useState(null);
  const [continent, setContinent] = useState([]);
  const [playerId, setPlayerId] = useState(null);
  const [games, setGames] = useState([])

  const getAllPlayers = async () =>{
    const response = await fetch(`${SERVER_URL}/players`)
    const allPlayers = await response.json();
    const currentPlayer = allPlayers[0];
    setPlayer(currentPlayer);
  }
  const getLatestGame = async () =>{
    const response = await fetch(`${SERVER_URL}/games`)
    const allGames = await response.json();
    const currentGame = allGames[0];
    setGame(currentGame);
  }

//   const resetPlayer = () =>{
//    fetch(`${SERVER_URL}/players/${player.id}`,{
//     method:"DELETE",
//     headers:{"Content-Type": "application/json"}
//   })
// }
//   const resetGame = () =>{
//    fetch(`${SERVER_URL}/games/${game.id}`,{
//     method:"DELETE",
//     headers:{"Content-Type": "application/json"}
//   })
// }

const resetAll = async() => {
    await fetch(`${SERVER_URL}/games/${game.id}`,{
     method:"DELETE",
     headers:{"Content-Type": "application/json"}
   })
 
    await fetch (`${SERVER_URL}/players/${player.id}`,{
    method:"DELETE",
    headers:{"Content-Type": "application/json"}
  })
}


  const makeAGuess = async (guess) => {
    const response = await fetch(`${SERVER_URL}/games/${game.id}`,{
    method : "PUT",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({countryName: guess})
  })
  console.log(JSON.stringify({countryName: guess}))
  const guessData = await response.json();
  setReply(guessData);
  }

  const createNewGame = async (newPlayerName) => {
      // Step 1: Create a new player
      const createNewPlayer = await fetch(`${SERVER_URL}/players`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newPlayerName }),
      });      
      const player = await createNewPlayer.json();
      
      // Step 2: Create a new game for the player
      const createGameResponse = await fetch(
        `${SERVER_URL}/games?playerId=${player.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        }
      );
      const replyObj = await createGameResponse.json();
      setReply(replyObj);
      const updatedPlayerResponse = await fetch(
        `${SERVER_URL}/players/${player.id}`
      )
      const updatedPlayer = await updatedPlayerResponse.json();
      setPlayers([...players,updatedPlayer])
      console.log(replyObj);
  };

  useEffect(()=> {
      getAllPlayers();
     getLatestGame();
  }, [players])

  return (
    <>
      <Game createNewGame={createNewGame} />
      <PlayerForm
        createNewGame={createNewGame}
        // resetGame = {resetGame}
        // resetPlayer = {resetPlayer}
        reply={reply}
        resetAll={resetAll}
        makeAGuess = {makeAGuess}
      />
    </>
  );
};

export default PlayerContainer;
  // console.log(players);

  // const createNewGame = (player) => {
  //     fetch(`${SERVER_URL}/games?playerId=${player.Id}`, {
  //         //need to define newPlayerName
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ currentScore : newCurrentScore, maxScore : newMaxScore,
  //                     message : newMessage, penalty : newPenalty }),
  //             })
  //               .then((response) => response.json())
  //               .then((data) => {
  //                 setReply(data.message);
  //               })
  // }
  //  const guessCountry = (newGuessCountry)=> {
  //         fetch(`${SERVER_URL}/countries`,{
  //                 method: "PUT",
  //                 headers: {"Content-Type": "application/json"},
  //                 body: JSON.stringify({name: newGuessCountry)),
  //             })
  //             .then((response) => response.json())
  //             .then((data) => {
  //                 setPlayers([...players, data]);
  //             });
  //             }
  // const createPlayer = (newPlayerName) => {
  //   fetch(`${SERVER_URL}/players`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ name: newPlayerName }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPlayers([...players, data]);
  //     });
  // };