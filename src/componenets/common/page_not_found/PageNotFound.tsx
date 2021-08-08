import React from 'react';
import { Localization } from './Localization';
import './_pageNotFound.scss';

const PageNotFound: React.FC = () => {
    return (
        <div className="page-not-found-container">
            <h1>{Localization.notFoundMessage}</h1>
        </div>
    );
};

export default PageNotFound;
