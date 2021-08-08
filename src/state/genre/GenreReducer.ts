import { GenreState, SET_GENRE_LIST, GenreActionTypes } from './types';

export const initialState: GenreState = {
    genres: [],
};

export function GenreReducer(state = initialState, action: GenreActionTypes): GenreState {
    switch (action.type) {
        case SET_GENRE_LIST:
            return {
                ...state,
                genres: action.genreData,
            };
        default:
            return state;
    }
}
