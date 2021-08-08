// import { MoviesData } from '../../data_model/movies/MoviesData';
import { SET_MOVIES_BY_GENRE_ID, MoviesActionTypes, GenreMoviesData, SET_TOTAL_ADDED_WATCH_LIST } from './types';

export const SetTotalAddedWatchedListToStore = (data: number): MoviesActionTypes => {
    return {
        type: SET_TOTAL_ADDED_WATCH_LIST,
        totalAddedWatchList: data,
    };
};

export const SetMoviesByGenreIdToStore = (data: GenreMoviesData[]): MoviesActionTypes => {
    return {
        type: SET_MOVIES_BY_GENRE_ID,
        moviesData: data,
    };
};
