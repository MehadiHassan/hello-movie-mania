import axios, { AxiosInstance } from 'axios';

const movieManiaInstance: AxiosInstance = axios.create({
    baseURL: process.env.MOVIE_MANIA_API_BASE_URL,
});

export { movieManiaInstance };
