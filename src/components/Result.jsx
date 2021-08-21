const Result = ({ data, score, handleReset }) => {
  return (
    <>
      <h2>
        You answered {score}/{data.length} questions correctly.
      </h2>
      <button type="button" onClick={handleReset}>
        Reload
      </button>
    </>
  );
};

export default Result;
