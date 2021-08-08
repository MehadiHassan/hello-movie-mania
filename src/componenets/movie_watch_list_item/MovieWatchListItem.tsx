import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Localization } from './Localization';
import DefaultPoster from '../../assets/images/deafult-poster.jpg';
import { MovieDetailsData } from '../../data_model/movies/MoviesData';
import './_movieWatchListItem.scss';
import { IMAGE_BASE_URL, IMDB_BASE_URL } from '../../utility/CommonConstant';

export interface MovieWatchListItemProps {
    movieDetails: MovieDetailsData;
}

const MovieWatchListItem: React.FC<MovieWatchListItemProps> = (movieWatchListItemProps: MovieWatchListItemProps) => {
    return (
        <div className="movie-watch-list-item-container">
            <div className="movie-watch-list-content">
                <div className="poster-image-content">
                    <a
                        href={`${IMDB_BASE_URL}${movieWatchListItemProps.movieDetails.imdb_id}/?ref_=helpms_ih_gi_link`}
                        target="_blank"
                        rel="noreferrer">
                        <img
                            className="poster-image"
                            src={
                                !movieWatchListItemProps.movieDetails.poster_path ||
                                movieWatchListItemProps.movieDetails.poster_path == null
                                    ? DefaultPoster
                                    : `${IMAGE_BASE_URL}${movieWatchListItemProps.movieDetails.poster_path}`
                            }
                            alt="poster"
                        />
                    </a>
                </div>
                <div className="movie-basic-info-container">
                    <span className="movie-name">{movieWatchListItemProps.movieDetails.original_title}</span>
                    <div className="movie-released-and-gnere-info">
                        <span className="released-year"> {movieWatchListItemProps.movieDetails.release_date} </span>
                        <span className="movie-language">{movieWatchListItemProps.movieDetails.original_language}</span>
                        <div className="movie-genre-info">
                            {movieWatchListItemProps.movieDetails.genres.map((genre, index) => {
                                return (
                                    <span key={index} className="genre-name">
                                        {genre.name}
                                        {index < movieWatchListItemProps.movieDetails.genres.length - 1 ? ',' : ''}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    <div className="rating-and-popularity-info">
                        <div className="rating-contents">
                            <IconContext.Provider value={{ className: 'fa-star-icon' }}>
                                <div>{<FaStar />}</div>
                            </IconContext.Provider>
                            <span className="rating-value">{movieWatchListItemProps.movieDetails.vote_average}</span>
                        </div>
                        <div className="popularity-contents">
                            <div className="popularity-value">{movieWatchListItemProps.movieDetails.popularity}</div>
                            <span className="populairty-title"> {Localization.populairtyLabel} </span>
                        </div>
                    </div>
                    <span className="movie-overview">{movieWatchListItemProps.movieDetails.overview}</span>
                </div>
            </div>
        </div>
    );
};

export default MovieWatchListItem;
