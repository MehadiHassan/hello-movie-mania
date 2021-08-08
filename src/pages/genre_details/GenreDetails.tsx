import React, { useEffect, useState } from 'react';
import MoviesService from '../../services/movies/MoviesService';
import { MoviesData } from '../../data_model/movies/MoviesData';
import './_genreDetails.scss';
import { cid, useInject } from 'inversify-hooks';
import { useParams } from 'react-router-dom';
import { MovieItem } from '../../data_model/commonData/MovieItem';
import MovieGridItem from '../../componenets/common/movie_grid_item/MovieGridItem';
import { GenreData } from '../../data_model/genre/GenereData';
import GenreService from '../../services/genre/GenreService';
import { GenreItem } from '../../data_model/commonData/GenereItem';
import GenreHeader from '../../componenets/common/genre_header/GenreHeader';
import { Localization } from './Localization';

const GenreDetails: React.FC = () => {
    const { genreId } = useParams<{ genreId: string }>();
    const [genreDetails, setGenreDetails] = useState<GenreItem[]>();
    const [genreMovieList, setGenreMovieList] = useState<MovieItem[]>([]);
    const [isGettingError, setIsGettingError] = useState<boolean>(false);
    const [moviesService] = useInject<MoviesService>(cid.MoviesService);
    const [genreService] = useInject<GenreService>(cid.GenreService);

    const FetchGenreInfoAsync = (): Promise<GenreData> => {
        return genreService.getData();
    };

    const FetchMovieInfoAsync = (genreID: number, pageNumber: number): Promise<MoviesData> => {
        return moviesService.getData(genreID, pageNumber);
    };

    const GetMovieByPopularity = (movies: MovieItem[]): MovieItem[] => {
        return movies.sort((movieItem, comparedMovieItem) =>
            movieItem.popularity < comparedMovieItem.popularity
                ? 1
                : comparedMovieItem.popularity < movieItem.popularity
                ? -1
                : 0,
        );
    };

    useEffect(() => {
        FetchGenreInfoAsync().then((genreResponse: GenreData) => {
            const genreDetailsByGenreID: GenreItem[] = genreResponse.genres.filter(
                genreItem => genreItem.id === Number(genreId),
            );
            setGenreDetails(genreDetailsByGenreID);
        });
    }, []);

    useEffect(() => {
        FetchMovieInfoAsync(Number(genreId), 1)
            .then((moviesResponse: MoviesData) => {
                if (moviesResponse.results.length > 0) setGenreMovieList(GetMovieByPopularity(moviesResponse.results));
                else setIsGettingError(true);
            })
            .catch(error => {
                console.log('Get error:-', error);
                setIsGettingError(true);
            });
    }, []);
    return (
        <div className="genre-content">
            {isGettingError ? (
                <div className="error-message">{Localization.errorMessage}</div>
            ) : (
                <div className="container">
                    {genreDetails && <GenreHeader id={genreDetails[0]?.id} name={genreDetails[0]?.name} />}

                    <div className="movie-details-by-popularity container">
                        {genreMovieList.map(item => {
                            return (
                                <div key={item.id} className="movie-grid-item">
                                    <MovieGridItem movies={item} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GenreDetails;
