import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/Home.vue';
import About from '@/page/About.vue';
import Page404 from '@/page/Page404.vue';
import InProgress from '@/page/InProgress.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/new',
      name: 'inprogress',
      component: InProgress,
    },
    {
      path: '/*',
      name: 'page404',
      component: Page404,
    },

  ],
});
