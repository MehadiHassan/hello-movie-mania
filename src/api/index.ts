import { AxiosInstance } from 'axios';
let movieManiaAPI: AxiosInstance;

switch (process.env.ENVIRONMENT_APP) {
    case 'DEVELOPMENT': {
        import('./dev/index').then(({ movieManiaInstance }) => {
            SetmovieManiaAPIInstance(movieManiaInstance);
        });
        break;
    }
    case 'STAGING': {
        import('./staging/index').then(({ movieManiaInstance }) => {
            SetmovieManiaAPIInstance(movieManiaInstance);
        });
        break;
    }
    default: {
        import('./prod/index').then(({ movieManiaInstance }) => {
            SetmovieManiaAPIInstance(movieManiaInstance);
        });
        break;
    }
}

const SetmovieManiaAPIInstance = async (movieManiaInstance: AxiosInstance) => {
    movieManiaAPI = movieManiaInstance;
};

export { movieManiaAPI };
