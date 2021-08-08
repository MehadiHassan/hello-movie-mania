import React from 'react';
import { Link } from 'react-router-dom';
import './_genreHeader.scss';

interface GenreHeaderProps {
    id: number;
    name: string;
}

const GenreHeader: React.FC<GenreHeaderProps> = (genreHeaderProps: GenreHeaderProps) => {
    return (
        <div className="genre-header">
            <h1>
                <Link className="genre-name" to={`/genre/${genreHeaderProps.id}`}>
                    #{genreHeaderProps.name}
                </Link>
            </h1>
        </div>
    );
};

export default GenreHeader;
