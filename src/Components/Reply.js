const Reply = ({ reply }) => {

// Error handling as reply starts as null when program is run.
       if (!reply) {
              return null; 
            }

  return (
    <>
      <p id="message">{reply.message}</p>
      <p id="score">SCORE: {reply.currentScore}/{reply.maxScore}</p>
      <p id="penalty">PENALTY: {reply.penalty}/5</p>
      </>
  );
};

export default Reply;
