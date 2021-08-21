import { useState } from 'react';
import Question from './components/Question';
import Result from './components/Result';
import quizData from './data/quizData';
import './App.scss';

function App() {
  const [data] = useState(quizData);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);

  const handleQuiz = () => {
    if (answer === data[index].correct) setScore((score) => score + 1);
    if (index < data.length) setIndex((prev) => prev + 1);
    setAnswer('');
  };

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleReset = () => {
    setIndex(0);
    setAnswer('');
    setScore(0);
  };

  return (
    <div className="App">
      <div className="quiz-container">
        {index >= data.length ? (
          <Result data={data} score={score} handleReset={handleReset} />
        ) : (
          <Question
            data={data}
            index={index}
            answer={answer}
            handleChange={handleChange}
            handleQuiz={handleQuiz}
          />
        )}
      </div>
    </div>
  );
}

export default App;
