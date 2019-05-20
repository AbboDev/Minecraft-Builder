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
                :z="cube.z"
                :width="defaultWidìth"
                :identifier="cube.identifier"
                v-bind:key="cube.id"
              />
            </section>
            <div style="margin-top:20px">
              <label for="x">x</label>
              <input
                id="x"
                ref="x"
                name="x"
                min="0"
                step="1"
                value="0"
                type="number"
              />
            </div>
            <div style="margin-top:20px">
              <label for="y">y</label>
              <input
                id="y"
                ref="y"
                name="y"
                min="0"
                step="1"
                value="0"
                type="number"
              />
            </div>
            <div style="margin-top:20px">
              <label for="z">z</label>
              <input
                id="z"
                ref="z"
                name="z"
                min="0"
                step="1"
                value="0"
                type="number"
              />
            </div>
            <div style="margin-top:20px">
              <button type="button" id="button" name="button" @click="addCube">Add cube</button>
            </div>
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
    defaultWidìth: 64,
    cubes: []
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
        .sort(function(a, b) {
          if (a.z < b.z) {
            return -1;
          } else if (a.z > b.z) {
            return 1;
          } else {
            return 0;
          }
        })
        .reverse();
    }
  },
  methods: {
    addCube: function() {
      let cube = {
        x: parseInt(this.$refs.x.value),
        y: parseInt(this.$refs.y.value),
        z: parseInt(this.$refs.z.value)
      };

      // eslint-disable-next-line no-console
      console.log(this.cubes);
      let exist = this.cubes.some(function(currentCube) {
        return cube.x === currentCube.x
          && cube.y === currentCube.y
          && cube.z === currentCube.z;
      });

      if (exist === false) {
        this.cubes.push(cube);
      }
    }
  },
  components: {
    Cube
  }
};
</script>
