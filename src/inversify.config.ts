import 'reflect-metadata';
import { container } from 'inversify-hooks';
import MoviesService from './services/movies/MoviesService';
import MoviesServiceInterface from './services/movies/MoviesServiceInterface';

import GenreService from './services/genre/GenreService';
import GenreServiceInterface from './services/genre/GenreServiceInterface';

// import WatchListService from './services/watchlist/WatchListService';
// import WatchListServiceInterface from './services/watchlist/WatchListServiceInterface';

container.addSingleton<MoviesServiceInterface>(MoviesService);
container.addSingleton<GenreServiceInterface>(GenreService);
// container.addSingleton<WatchListServiceInterface>(WatchListService);

export default container;
