import { useParams } from 'react-router-dom';
import { useRecommendations } from '../hooks';
import { Columns } from '../types/MoviesListModel';
import { MoviesList } from './MoviesList';

const MAX_RECOMENDATIONS = 5;

export const RecommendationsMovies  = () => {
    const { id: filmId } = useParams();
    const {
        data: films,

    } = useRecommendations(filmId);

    // eslint-disable-next-line max-len
    const sourceList = films?.data?.data.slice(0, MAX_RECOMENDATIONS);

    const columns = [
        Columns.poster_path,
        Columns.title,
        Columns.vote_average_as_stars,
        Columns.release_date,
        Columns.overview,
        Columns.details,
    ];

    return (
        <>
            { films?.data ? <MoviesList
                columns = { columns }
                dataSource = { sourceList }
                pagination = { false }
                title = { () => 'Рекомендации' } /> : null }
        </>
    );
};
