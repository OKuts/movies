import { FC } from 'react';
import { Card } from 'antd';
import { useTrendingFilms } from '../hooks';
import { CardsWrap, CardLink } from './styles';
import { ITrendingMovieModel } from '../types';

type DefaultProps = {
    time: string;
};

export const TrendingCards: FC<DefaultProps> = ({ time }) => {
    const { Meta } = Card;
    const { data, isFetchedAfterMount, isLoading } = useTrendingFilms(time);
    const filmsData = data?.data?.data;
    const filmsJSX = filmsData?.map(({
        id,
        title,
        poster_path,
        release_year,
        overview,
    }:ITrendingMovieModel) => (
        <CardLink to = { `/films/${id}` } key = { id }>
            <Card
                title = { title }
                bordered = { false }
                hoverable
                cover = { <img alt = { title } src = { poster_path } /> }>
                <Meta title = { overview } description = { release_year } />
            </Card>
        </CardLink>
    ));

    if (isLoading) return <p>Loading...</p>;

    if (isFetchedAfterMount) return (<CardsWrap>{ filmsJSX }</CardsWrap>);

    return null;
};

TrendingCards.defaultProps = {
    time: 'day',
};
