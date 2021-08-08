import { ProductionCompany, ProductionCountry, SpokenLanguage, MovieVideos } from '../../data_model/movies/MoviesData';
import { GenreItem } from './GenereItem';

export interface WatchListMovies {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    dateTime: Date;
    genres: GenreItem[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    videos: MovieVideos;
    vote_average: number;
    vote_count: number;
}
