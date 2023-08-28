import { useEffect, useState } from 'react';
import { useFetchData } from './hooks/useFetchData';
import { URL } from './constants/constants';
import { randomizeArray } from './utils/randomize';
import { CardType } from './components/types/types';
import './memo-game.scss';
import { Memo } from './components/memo/memo';
import { Loader } from './components/loader/loader';

function MemoGame() {
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
    <div className="memo-game">
      <header>
        <h1>Memo Cat</h1>
      </header>
      {isLoading && <Loader />}
      {error && <h1>{`The cats don't give a damn. Sorry. ${error === 'string' ? error : ''}`}</h1>}
      <Memo cards={cards} resetGame={resetGame}/>
      <footer>
        <p>Graphics Copyright © Simon’s Cat Ltd.</p>
        <p>Images by <a href="https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t">Cat API</a></p>
        </footer>
    </div>
  );
}

export default MemoGame;
