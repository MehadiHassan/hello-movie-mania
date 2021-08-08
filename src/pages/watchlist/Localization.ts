import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

export interface IStrings extends LocalizedStringsMethods {
    watchListTitle: string;
    sortByLabel: string;
    byAddedDate: string;
    populairty: string;
    ratings: string;
    watchListMoviesError: string;
}

export const Localization: IStrings = new LocalizedStrings({
    // English
    en: {
        watchListTitle: 'Your WatchList',
        sortByLabel: 'Sort By:-',
        byAddedDate: 'By Added Date',
        populairty: 'Popularity',
        ratings: 'Ratings',
        watchListMoviesError: 'Currently there is no Movie in the watch list.',
    },
    // Norway
    no: {
        watchListTitle: 'WatchListen din',
        sortByLabel: 'Sorter etter:-',
        byAddedDate: 'Etter lagt dato',
        populairty: 'Popularitet',
        ratings: 'Vurderinger',
        watchListMoviesError: 'For øyeblikket er det ingen film på overvåkningslisten.',
    },
});
