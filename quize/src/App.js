import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage, { LogoAnimation } from './contaner/Main-Page';
import SignUp, { Login } from './contaner/Teacher/signup';
import SSignUp, { SLogin } from './contaner/Student/signup-login';
import Homee from './contaner/Teacher/home';
import Create from './contaner/Teacher/create-quiz';
import CPage, { CHashPage, CPlusPage, CssPage, Expresspages, HtmlPags, JavaPage, JavascriptPage, KotlinPage, MongoPage, MySqlPage, NodePage, PHPPage, PythonPage, ReactPage, SwiftPage } from './contaner/Teacher/Langusges/language-quiz';
import Profile, { ProfileSummary, TeacherEdit } from './contaner/Teacher/Profile';
import CreateList from './contaner/Teacher/create-list';
import Home from './contaner/Student/home';
import Quiz from './contaner/Student/quiz';
import { CHashPages, CPages, CPlusPages, CssPages, Expresspagess, Htmlpages, Javapages, Javascripts, Kotlinpages, MongoDBpages, MySQLpages, Nodepages, PHPpages, Pythonpages, Reactpages, Swiftpages } from "./contaner/Student/Languages/question-type";
import { HQuestion, CssQuestions, JavaScriptQuestion, ReactQuestion, NodeQuestions, ExpressQuestions, MongoDBQuestions, MySQLQuestions, PHPQuestions, PythonQuestions, CQuestions, CPlusPlusQuestions, ChashQuestions, JavaQuestions, KotlinQuestions, SwiftQuestions } from './contaner/Student/Languages/data';
import { CExplanationPage, CHashExplanationPage, CPlusPlusExplanationPage, CssExplanationPage, ExpressExplanationPage, HtmlExplanationPage, JavaExplanationPage, JavaScriptExplanationPage, KotlinExplanationPage, MongoDBExplanationPage, MySQLExplanationPage, NodeExplanationPage, PHPExplanationPage, PythonExplanationPage, ReactExplanationPage, SwiftExplanationPage } from './contaner/Student/Languages/explanation';
import Blogs, { About, Services } from './contaner/Student/other-pages';
import SProfiles, { SProfileSummary, StudentEdit } from './contaner/Student/Profile'
import './App.css';

