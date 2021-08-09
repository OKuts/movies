// Core
import { useQuery } from 'react-query';

// Other
import { api } from '../api';
import { IReviewModel } from '../types';

export const useReviews = (filmId: string) => {
    const query = useQuery<{ data: IReviewModel[] }>(['Reviews', filmId], () => api.getReviewsToMovie(filmId));

    return query;
};
