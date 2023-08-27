import { FC } from "react";
import background from '../../assets/simons-cat.jpg';
import { CardType } from "../types/types";
import './card.scss';

type Props = {
  card: CardType;
  turned?: boolean;
  handleClickedCard: (a: CardType) => void;
}


const initialData = {
  id: '',
  url: background,
  height: 0,
  width: 0,
}

export const Card: FC<Props> = ({ card = initialData, turned, handleClickedCard }) => {
  const handleClick = () => {
    handleClickedCard(card);
  }

  return (
    <button className="card" onClick={handleClick}>
      {turned && <img className="card-image" src={card.url} />}
      {!turned && <img className="card-background" src={background} />}
    </button>
  );
};
