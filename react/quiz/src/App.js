import logo from './logo.svg';
import quizQuestions from './resources/QuizData'
import './App.css';
import Question from './components/Question';
import Result from './components/Result';

function App() {
  return (
    <>
      <Question question={quizQuestions[0]}/>
      <Question question={quizQuestions[1]}/>
    </>
  );
}

export default App;
