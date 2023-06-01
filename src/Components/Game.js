import { useState } from "react";


const Game = ({game}) => {
    const [newMaxScore, setNewMaxScore]= useState([]);
    const [newCurrentScore, setNewCurrentScore]= useState([]);
    const [newMessage, setNewMessage]= useState([]);
    const [newPenalty, setNewPenalty]= useState([]);

    const gameComponents = game.guesses.map((guess) => {
      return <li>{guess.countryName}</li>;
    });
    //.filter((guesses) => {
      //   if(game.guesses==true) {
      //     return guesses}
      //   })

    return (
          <>
        {/* <h1>{playerComponents}</h1> */}
            <div id="guessed">
              <p>GUESSED</p>
              <ul>
                <li>{gameComponents}</li>
              </ul>
              
            </div>
            <div id="notGuessed">
              <p>NOT GUESSED</p>
              <ul>
                <li>This is the li</li>
              </ul>
            </div>
        
        

        
        </>
      );
}

export default Game;