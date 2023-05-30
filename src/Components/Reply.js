const Reply = ({ reply }) => {

// Error handling as reply starts as null when program is run.
       if (!reply) {
              return null; 
            }

  return (
    <>
      <p>{reply.message}?</p>
      <p>Max Score: {reply.maxScore}</p>
      <p>Penalty: {reply.penalty}</p>
      
      <p>Current Score: {reply.currentScore}</p>
    </>
  );
};

export default Reply;
