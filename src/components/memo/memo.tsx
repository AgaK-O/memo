import React, { FC, useState } from 'react';
import { CardType } from '../types/types';
import { Grid } from '../grid/grid';
import './memo.scss';

type Props = {
    cards: CardType[];
    resetGame: () => void;
}
export const Memo:FC<Props> = ({cards, resetGame}) => {
  const [steps, setSteps] = useState(0);

  const updateSteps = () => {
    setSteps(prevSteps => ++prevSteps)
  }

  const handleNewGame = () => {
    resetGame();
  }

  return (
    <>
      <aside>
        <button className="reset-button" onClick={handleNewGame} type='button' >New game</button>
        <p className='steps-counter' >Steps: {steps}</p>
      </aside>

      <main>
        <Grid cards={cards} updateSteps={updateSteps}></Grid>
      </main>
    </>
  );
}