import { combineReducers, createStore } from 'redux';
import { GenreReducer } from './genre/GenreReducer';
import { MoviesReducer } from './movies/MoviesReducer';

const store = combineReducers({
    MovieList: MoviesReducer,
    GenreList: GenreReducer,
});

export type RootState = ReturnType<typeof store>;
export default createStore(store);
