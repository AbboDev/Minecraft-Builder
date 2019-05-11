/**
 *
 */

import Home from '../pages/Home.vue';
import Editor from '../pages/Editor.vue';
import NotFound from '../pages/NotFound.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/editor',
    component: Editor
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
