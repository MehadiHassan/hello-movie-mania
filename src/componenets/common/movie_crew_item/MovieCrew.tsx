import React, { useEffect, useState } from 'react';
import { Localization } from './Localization';
import { MovieCrewItem } from '../../../data_model/commonData/MovieCrewItem';
import ProfileAvatar from '../../../assets/images/profile-avatar.png';
import './_movieCrew.scss';
import { IMAGE_BASE_URL } from '../../../utility/CommonConstant';

interface MovieCrewProps {
    crewItem: MovieCrewItem;
}

const MovieCrew: React.FC<MovieCrewProps> = (movieCrewProps: MovieCrewProps) => {
    const [castProfileImage, setCastProfileImage] = useState<string>('');
    useEffect(() => {
        if (movieCrewProps.crewItem.profile_path)
            setCastProfileImage(`${IMAGE_BASE_URL}${movieCrewProps.crewItem.profile_path}`);
    }, []);

    return (
        <div className="movie-crew-item">
            <img
                className="crew-profile"
                src={castProfileImage ? castProfileImage : ProfileAvatar}
                alt="crew-profile"
            />
            <div className="crew-info">
                <span className="crew-name">{movieCrewProps.crewItem.name}</span>
                <span className="crew-postion">
                    {Localization.as} {movieCrewProps.crewItem.job}({movieCrewProps.crewItem.department})
                </span>
            </div>
        </div>
    );
};

export default MovieCrew;
