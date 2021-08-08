import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

export interface IStrings extends LocalizedStringsMethods {
    populairtyLabel: string;
}

export const Localization: IStrings = new LocalizedStrings({
    // English
    en: {
        populairtyLabel: 'Populairty',
    },
    // Norway
    no: {
        populairtyLabel: 'Popularitet',
    },
});
