import { FC } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { URL } from '../../constants/constants';
import { Card } from '../card/card';

export type CatsData = {
    id: string;
    url: string;
    height: number;
    width: number;
}

export const Grid: FC = () => {

    const { data, isLoading, error } = useFetchData(URL);
    if (error) {
        console.log( typeof error)
    }
    return <>
        {isLoading && <h1>Loading ... </h1>}
        {error && <h1>{`There seems to be a problem: ${error}`}</h1>}
        {/* {data.map((card: CatsData, i: number) => <img alt="cat" key={`${card.id}${i}`} src={card.url} />)} */}
        {data.map((card: CatsData, i: number) => <Card key={`${card.id}${i}`} src={card.url} />)}
    </>
}