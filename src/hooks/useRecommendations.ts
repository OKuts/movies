// @ts-nocheck
/* Core */
import { useQuery } from 'react-query';
/* Other */
import { api } from '../api';

export const useRecommendations = (filmId:string) => {
    return useQuery('filmsrecomendate', () => api.getRecommendationsMovies(filmId));
};
