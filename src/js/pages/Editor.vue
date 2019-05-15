<template>
  <div class="o-page">
    <div class="o-page__face o-page__face--front">
      <div class="o-container o-container--padded">
        <div class="o-container__row u-text--center">
          <div class="o-container__row__column o-container__row__column--12">
            <h1>Editor</h1>
            <section class="o-scene">
              <cube v-for="cube in sortedCubes"
                :x="cube.x"
                :y="cube.y"
                :identifier="cube.identifier"
                v-bind:key="cube.id"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cube from '../components/Cube.vue';

export default {
  name: 'page-editor',
  data: () => ({
    cubes: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
      {
        x: 2,
        y: 0,
      },
      {
        x: 1,
        y: 1,
        identifier: 'gravel'
      },
      {
        x: 1,
        y: 2,
        identifier: 'gravel'
      }
    ]
  }),
  computed: {
    sortedCubes: function() {
      return this.cubes.slice()
        .sort(function(a, b) {
          if (a.x < b.x) {
            return -1;
          } else if (a.x > b.x) {
            return 1;
          } else {
            return 0;
          }
        })
        .sort(function(a, b) {
          if (a.y < b.y) {
            return -1;
          } else if (a.y > b.y) {
            return 1;
          } else {
            return 0;
          }
        })
        .reverse();
    }
  },
  components: {
    Cube
  }
};
</script>
