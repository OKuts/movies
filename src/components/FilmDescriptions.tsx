// Core
import { FC } from 'react';
import { Descriptions  } from 'antd';

const { Item } = Descriptions;

interface IFilmDescriptionsProp {
    release_date: string;
    status: string;
    vote_average: number;
    vote_count: number;
    genres: string[];
    overview: string;
}

export const FilmDescriptions: FC<IFilmDescriptionsProp> = ({
    release_date, status, vote_average, vote_count, genres, overview,
}) => {
    return (
        <Descriptions
            bordered
            labelStyle = { { textAlign: 'left', width: 130 } }
            column = { {
                xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1,
            } }>
            <Item label = 'Статус' >{ status }</Item>
            <Item label = 'Дата выхода'>{ release_date }</Item>
            <Item label = 'Количество голосов'>{ vote_count }</Item>
            <Item label = 'Средняя оценка' >{ vote_average }</Item>
            <Item label = 'Краткое описание' span = { 2 }>{ overview }</Item>
            <Item label = 'Жанры' span = { 2 }>{ genres.join(', ') }</Item>
        </Descriptions>
    );
};
