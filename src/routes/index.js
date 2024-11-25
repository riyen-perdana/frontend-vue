//import vue router
import { createRouter, createWebHistory } from 'vue-router';

//import js-cookies
import Cookie from 'js-cookie';

//get token
const getToken = () => Cookie.get('token');

//define routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/auth/register.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/login.vue'),
    },
    {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: () => import('../views/admin/dashboard/index.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/users',
        name: 'users',
        component: () => import('../views/admin/users/index.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/users/create',
        name: 'user-create',
        component: () => import('../views/admin/users/create.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/users/:id',
        name: 'user-edit',
        component: () => import('../views/admin/users/edit.vue'),
        meta: { requiresAuth: true }
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes
})

//router guard
router.beforeEach((to, from, next) => {
    
    //Get Token
    const token = getToken();

    // Jika rute tujuan membutuhkan otentikasi dan pengguna tidak memiliki token
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        next({ name: 'login' });

    // Jika rute tujuan adalah halaman login atau register dan pengguna sudah login
    } else if ((to.name === 'login' || to.name === 'register') && token) {
        next({ name: 'dashboard' });
    } else {
        next();
    }
});

export default router