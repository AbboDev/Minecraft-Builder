/**
 *
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../routes/routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history',
});

export default router;
