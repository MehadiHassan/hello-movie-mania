import React, { useEffect, useState } from 'react';
import { MovieCastItem } from '../../../data_model/commonData/MovieCastItem';
import ProfileAvatar from '../../../assets/images/profile-avatar.png';
import './_movieCast.scss';
import { IMAGE_BASE_URL } from '../../../utility/CommonConstant';

interface MovieCastProps {
    castItem: MovieCastItem;
}

const MovieCast: React.FC<MovieCastProps> = (movieCastProps: MovieCastProps) => {
    const [castProfileImage, setCastProfileImage] = useState<string>('');
    useEffect(() => {
        if (movieCastProps.castItem.profile_path)
            setCastProfileImage(`${IMAGE_BASE_URL}${movieCastProps.castItem.profile_path}`);
    }, []);
    return (
        <div className="movie-cast-item">
            <img
                className="cast-profile"
                src={castProfileImage ? castProfileImage : ProfileAvatar}
                alt="cast-profile"
            />
            <div className="cast-info">
                <span className="cast-name"> {movieCastProps.castItem.name}</span>
                <span className="cast-postion"> as {movieCastProps.castItem.character}</span>
            </div>
        </div>
    );
};

export default MovieCast;
