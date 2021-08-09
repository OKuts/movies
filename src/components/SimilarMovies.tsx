import { FC } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, List } from 'antd';

import { SimilarMoviesSection } from './styles/SimilarMovies.styles';

import { ISimilarMovieModel } from '../types';
import { useSimilarMovies } from '../hooks/useSimilarMovies';

export const SimilarMovies:FC = () => {
    const { id: filmId } = useParams();
    const { data, isLoading } = useSimilarMovies(filmId);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const { Meta } = Card;

    return (
        <SimilarMoviesSection>
            <h2 className = 'ant-typography'>Похожие фильмы</h2>
            <List
                grid = { { gutter: 16, column: 5 } }
                dataSource = { data }
                renderItem = { (movie: ISimilarMovieModel) => {
                    const {
                        id, title, poster_path, release_date, overview,
                    } = movie;

                    return (<Link to = { `movies/films/${id}` } >
                        <div>
                            <List.Item>
                                <Card
                                    hoverable
                                    title = { title }
                                    cover = {
                                        <img alt = { title } src = { poster_path } /> }>
                                    <Meta title = { release_date }  />
                                    <Meta description = { overview } />
                                </Card>
                            </List.Item>
                        </div>
                    </Link>);
                } } />
        </SimilarMoviesSection>
    );
};

