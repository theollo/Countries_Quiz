import { useEffect, useState} from "react";
import Game from "../Components/Game";
import PlayerForm from "../Components/PlayerForm";

const SERVER_URL = "http://localhost:8080";

const PlayerContainer = () => {
    
    const [players,setPlayers] = useState([]);    
    const [game,setGame] = useState([]);    
    const [reply,setReply] = useState(null);    
    const [continent,setContinent] = useState([]);    
    const [playerId,setPlayerId] = useState(null);       
      
    
const createPlayer = (newPlayerName)=> {
        fetch(`${SERVER_URL}/players`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: newPlayerName}),
        })
        .then((response) => response.json())
        .then((data) => {
            setPlayers([...players, data]);
        });
        
        }
        console.log(players);


const createNewGame = (player) => {
    fetch(`${SERVER_URL}/games?playerId=${player.Id}`, {
        //need to define newPlayerName
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentScore : newCurrentScore, maxScore : newMaxScore,
                    message : newMessage, penalty : newPenalty }),
            })
              .then((response) => response.json())
              .then((data) => {
                setReply(data.message);
              })
}
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
    



 return (
        <>
        <Game createNewGame= {createNewGame}/>
        <PlayerForm createPlayer = {createPlayer}/>
        
        
        
        </>


      );
}

 
export default PlayerContainer;