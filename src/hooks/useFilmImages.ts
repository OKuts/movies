import { useQuery } from 'react-query';
import { api } from '../api';

export const useFilmImages = (filmId: string) => {
    const query = useQuery(
        ['selected-movie-images', filmId],
        () => api.getMovieImages(filmId),
    );

    return query;
};
