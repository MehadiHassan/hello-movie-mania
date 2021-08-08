import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import GenreHeader from '../common/genre_header/GenreHeader';
import GenreMovies from '../common/genre_movies/GenreMovies';

const MovieListByGenres: React.FC = () => {
    const genres = useSelector((state: RootState) => state.GenreList.genres);

    return (
        <>
            {genres.map(genreItem => {
                return (
                    <div key={genreItem.id} className="genre-content">
                        <GenreHeader id={genreItem.id} name={genreItem.name} />
                        <GenreMovies genreId={genreItem.id} />
                    </div>
                );
            })}
        </>
    );
};

export default MovieListByGenres;
