import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

export interface IStrings extends LocalizedStringsMethods {
    movieDetailsErrorMessage: string;
    ratingLabel: string;
    populairtyLabel: string;
    castCrewErrorMessage: string;
    castErrorMessage: string;
    castTitle: string;
    crewErrorMessage: string;
    crewTitle: string;
    relatedMovieErrorMessage: string;
    relatedMovieTitle: string;
}

export const Localization: IStrings = new LocalizedStrings({
    // English
    en: {
        movieDetailsErrorMessage: 'Unable to get movie details.',
        ratingLabel: 'RATING',
        populairtyLabel: 'POPULARITY',
        castCrewErrorMessage: 'No Cast Crew found.',
        castErrorMessage: 'No Cast found.',
        castTitle: 'Top Cast',
        crewErrorMessage: 'No Crew found.',
        crewTitle: 'Top Crew',
        relatedMovieErrorMessage: 'No Related movie found.',
        relatedMovieTitle: 'Related Movies',
    },
    // Norway
    no: {
        movieDetailsErrorMessage: 'Kan ikke få detaljer om filmen.',
        ratingLabel: 'RATING',
        populairtyLabel: 'FOLKSOMHET',
        castCrewErrorMessage: 'Ingen Cast Crew ble funnet.',
        castErrorMessage: 'Ingen cast funnet.',
        castTitle: 'Topp rollebesetning',
        crewErrorMessage: 'Ingen mannskap funnet.',
        crewTitle: 'Toppmannskap',
        relatedMovieErrorMessage: 'Ingen relatert film funnet.',
        relatedMovieTitle: 'Relaterte filmer',
    },
});
