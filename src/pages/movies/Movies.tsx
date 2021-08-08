import React, { useEffect, useState } from 'react';
import { useInject, cid } from 'inversify-hooks';
import { useDispatch } from 'react-redux';
import MovieListByGenres from '../../componenets/movie_list_by_genres/MovieListByGenres';
import GenreService from '../../services/genre/GenreService';
import MoviesService from '../../services/movies/MoviesService';
import { GenreData } from '../../data_model/genre/GenereData';
import { MoviesData } from '../../data_model/movies/MoviesData';
import { GenreItem } from '../../data_model/commonData/GenereItem';
import './_movies.scss';
import { SetGenreListToStore } from '../../state/genre/GenreAction';
import { SetMoviesByGenreIdToStore } from '../../state/movies/MoviesAction';
import { GenreMoviesData } from '../../state/movies/types';
import MoviesSearchSection from '../../componenets/movies_search_section/MoviesSearchSection';

const Movies: React.FC = () => {
    const dispatch = useDispatch();
    const [genreList, setGenreList] = useState<GenreItem[]>();
    const [genreMovieList, setGenreMovieList] = useState<GenreMoviesData[]>([]);
    const [genreService] = useInject<GenreService>(cid.GenreService);
    const [moviesService] = useInject<MoviesService>(cid.MoviesService);

    const FetchGenreInfoAsync = (): Promise<GenreData> => {
        return genreService.getData();
    };

    const FetchMovieInfoAsync = (genreID: number, pageNumber: number): Promise<MoviesData> => {
        return moviesService.getData(genreID, pageNumber);
    };

    useEffect(() => {
        FetchGenreInfoAsync().then((genreResponse: GenreData) => {
            setGenreList(genreResponse.genres);
            dispatch(SetGenreListToStore(genreResponse.genres));
            genreResponse.genres.map((genreItem: GenreItem) => {
                FetchMovieInfoAsync(genreItem.id, 1).then((moviesResponse: MoviesData) => {
                    setGenreMovieList(genreMovieList => [
                        ...genreMovieList,
                        { id: genreItem.id, movieGenreData: moviesResponse },
                    ]);
                });
            });
        });
    }, []);

    useEffect(() => {
        dispatch(SetMoviesByGenreIdToStore(genreMovieList));
    }, [genreMovieList.length == genreList?.length]);

    return (
        <div className="movies-container container">
            <div className="content">
                <div className="content-inside">
                    <MoviesSearchSection />
                    <MovieListByGenres />
                </div>
            </div>
        </div>
    );
};

export default Movies;
