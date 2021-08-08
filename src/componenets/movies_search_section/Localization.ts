import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

export interface IStrings extends LocalizedStringsMethods {
    welcomeTitle: string;
    welcomeMessage: string;
    searchBoxPlaceHolder: string;
}

export const Localization: IStrings = new LocalizedStrings({
    // English
    en: {
        welcomeTitle: 'Welcome',
        welcomeMessage: 'Millions of movies, TV shows and people to discover. Explore now.',
        searchBoxPlaceHolder: 'Search for a movie, tv show, person......',
    },
    // Norway
    no: {
        welcomeTitle: 'Velkommen',
        welcomeMessage: 'Millioner av filmer, TV -programmer og folk å oppdage. Utforsk nå.',
        searchBoxPlaceHolder: 'Søk etter en film, et tv -program, en person ... ...',
    },
});
