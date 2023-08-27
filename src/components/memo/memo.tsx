import React, { FC, useState } from 'react';
import { CardType } from '../types/types';
import { Grid } from '../grid/grid';

type Props = {
    cards: CardType[];
}
export const Memo:FC<Props> = ({cards}) => {
  const [steps, setSteps] = useState(0);

  const updateSteps = () => {
    setSteps(prevSteps => ++prevSteps)
  }
console.log(cards)
  return (
    <>
      <aside>
        <button onClick={updateSteps}>New game</button>
        <span>Steps: {steps}</span>
      </aside>

      <main>
        <Grid cards={cards} updateSteps={updateSteps}></Grid>
      </main>
    </>
  );
}