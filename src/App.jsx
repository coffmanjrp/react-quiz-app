import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="quiz-container">
        <div className="quiz-header">
          <h2>Question text</h2>
          <ul>
            <li>
              <input type="radio" name="answer" id="a" className="answer" />
              <label htmlFor="a"> Question</label>
            </li>
            <li>
              <input type="radio" name="answer" id="b" className="answer" />
              <label htmlFor="b"> Question</label>
            </li>
            <li>
              <input type="radio" name="answer" id="c" className="answer" />
              <label htmlFor="c"> Question</label>
            </li>
            <li>
              <input type="radio" name="answer" id="d" className="answer" />
              <label htmlFor="d"> Question</label>
            </li>
          </ul>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
