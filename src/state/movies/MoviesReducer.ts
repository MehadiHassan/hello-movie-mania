import { MoviesState, SET_MOVIES_BY_GENRE_ID, MoviesActionTypes, SET_TOTAL_ADDED_WATCH_LIST } from './types';

export const initialState: MoviesState = {
    movieGenreData: [],
    totalAddedWatchList: 0,
};

export function MoviesReducer(state = initialState, action: MoviesActionTypes): MoviesState {
    switch (action.type) {
        case SET_MOVIES_BY_GENRE_ID:
            return {
                ...state,
                movieGenreData: action.moviesData,
            };
        case SET_TOTAL_ADDED_WATCH_LIST:
            return {
                ...state,
                totalAddedWatchList: action.totalAddedWatchList,
            };
        default:
            return state;
    }
}
