import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        beforeEnter: (to, from, next) => {
            store.commit('changeMainActive', { name: 'home' });
            store.commit('changeSubActive', { name: 'home' });
            next();
        }
    },
    {
        path: '/my',
        name: 'my',
        component: () =>
            import(/* webpackChunkName: "my" */ '../views/MyMusic.vue'),
        beforeEnter: (to, from, next) => {
            store.commit('changeMainActive', { name: 'my' });
            next();
        }
    },
    {
        path: '/friend',
        name: 'friend',
        component: () =>
            import(/* webpackChunkName: "friend" */ '../views/Friend'),
        beforeEnter: (to, from, next) => {
            store.commit('changeMainActive', { name: 'friend' });
            next();
        }
    },
    {
        path: '/download',
        name: 'download',
        component: () =>
            import(/* webpackChunkName: "friend" */ '../views/Download'),
        beforeEnter: (to, from, next) => {
            store.commit('changeMainActive', { name: 'download' });
            next();
        }
    },
    {
        path: '/toplist',
        name: 'toplist',
        component: () =>
            import(/* webpackChunkName: "friend" */ '../views/Toplist'),
        beforeEnter: (to, from, next) => {
            store.commit('changeSubActive', { name: 'toplist' });
            next();
        }
    },
    {
        path: '/playlist',
        name: 'playlist',
        component: () =>
            import(/* webpackChunkName: "friend" */ '../views/Playlist'),
        beforeEnter: (to, from, next) => {
            store.commit('changeSubActive', { name: 'playlist' });
            next();
        }
    },
    {
        path: '/radio',
        name: 'radio',
        component: () =>
            import(/* webpackChunkName: "friend" */ '../views/Radio'),
        beforeEnter: (to, from, next) => {
            store.commit('changeSubActive', { name: 'radio' });
            next();
        }
    },
    {
        path: '/artist',
        name: 'artist',
        component: () =>
            import(/* webpackChunkName: "friend" */ '../views/Artist'),
        beforeEnter: (to, from, next) => {
            store.commit('changeSubActive', { name: 'artist' });
            next();
        }
    },
    {
        path: '/album',
        name: 'album',
        component: () =>
            import(/* webpackChunkName: "friend" */ '../views/Album'),
        beforeEnter: (to, from, next) => {
            store.commit('changeSubActive', { name: 'album' });
            next();
        }
    }
];

const router = new VueRouter({
    routes
});

export default router;
