import { useQuery, UseQueryResult } from 'react-query';

import { api } from '../api';
import { IFilmDetailsModel, ErrorType } from '../types';
import { useApiError } from './useApiError';

export const useFilm = (filmId: string): UseQueryResult<IFilmDetailsModel, ErrorType> => {
    const { handleError } = useApiError();

    const query = useQuery<IFilmDetailsModel, ErrorType>(
        ['filmById', filmId],
        () => api.getMovie(filmId),
        {
            onError: handleError,
        },
    );

    return query;
};
