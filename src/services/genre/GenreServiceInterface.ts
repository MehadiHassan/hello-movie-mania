import { GenreData } from '../../data_model/genre/GenereData';

export default interface GenreServiceInterface {
    getData(genreID: string, key: string): Promise<GenreData>;
}
