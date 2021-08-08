import { GenreItem } from '../../data_model/commonData/GenereItem';
import { SET_GENRE_LIST, GenreActionTypes } from './types';

export const SetGenreListToStore = (data: GenreItem[]): GenreActionTypes => {
    return {
        type: SET_GENRE_LIST,
        genreData: data,
    };
};
