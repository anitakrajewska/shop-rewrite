import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import ProductsList from './pages/ProductsList.vue';
import UserCart from './pages/UserCart.vue';
import ShopAdmin from './pages/ShopAdmin.vue';

const history = createWebHistory();

const routes = [
  { path: '/', redirect: '/products' },
  { path: '/products', component: ProductsList },
  { path: '/cart', component: UserCart },
  { path: '/admin', component: ShopAdmin },
];

const router = createRouter({
  history,
  routes: routes as RouteRecordRaw[]
});

export default router;
