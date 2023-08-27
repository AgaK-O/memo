import React, { FC, useState } from 'react';
import { CardType } from '../types/types';
import { Grid } from '../grid/grid';

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
        <button onClick={handleNewGame}>New game</button>
        <span>Steps: {steps}</span>
      </aside>

      <main>
        <Grid cards={cards} updateSteps={updateSteps}></Grid>
      </main>
    </>
  );
}