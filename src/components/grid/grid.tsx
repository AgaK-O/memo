import { FC, useEffect, useState } from 'react';
import { Card } from '../card/card';
import { CardType } from '../../types/types';
import './grid.scss';

type Props = {
    cards: CardType[];
    updateSteps: () => void;
}

export const Grid: FC<Props> = ({ cards, updateSteps }) => {
    const [first, setFirst] = useState<CardType | null>(null);
    const [second, setSecond] = useState<CardType | null>(null);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (first && second) {
            setDisabled(true);

            if (first.id === second.id) {

                if (first.uniqueId) {
                    cards[first.uniqueId].matched = true;
                }
                if (second.uniqueId) {
                    cards[second.uniqueId].matched = true;
                }
                resetClicks();
            } else {
                updateSteps();
                setTimeout(() => { resetClicks() }, 1500);
            }
        }
        return () => {
            setDisabled(false);
        };
    }, [first, second, cards, updateSteps]);

    const handleEachClick = (card: CardType) => {
        if (first) {
            if (first.uniqueId === card.uniqueId) {
                return null;
            } else {
                setSecond(card);
            }

        } else {
            setFirst(card);
        }
    };

    const resetClicks = () => {
        setFirst(null);
        setSecond(null);
        setDisabled(false);
    };

    return <div className='grid'>
        {cards?.map((card: CardType, i) => {
            card = {
                ...card,
                uniqueId: i
            }
            return <Card
                key={`${card.id}${i}`}
                card={card}
                handleClickedCard={handleEachClick}
                turned={card.uniqueId === first?.uniqueId || card.uniqueId === second?.uniqueId || card.matched}
                disabled={disabled}
            />
        })}
    </div>
}
