import React, { useEffect, useState } from 'react';
import { useFetchData } from './hooks/useFetchData';
import { URL } from './constants/constants';
import { randomizeArray } from './utils/randomize';
import { CardType } from './components/types/types';
import './App.scss';
import { Memo } from './components/memo/memo';
import { Loader } from './components/loader/loader';

function App() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [refetch, setRefetch] = useState(0)
  const { data, isLoading, error } = useFetchData(URL, refetch);

  useEffect(() => {
    if (data) {
      const shuffledCatImages: CardType[] = randomizeArray([...data, ...data]);
      setCards(shuffledCatImages)
    }
  }, [data]);

  const resetGame = () => {
    setRefetch(prevRefetch => ++prevRefetch);
  }

  return (
    <div className="App">
      <header>
        <h1>Memo game</h1>
      </header>
      {isLoading && <Loader />}
      {error && <h1>{`The cats don't give a damn. Sorry. ${error}`}</h1>}
      <Memo cards={cards} resetGame={resetGame}/>
    </div>
  );
}

export default App;

// tempting as using context here would be, the react docs are quite explicit 
// about usecases not enough complex to resort to this solution 🤷‍♀️
// https://react.dev/learn/passing-data-deeply-with-context#before-you-use-context