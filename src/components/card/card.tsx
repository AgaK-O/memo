import { FC } from "react";
import './card.scss';

type CardType = {
    src: string
}

export const Card: FC<CardType> = ({src}) => {
    return (
      <button className="card">
        <img className="card-image" src={src} />
      </button>
    );
  };
  