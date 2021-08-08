import { MoviesData } from '../../data_model/movies/MoviesData';

export const SET_MOVIES_BY_GENRE_ID = 'SET_MOVIES_BY_GENRE_ID';
export const SET_TOTAL_ADDED_WATCH_LIST = 'SET_TOTAL_ADDED_WATCH_LIST';

export interface MoviesState {
    movieGenreData: GenreMoviesData[];
    totalAddedWatchList: number;
}

export interface SetTotalAddedWatchListAction {
    type: typeof SET_TOTAL_ADDED_WATCH_LIST;
    totalAddedWatchList: number;
}

export interface GenreMoviesData {
    id: number;
    movieGenreData: MoviesData;
}

export interface SetMoviesByGenreIDAction {
    type: typeof SET_MOVIES_BY_GENRE_ID;
    moviesData: GenreMoviesData[];
}

export type MoviesActionTypes = SetMoviesByGenreIDAction | SetTotalAddedWatchListAction;
