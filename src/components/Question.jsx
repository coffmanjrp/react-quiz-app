const Question = ({ data, index, answer, handleChange, handleQuiz }) => {
  const { question, a, b, c, d } = data[index];

  return (
    <>
      <div className="quiz-header">
        <h2>{question}</h2>
        <ul>
          <li>
            <input
              type="radio"
              name="answer"
              id="a"
              className="answer"
              value="a"
              onChange={(e) => handleChange(e)}
              checked={answer === 'a'}
            />
            <label htmlFor="a"> {a}</label>
          </li>
          <li>
            <input
              type="radio"
              name="answer"
              id="b"
              className="answer"
              value="b"
              onChange={(e) => handleChange(e)}
              checked={answer === 'b'}
            />
            <label htmlFor="b"> {b}</label>
          </li>
          <li>
            <input
              type="radio"
              name="answer"
              id="c"
              className="answer"
              value="c"
              onChange={(e) => handleChange(e)}
              checked={answer === 'c'}
            />
            <label htmlFor="c"> {c}</label>
          </li>
          <li>
            <input
              type="radio"
              name="answer"
              id="d"
              className="answer"
              value="d"
              onChange={(e) => handleChange(e)}
              checked={answer === 'd'}
            />
            <label htmlFor="d"> {d}</label>
          </li>
        </ul>
      </div>
      <button type="button" onClick={handleQuiz}>
        Submit
      </button>
    </>
  );
};

export default Question;
