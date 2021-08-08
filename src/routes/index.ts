import loadable from '@loadable/component';

const PageNotFound = loadable(() => import('../componenets/common/page_not_found/PageNotFound'));
const PageLayoutController = loadable(
    () => import('../componenets/page_layout/page_layout_controller/PageLayoutController'),
);

export const routes = [
    {
        path: '/:id',
        component: PageLayoutController,
    },
    {
        path: '/watchlist',
        component: PageLayoutController,
    },
    {
        path: '/movies',
        component: PageLayoutController,
    },
    {
        path: '/genre/:genreId',
        component: PageLayoutController,
    },
    {
        path: '/movies/:movieId',
        component: PageLayoutController,
    },
    {
        path: '/',
        component: PageLayoutController,
    },
    {
        path: '*',
        component: PageNotFound,
    },
];
