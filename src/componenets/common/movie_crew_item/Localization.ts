import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

export interface IStrings extends LocalizedStringsMethods {
    as: string;
}

export const Localization: IStrings = new LocalizedStrings({
    // English
    en: {
        as: 'as',
    },
    // Norway
    no: {
        as: 'som',
    },
});
