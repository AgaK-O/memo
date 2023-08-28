import { FC } from "react";
import background from '../../assets/simons-cat.jpg';
import { CardType } from "../types/types";
import './card.scss';

type Props = {
  card: CardType;
  turned?: boolean;
  disabled: boolean;
  handleClickedCard: (v: CardType) => void;
}

const initialData = {
  id: '',
  url: background,
  height: 0,
  width: 0,
}

export const Card: FC<Props> = ({ card = initialData, turned, disabled, handleClickedCard }) => {

  const handleClick = () => {
    handleClickedCard(card);
  }
  const finalClassname = `card ${turned ? 'turned' : ''}`;

  return (
    <button className={finalClassname} onClick={handleClick} disabled={disabled} type="button">
      <img className="card-image" src={card.url} />
      <img className="card-background" src={background} />
    </button>
  );
};
