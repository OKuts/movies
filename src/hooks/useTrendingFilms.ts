import { useQuery } from 'react-query';
import { api } from '../api';

export const useTrendingFilms = (time: string) => {
    const query = useQuery([`trending-movies-${time}`], () => api.getTrendingMovies(time));

    return query;
};
