import { GenreItem } from '../../data_model/commonData/GenereItem';

export const SET_GENRE_LIST = 'SET_GENRE_LIST';

export interface GenreState {
    genres: GenreItem[];
}

export interface SetGenereListAction {
    type: typeof SET_GENRE_LIST;
    genreData: GenreItem[];
}

export type GenreActionTypes = SetGenereListAction;
