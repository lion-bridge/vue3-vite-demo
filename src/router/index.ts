import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';


/**
 * @link https://next.router.vuejs.org/zh/guide/advanced/lazy-loading.html
 */
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/view/StartPage.vue')
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});
export default router;