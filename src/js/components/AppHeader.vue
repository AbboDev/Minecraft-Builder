<template lang="html">
  <header class="o-header">
    <div class="o-container">
      <div class="o-container__row">
        <div class="o-container__row__column o-container__row__column--6">
          <img src="" :alt="$appName" />
        </div>
        <div class="o-container__row__column o-container__row__column--6 u-text--right">
          <nav>
            <router-link to="/">Home</router-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'app-header',
};
</script>
