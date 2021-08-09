import { useQuery } from 'react-query';
import { api } from '../api';
import { IPopularMovieModel } from '../types';

export const usePopularFilms = (page: number) => {
    const query = useQuery<IPopularMovieModel[]>(['popular-movies', page], () => api.getPopularMovies(page));

    return query;
};
