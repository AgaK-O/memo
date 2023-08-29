import { FC } from "react";
import background from '../../assets/simons-cat.jpg';
import { CardType } from "../../types/types";
import './card.scss';

type Props = {
  card: CardType;
  turned?: boolean;
  disabled: boolean;
  handleClickedCard: (v: CardType) => void;
}

export const Card: FC<Props> = ({ card, turned, disabled, handleClickedCard }) => {

  const handleClick = () => {
    handleClickedCard(card);
  }
  const finalClassname = `card ${turned ? 'turned' : ''}`;

  return (
    <button className={finalClassname} onClick={handleClick} disabled={disabled} type="button">
      <img className="card-image" src={card.url} alt="cat" />
      <img className="card-background" src={background} alt="Simon's cat graphic" />
    </button>
  );
};
