<template>
  <div id="app">
    <app-header />

    <main class="o-main">
      <transition>
        <router-view :key="$route.params.id"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import '../scss/app.scss';

import AppHeader from './components/AppHeader.vue';

export default {
  name: 'app',
  data: () => ({
  }),
  components: {
    AppHeader
  }
};
</script>
