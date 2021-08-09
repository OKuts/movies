// Core
import axios from 'axios';
import { IFilmDetailsModel, ISimilarMovieModel } from '../types';

// Configs
import { root } from './config';

enum Genre {
    'Comedy',
    'Drama',
    'Romance',
}

type Movie = {
    'id': number,
    'title': string,
    'poster_path': string,
    'vote_count': number,
    'vote_average': number,
    'overview': string,
    'genres': Genre[],
    'release_date': string,
};

export const api = Object.freeze({
    getMovie: async (filmId: string): Promise<IFilmDetailsModel> => {
        const { data } = await axios.get(`${root}/movie-details/${filmId}`);

        return data.data;
    },
    getSimilarMovies: async (filmId: string): Promise<ISimilarMovieModel[]> => {
        const { data } = await axios.get(`${root}/${filmId}/similar`);

        return data.data;
    },
    getRecommendationsMovies: (filmId: string) => {
        return axios.get(`${root}/${filmId}/recommendations`);
    },
    getReviewsToMovie: async (filmId: string) => {
        const { data } = await axios.get(`${root}/${filmId}/reviews`);

        return data;
    },
    getPopularMovies: async (page: number) => {
        const response =  await axios.get(`${root}/popular-movies?page=${page}`);

        return response.data.data;
    },
    getTrendingMovies: (time: string) => {
        return axios.get(`${root}/trending/movie/${time}`);
    },
    getTopRated: async (page: number) => {
        const result = await axios.get<{ data: Movie[] }>(`${root}/top-rated?page=${page}`);

        return result.data.data;
    },
    getLatestMovies: async () => {
        const response =  await axios.get(`${root}/latest-movie`);

        return response.data.data;
    },
    getMovieImages: (filmId: string) => {
        return axios.get(`${root}/${filmId}/images`);
    },
});
