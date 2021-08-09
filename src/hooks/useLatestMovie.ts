import { useQuery } from 'react-query';

/* Other */
import { api } from '../api';
import { useApiError } from './useApiError';

export const useLatestMovie = () => {
    const { handleError } = useApiError();
    const query = useQuery(
        ['latest'],
        api.getLatestMovies,
        {
            onError: handleError,
        },
    );

    return query;
};
