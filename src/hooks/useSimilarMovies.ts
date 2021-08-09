import { useQuery, UseQueryResult } from 'react-query';

import { api } from '../api';
import { ErrorType, ISimilarMovieModel } from '../types';

import { useApiError } from './useApiError';

export const useSimilarMovies = (
    filmId: string,
): UseQueryResult<ISimilarMovieModel[], ErrorType> => {
    const { handleError } = useApiError();

    const query = useQuery<ISimilarMovieModel[], ErrorType>(
        ['similarMovies', filmId],
        () => api.getSimilarMovies(filmId),
        {
            onError: handleError,
        },
    );

    return query;
};
