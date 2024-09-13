import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Help from './components/Help';
import Child from './components/Child';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import Over from './components/Over';
import './App.css';

function App() {
  const [score, setScore] = useState<number>(100);
  const [noOfCards, setNoOfCards] = useState<number>(16);
  const [noOfClicks, setNoOfClicks] = useState<number>(0);
  const [highestscore, setHighest] = useState<number>(0);

  function handleupdate(value: number) {
    setNoOfClicks(prev => prev + 1);
    setScore(prev => prev - value);
  }

  function updateCnt(value: number) {
    handleupdate(value);
    if (noOfCards === 0) {
      updateHighest();
    } else {
      setNoOfCards(prev => prev - 2);
    }
    console.log(noOfCards);
  }

  function updateHighest() {
    alert('Game Finished!!');
    const storedHighestScore = localStorage.getItem('highestScore');
    const currentHighestScore = storedHighestScore ? parseInt(storedHighestScore, 10) : 0;
    if (score > currentHighestScore) {
      localStorage.setItem('highestScore', score.toString());
    }
    setHighest(highestscore)
  }

  useEffect(() => {
    if (noOfCards === 0) {
      updateHighest();
    }
  }, [noOfCards]);
  useEffect(() => {
    const storedHighestScore = localStorage.getItem('highestScore');
        if (storedHighestScore) {
            setHighest(parseInt(storedHighestScore, 10));
        }
  },[]);

  return (
    <div>
      <Header scoreVal={score} />
      <Routes>
        <Route
          path='/'
          element={score > 0 ? (
            <Child updateName={handleupdate} updateCardsCnt={updateCnt} highest={highestscore} />
          ) : (
            <Over />
          )}
        />
        <Route path='/help' element={<Help />} />
      </Routes>
      <div>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          No of Selects: {noOfClicks}
        </Typography>
      </div>
    </div>
  );
}

export default App;