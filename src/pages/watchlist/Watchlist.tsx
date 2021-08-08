import React, { useEffect, useState } from 'react';
import { GetWatchListMovies } from '../../db/WatchList';
import './_watchList.scss';
import MovieWatchListItem from '../../componenets/movie_watch_list_item/MovieWatchListItem';
import { WatchListMovies } from '../../data_model/commonData/WatchListItem';
import { Localization } from './Localization';

const Watchlist: React.FC = () => {
    const [watchedListMovie, setWatchedListMovie] = useState<WatchListMovies[]>();

    const SortedByPopulairty = () => {
        GetWatchListMovies().then(result => {
            const sortedListByPopularity = result?.sort((movieItem, comparedMovieItem) =>
                movieItem.popularity < comparedMovieItem.popularity
                    ? 1
                    : comparedMovieItem.popularity < movieItem.popularity
                    ? -1
                    : 0,
            );
            setWatchedListMovie(sortedListByPopularity);
        });
    };

    const SortedByDate = () => {
        GetWatchListMovies().then(result => {
            const sortedActivities = result?.sort(function (a, b) {
                const dateA = new Date(a.dateTime).getTime();
                const dateB = new Date(b.dateTime).getTime();
                return dateA < dateB ? 1 : -1;
            });
            setWatchedListMovie(sortedActivities);
        });
    };

    const SortedByRatings = () => {
        GetWatchListMovies().then(result => {
            const sortedListByPopularity = result?.sort((movieItem, comparedMovieItem) =>
                movieItem.vote_average < comparedMovieItem.vote_average
                    ? 1
                    : comparedMovieItem.vote_average < movieItem.vote_average
                    ? -1
                    : 0,
            );
            setWatchedListMovie(sortedListByPopularity);
        });
    };

    const SortedMovieController = (value: string) => {
        switch (value) {
            case 'SortedByAddedDate':
                SortedByDate();
                break;
            case 'Popularity':
                SortedByPopulairty();
                break;
            case 'Ratings':
                SortedByRatings();
                break;
            default:
                console.log(`Sorry, we are out of ${value}.`);
        }
    };

    useEffect(() => {
        GetWatchListMovies().then(result => {
            const sortedActivities = result?.sort(function (a, b) {
                const dateA = new Date(a.dateTime).getTime();
                const dateB = new Date(b.dateTime).getTime();
                return dateA < dateB ? 1 : -1;
            });
            setWatchedListMovie(sortedActivities);
        });
    }, []);
    return (
        <div className="watch-list-container container">
            {watchedListMovie && watchedListMovie?.length > 0 ? (
                <>
                    <div className="title-section">
                        <h1>{Localization.watchListTitle}</h1>
                        <div className="sorted-watched-movied">
                            {Localization.sortByLabel}
                            <select id="lang" onChange={event => SortedMovieController(event.target.value)}>
                                <option value="SortedByAddedDate">{Localization.byAddedDate}</option>
                                <option value="Popularity">{Localization.populairty}</option>
                                <option value="Ratings">{Localization.ratings}</option>
                            </select>
                        </div>
                    </div>
                    {watchedListMovie?.map((movieItem, index) => {
                        return <MovieWatchListItem key={index} movieDetails={movieItem} />;
                    })}
                </>
            ) : (
                <div className="error-message">{Localization.watchListMoviesError}</div>
            )}
        </div>
    );
};

export default Watchlist;
