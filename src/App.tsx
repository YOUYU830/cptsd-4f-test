import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { QuestionnairePage } from './components/QuestionnairePage';
import { ResultPage } from './components/ResultPage';
import type { Page } from './types';
import type { ResponseType } from './data/questionnaire';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [scores, setScores] = useState<Record<ResponseType, number>>({
    fight: 0,
    flight: 0,
    freeze: 0,
    fawn: 0
  });

  const handleStart = () => {
    setCurrentPage('questionnaire');
  };

  const handleComplete = (finalScores: Record<ResponseType, number>) => {
    setScores(finalScores);
    setCurrentPage('result');
  };

  const handleRestart = () => {
    setScores({
      fight: 0,
      flight: 0,
      freeze: 0,
      fawn: 0
    });
    setCurrentPage('home');
  };

  return (
    <>
      {currentPage === 'home' && <HomePage onStart={handleStart} />}
      {currentPage === 'questionnaire' && <QuestionnairePage onComplete={handleComplete} />}
      {currentPage === 'result' && <ResultPage scores={scores} onRestart={handleRestart} />}
    </>
  );
}

export default App;
