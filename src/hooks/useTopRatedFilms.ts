import { useQuery } from 'react-query';
import { api } from '../api';


export const useTopRatedFilms = (page: number) => {
    return  (
        useQuery(['top-rated', page], () => api.getTopRated(page))
    );
};
