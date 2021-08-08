import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

export interface IStrings extends LocalizedStringsMethods {
    errorMessage: string;
}

export const Localization: IStrings = new LocalizedStrings({
    // English
    en: {
        errorMessage: 'No movie found.',
    },
    // Norway
    no: {
        errorMessage: 'Fant ingen film.',
    },
});
