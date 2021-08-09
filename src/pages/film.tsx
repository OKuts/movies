import { FC, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import {
    Typography, Image, Row, Col, Alert, Button,
} from 'antd';

import { useFilm } from '../hooks';

import {
    FilmDescriptions, FilmStatistic, RecommendationsMovies, Reviews, SimilarMovies,
} from '../components';

const { Title } = Typography;

const errorMessage = 'Не возможно найти фильм с указанным идентификатором или произошла ошибка запроса';

export const FilmPage:FC = () => {
    const { id: filmId } = useParams();
    const [isError, setIsError] = useState(false);

    const { data: film, isFetchedAfterMount, isLoading } = useFilm(filmId);

    useEffect(() => {
        if (!film && isFetchedAfterMount) {
            setIsError(true);
        }
    }, [film, isFetchedAfterMount]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return (
            <Alert
                message = 'Error'
                description = { errorMessage }
                closable
                type = 'error' />
        );
    }

    if (!film) { return null; }

    const {
        popularity, budget, revenue, release_date, status,
        vote_average, vote_count, genres, overview,
    } = film;

    return (
        <>
            <Title>{ film.title }</Title>
            <Row justify = 'start' align = 'middle'>
                <Col span = { 12 }>
                    <Image
                        width = { 200 }
                        src = { film.poster_path } />
                </Col>
            </Row>
            <NavLink to = './images'>
                <Button size = 'small'>More images ...</Button>
            </NavLink>
            <FilmDescriptions
                release_date = { release_date }
                status = { status }
                vote_average = { vote_average }
                vote_count = { vote_count }
                genres = { genres }
                overview = { overview } />
            <FilmStatistic
                popularity = { popularity }
                budget = { budget }
                revenue = { revenue } />
            <Reviews />
            <RecommendationsMovies />
            <SimilarMovies />
        </>
    );
};
