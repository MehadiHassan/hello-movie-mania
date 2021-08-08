import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

export interface IStrings extends LocalizedStringsMethods {
    notFoundMessage: string;
}

export const Localization: IStrings = new LocalizedStrings({
    // English
    en: {
        notFoundMessage: ' 404 | Page Not Found',
    },
    // Norway
    no: {
        notFoundMessage: '404 | Side ikke funnet',
    },
});
