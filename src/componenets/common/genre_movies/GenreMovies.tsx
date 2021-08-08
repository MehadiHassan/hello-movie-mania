import React from 'react';
import { useSelector } from 'react-redux';
import { GenreMoviesData } from '../../../state/movies/types';
import { RootState } from '../../../state/store';
import Carousel from 'react-grid-carousel';
import MovieGridItem from '../movie_grid_item/MovieGridItem';
import './_genreMovies.scss';

interface GenreMoviesProps {
    genreId: number;
}

const GenreMovies: React.FC<GenreMoviesProps> = (genreMoviesProps: GenreMoviesProps) => {
    const movies = useSelector((state: RootState) => state.MovieList.movieGenreData);
    const moviesByGenreID: GenreMoviesData[] = movies.filter(movieItem => movieItem.id === genreMoviesProps.genreId);

    return (
        <>
            {moviesByGenreID.length > 0 ? (
                <div>
                    <Carousel
                        cols={5}
                        rows={1}
                        gap={20}
                        responsiveLayout={[
                            {
                                breakpoint: 1200,
                                cols: 3,
                            },
                            {
                                breakpoint: 990,
                                cols: 2,
                            },
                        ]}
                        mobileBreakpoint={670}>
                        {moviesByGenreID[0]?.movieGenreData.results.map(item => {
                            return (
                                <Carousel.Item key={item.id}>
                                    <div key={item.id} className="movie-grid-item">
                                        <MovieGridItem movies={item} />
                                    </div>
                                </Carousel.Item>
                            );
                        })}
                    </Carousel>
                </div>
            ) : null}
        </>
    );
};

export default GenreMovies;
