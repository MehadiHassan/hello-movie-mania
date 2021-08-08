import React from 'react';
import { useParams } from 'react-router-dom';
import Movies from '../../../pages/movies/Movies';
import GenreDetails from '../../../pages/genre_details/GenreDetails';
import Footer from '../footer/Footer';
import NavMenubar from '../nav_manu_bar/NavMenbar';
import './_pageLayoutController.scss';
import PageNotFound from '../../common/page_not_found/PageNotFound';
import MovieDetails from '../../../pages/movie_details/MovieDetails';
import Watchlist from '../../../pages/watchlist/Watchlist';

const PageLayoutController: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { genreId } = useParams<{ genreId: string }>();
    const { movieId } = useParams<{ movieId: string }>();
    return (
        <div className="page-layout-container">
            {id == 'movies' || genreId || movieId || id == 'watchlist' ? (
                <>
                    <NavMenubar />
                    {id == 'movies' && <Movies />} {genreId && <GenreDetails />} {movieId && <MovieDetails />}
                    {id == 'watchlist' && <Watchlist />}
                    <Footer />
                </>
            ) : id == undefined && genreId == undefined && movieId == undefined ? (
                <>
                    <NavMenubar />
                    <Movies />
                    <Footer />
                </>
            ) : (
                <PageNotFound />
            )}
        </div>
    );
};

export default PageLayoutController;