function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);


  const handleOptionClick = (option, correctAnswer) => {
    setSelectedOption(option);
    setShowExplanation(true);

    if (option === correctAnswer) {
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
  };

  const handleNextQuestion = (currentQuestionSet) => {
    if (currentQuestionId < currentQuestionSet.length) {
      setCurrentQuestionId((prev) => prev + 1);
      setSelectedOption("");
      setShowExplanation(false);
    }
    else {
      setQuizFinished(true);
    }
  };

  const resetQuizProgress = () => {
    console.log("Resetting quiz...");
    setCurrentQuestionId(1);
    setScore({ correct: 0, incorrect: 0 });
    setQuizFinished(false);
  };


  const resetQuizTotal = () => {
    setCurrentQuestionId(1);
    setSelectedOption("");
    setShowExplanation(false);
    setScore({ correct: 0, incorrect: 0 });
    setQuizFinished(false);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LogoAnimation />} />
          <Route path="/main" element={<MainPage />} />
          <Route path='/TSignup' element={<SignUp />} />
          <Route path='/SSignup' element={<SSignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/SLogin' element={<SLogin />} />
          <Route path='/Home' element={<Homee />} >
            <Route path='create-quiz' element={<Create />}>
              <Route path='c' element={<CPage />} />
              <Route path='chash' element={<CHashPage />} />
              <Route path='c++' element={<CPlusPage />} />
              <Route path='css' element={<CssPage />} />
              <Route path='express' element={<Expresspages />} />
              <Route path='html' element={<HtmlPags />} />
              <Route path='java' element={<JavaPage />} />
              <Route path='js' element={<JavascriptPage />} />
              <Route path='kotlin' element={<KotlinPage />} />
              <Route path='mongodb' element={<MongoPage />} />
              <Route path='mysql' element={<MySqlPage />} />
              <Route path='node' element={<NodePage />} />
              <Route path='php' element={<PHPPage />} />
              <Route path='python' element={<PythonPage />} />
              <Route path='react' element={<ReactPage />} />
              <Route path='swift' element={<SwiftPage />} />
            </Route>
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='/TEdit' element={<TeacherEdit />} />
          <Route path='TEdit/profile-summary' element={<ProfileSummary />} />
          <Route path='/TCreate' element={<CreateList />} />
          <Route path="/SHome" element={<Home />} >
            <Route path="quiz" element={<Quiz />}>
              <Route path='c' element={
                !quizFinished ? (
                  <><CPages questionId={currentQuestionId} onOptionClick={handleOptionClick} selectedOption={selectedOption} onNext={() => handleNextQuestion(CQuestions)} resetQuiz={resetQuizProgress} />
                    <CExplanationPage questionId={currentQuestionId} selectedOption={selectedOption} showExplanation={showExplanation} /> </>
                ) : (<div className="quiz-result">
                  <h2>Quiz Finished</h2>
                  <article>Your quiz has been submitted!</article>
                  <article>Score Card</article>
                  <div className='scard'>
                    <p className='p1'>Questions Attempted: {currentQuestionId}</p>
                    <p className='p2'>Correct Answers: {score.correct}</p>
                    <p className='p3'>Incorrect Answers: {score.incorrect}</p>
                  </div>
                  <button onClick={resetQuizTotal}>Restart Quiz</button>
                </div>
                )} />
              <Route path='Chash' element={
                !quizFinished ? (
                  <><CHashPages questionId={currentQuestionId} onOptionClick={handleOptionClick} selectedOption={selectedOption} onNext={() => handleNextQuestion(ChashQuestions)} resetQuiz={resetQuizProgress} />
                    <CHashExplanationPage questionId={currentQuestionId} selectedOption={selectedOption} showExplanation={showExplanation} /> </>
                ) : (<div className="quiz-result">
                  <h2>Quiz Finished</h2>
                  <article>Your quiz has been submitted!</article>
                  <article>Score Card</article>
                  <div className='scard'>
                    <p className='p1'>Questions Attempted: {currentQuestionId}</p>
                    <p className='p2'>Correct Answers: {score.correct}</p>
                    <p className='p3'>Incorrect Answers: {score.incorrect}</p>
                  </div>
                  <button onClick={resetQuizTotal}>Restart Quiz</button>
                </div>
                )} />
              <Route path='c++' element={
                !quizFinished ? (
                  <><CPlusPages questionId={currentQuestionId} onOptionClick={handleOptionClick} selectedOption={selectedOption} onNext={() => handleNextQuestion(CPlusPlusQuestions)} resetQuiz={resetQuizProgress} />
                    <CPlusPlusExplanationPage questionId={currentQuestionId} selectedOption={selectedOption} showExplanation={showExplanation} /> </>
                ) : (<div className="quiz-result">
                  <h2>Quiz Finished</h2>
                  <article>Your quiz has been submitted!</article>
                  <article>Score Card</article>
                  <div className='scard'>
                    <p className='p1'>Questions Attempted: {currentQuestionId}</p>
                    <p className='p2'>Correct Answers: {score.correct}</p>
                    <p className='p3'>Incorrect Answers: {score.incorrect}</p>
                  </div>
                  <button onClick={resetQuizTotal}>Restart Quiz</button>
                </div>
                )} />
              <Route path='css' element={
                !quizFinished ? (
                  <><CssPages questionId={currentQuestionId} onOptionClick={handleOptionClick} selectedOption={selectedOption} onNext={() => handleNextQuestion(CssQuestions)} resetQuiz={resetQuizProgress} />
                    <CssExplanationPage questionId={currentQuestionId} selectedOption={selectedOption} showExplanation={showExplanation} /></>
                ) : (<div className="quiz-result">
                  <h2>Quiz Finished</h2>
                  <article>Your quiz has been submitted!</article>
                  <article>Score Card</article>
                  <div className='scard'>
                    <p className='p1'>Questions Attempted: {currentQuestionId}</p>
                    <p className='p2'>Correct Answers: {score.correct}</p>
                    <p className='p3'>Incorrect Answers: {score.incorrect}</p>
                  </div>
                  <button onClick={resetQuizTotal}>Restart Quiz</button>
                </div>
                )} />
              <Route path='express' element={
                !quizFinished ? (
                  <><Expresspagess questionId={currentQuestionId} onOptionClick={handleOptionClick} selectedOption={selectedOption} onNext={() => handleNextQuestion(ExpressQuestions)} resetQuiz={resetQuizProgress} />
                    <ExpressExplanationPage questionId={currentQuestionId} selectedOption={selectedOption} showExplanation={showExplanation} /> </>
                ) : (<div className="quiz-result">
                  <h2>Quiz Finished</h2>
                  <article>Your quiz has been submitted!</article>
                  <article>Score Card</article>
                  <div className='scard'>
                    <p className='p1'>Questions Attempted: {currentQuestionId}</p>
                    <p className='p2'>Correct Answers: {score.correct}</p>
                    <p className='p3'>Incorrect Answers: {score.incorrect}</p>
                  </div>
                  <button onClick={resetQuizTotal}>Restart Quiz</button>
                </div>
                )} />
              <Route path="html" element={
                !quizFinished ? (
                  <><Htmlpages questionId={currentQuestionId} onOptionClick={handleOptionClick} selectedOption={selectedOption} onNext={() => handleNextQuestion(HQuestion)} resetQuiz={resetQuizProgress} />
                    <HtmlExplanationPage questionId={currentQuestionId} selectedOption={selectedOption} showExplanation={showExplanation} /> </>
                ) : (<div className="quiz-result">
                  <h2>Quiz Finished</h2>
                  <article>Your quiz has been submitted!</article>
                  <article>Score Card</article>
                  <div className='scard'>
                    <p className='p1'>Questions Attempted: {currentQuestionId}</p>
                    <p className='p2'>Correct Answers: {score.correct}</p>
                    <p className='p3'>Incorrect Answers: {score.incorrect}</p>
                  </div>
                  <button onClick={resetQuizTotal}>Restart Quiz</button>
                </div>
                )} />
              <Route path='java' element={
                !quizFinished ? (
                  <><Javapages questionId={currentQuestionId} onOptionClick={handleOptionClick} selectedOption={selectedOption} onNext={() => handleNextQuestion(JavaQuestions)} resetQuiz={resetQuizProgress} />
                    <JavaExplanationPage questionId={currentQuestionId} selectedOption={selectedOption} showExplanation={showExplanation} /> </>
                ) : (<div className="quiz-result">
                  <h2>Quiz Finished</h2>
                  <article>Your quiz has been submitted!</article>
                  <article>Score Card</article>
                  <div className='scard'>
                    <p className='p1'>Questions Attempted: {currentQuestionId}</p>
                    <p className='p2'>Correct Answers: {score.correct}</p>
                    <p className='p3'>Incorrect Answers: {score.incorrect}</p>
                  </div>
                  <button onClick={resetQuizTotal}>Restart Quiz</button>
                </div>
                )} />
              <Route path="js" element={
                !quizFinished ? (
                  <><Javascripts questionId={currentQuestionId} onOptionClick={handleOptionClick} selectedOption={selectedOption} onNext={() => handleNextQuestion(JavaScriptQuestion)} resetQuiz={resetQuizProgress} />
                    <JavaScriptExplanationPage questionId={currentQuestionId} selectedOption={selectedOption} showExplanation={showExplanation} /> </>
                ) : (<div className="quiz-result">
                  <h2>Quiz Finished</h2>
                  <article>Your quiz has been submitted!</article>
                  <article>Score Card</article>
                  <div className='scard'>
                    <p className='p1'>Questions Attempted: {currentQuestionId}</p>
                    <p className='p2'>Correct Answers: {score.correct}</p>
                    <p className='p3'>Incorrect Answers: {score.incorrect}</p>
                  </div>
                  <button onClick={resetQuizTotal}>Restart Quiz</button>
                </div>
                )
              } />
              <Route path='kotlin' element={
                !quizFinished ? (
                  <><Kotlinpages questionId={currentQuestionId} onOptionClick={handleOptionClick} selectedOption={selectedOption} onNext={() => handleNextQuestion(KotlinQuestions)} resetQuiz={resetQuizProgress} />
                    <KotlinExplanationPage questionId={currentQuestionId} selectedOption={selectedOption} showExplanation={showExplanation} /> </>
                ) : (<div className="quiz-result">
                  <h2>Quiz Finished</h2>
                  <article>Your quiz has been submitted!</article>
                  <article>Score Card</article>
                  <div className='scard'>
                    <p className='p1'>Questions Attempted: {currentQuestionId}</p>
                    <p className='p2'>Correct Answers: {score.correct}</p>
                    <p className='p3'>Incorrect Answers: {score.incorrect}</p>
                  </div>
                  <button onClick={resetQuizTotal}>Restart Quiz</button>
                </div>
                )} />
              <Route path='mongodb' element={
                !quizFinished ? (
                  <><MongoDBpages questionId={currentQuestionId} onOptionClick={handleOptionClick} selectedOption={selectedOption} onNext={() => handleNextQuestion(MongoDBQuestions)} resetQuiz={resetQuizProgress} />
                    <MongoDBExplanationPage questionId={currentQuestionId} selectedOption={selectedOption} showExplanation={showExplanation} /></>
                ) : (<div className="quiz-result">
                  <h2>Quiz Finished</h2>
                  <article>Your quiz has been submitted!</article>
                  <article>Score Card</article>
                  <div className='scard'>
                    <p className='p1'>Questions Attempted: {currentQuestionId}</p>
                    <p className='p2'>Correct Answers: {score.correct}</p>
                    <p className='p3'>Incorrect Answers: {score.incorrect}</p>
                  </div>
                  <button onClick={resetQuizTotal}>Restart Quiz</button>
                </div>
                )} />
              <Route path='mysql' element={
                !quizFinished ? (
                  <><MySQLpages questionId={currentQuestionId} onOptionClick={handleOptionClick} selectedOption={selectedOption} onNext={() => handleNextQuestion(MySQLQuestions)} resetQuiz={resetQuizProgress} />
                    <MySQLExplanationPage questionId={currentQuestionId} selectedOption={selectedOption} showExplanation={showExplanation} /></>
                ) : (<div className="quiz-result">
                  <h2>Quiz Finished</h2>
                  <article>Your quiz has been submitted!</article>
                  <article>Score Card</article>
                  <div className='scard'>
                    <p className='p1'>Questions Attempted: {currentQuestionId}</p>
                    <p className='p2'>Correct Answers: {score.correct}</p>
                    <p className='p3'>Incorrect Answers: {score.incorrect}</p>
                  </div>
                  <button onClick={resetQuizTotal}>Restart Quiz</button>
                </div>
                )} />
              <Route path='node' element={
                !quizFinished ? (
                  <><Nodepages questionId={currentQuestionId} onOptionClick={handleOptionClick} selectedOption={selectedOption} onNext={() => handleNextQuestion(NodeQuestions)} resetQuiz={resetQuizProgress} />
                    <NodeExplanationPage questionId={currentQuestionId} selectedOption={selectedOption} showExplanation={showExplanation} /></>
                ) : (<div className="quiz-result">
                  <h2>Quiz Finished</h2>
                  <article>Your quiz has been submitted!</article>
                  <article>Score Card</article>
                  <div className='scard'>
                    <p className='p1'>Questions Attempted: {currentQuestionId}</p>
                    <p className='p2'>Correct Answers: {score.correct}</p>
                    <p className='p3'>Incorrect Answers: {score.incorrect}</p>
                  </div>
                  <button onClick={resetQuizTotal}>Restart Quiz</button>
                </div>
                )} />
              <Route path='php' element={
                !quizFinished ? (
                  <><PHPpages questionId={currentQuestionId} onOptionClick={handleOptionClick} selectedOption={selectedOption} onNext={() => handleNextQuestion(PHPQuestions)} resetQuiz={resetQuizProgress} />
                    <PHPExplanationPage questionId={currentQuestionId} selectedOption={selectedOption} showExplanation={showExplanation} /></>
                ) : (<div className="quiz-result">
                  <h2>Quiz Finished</h2>
                  <article>Your quiz has been submitted!</article>
                  <article>Score Card</article>
                  <div className='scard'>
                    <p className='p1'>Questions Attempted: {currentQuestionId}</p>
                    <p className='p2'>Correct Answers: {score.correct}</p>
                    <p className='p3'>Incorrect Answers: {score.incorrect}</p>
                  </div>
                  <button onClick={resetQuizTotal}>Restart Quiz</button>
                </div>
                )} />
              <Route path='python' element={
                !quizFinished ? (
                  <><Pythonpages questionId={currentQuestionId} onOptionClick={handleOptionClick} selectedOption={selectedOption} onNext={() => handleNextQuestion(PythonQuestions)} resetQuiz={resetQuizProgress} />
                    <PythonExplanationPage questionId={currentQuestionId} selectedOption={selectedOption} showExplanation={showExplanation} /></>
                ) : (<div className="quiz-result">
                  <h2>Quiz Finished</h2>
                  <article>Your quiz has been submitted!</article>
                  <article>Score Card</article>
                  <div className='scard'>
                    <p className='p1'>Questions Attempted: {currentQuestionId}</p>
                    <p className='p2'>Correct Answers: {score.correct}</p>
                    <p className='p3'>Incorrect Answers: {score.incorrect}</p>
                  </div>
                  <button onClick={resetQuizTotal}>Restart Quiz</button>
                </div>
                )
              } />
              <Route path='react' element={
                !quizFinished ? (
                  <><Reactpages questionId={currentQuestionId} onOptionClick={handleOptionClick} selectedOption={selectedOption} onNext={() => handleNextQuestion(ReactQuestion)} resetQuiz={resetQuizProgress} />
                    <ReactExplanationPage questionId={currentQuestionId} selectedOption={selectedOption} showExplanation={showExplanation} /></>
                ) : (<div className="quiz-result">
                  <h2>Quiz Finished</h2>
                  <article>Your quiz has been submitted!</article>
                  <article>Score Card</article>
                  <div className='scard'>
                    <p className='p1'>Questions Attempted: {currentQuestionId}</p>
                    <p className='p2'>Correct Answers: {score.correct}</p>
                    <p className='p3'>Incorrect Answers: {score.incorrect}</p>
                  </div>
                  <button onClick={resetQuizTotal}>Restart Quiz</button>
                </div>
                )} />
              <Route path='swift' element={
                !quizFinished ? (
                  <><Swiftpages questionId={currentQuestionId} onOptionClick={handleOptionClick} selectedOption={selectedOption} onNext={() => handleNextQuestion(SwiftQuestions)} resetQuiz={resetQuizProgress} />
                    <SwiftExplanationPage questionId={currentQuestionId} selectedOption={selectedOption} showExplanation={showExplanation} /></>
                ) : (<div className="quiz-result">
                  <h2>Quiz Finished</h2>
                  <article>Your quiz has been submitted!</article>
                  <article>Score Card</article>
                  <div className='scard'>
                    <p className='p1'>Questions Attempted: {currentQuestionId}</p>
                    <p className='p2'>Correct Answers: {score.correct}</p>
                    <p className='p3'>Incorrect Answers: {score.incorrect}</p>
                  </div>
                  <button onClick={resetQuizTotal}>Restart Quiz</button>
                </div>
                )} />
            </Route>
            <Route path="blog" element={<Blogs />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path='SProfile' element={<SProfiles />} />
          </Route>
          <Route path='/SEdit' element={<StudentEdit />} />
          <Route path='SEdit/Sprofile-summary' element={<SProfileSummary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;