<template lang="html">
  <div :class="[blockClass, computedClass]"
    :data-x="x"
    :data-y="y"
    :data-type="identifier"
    :style="style"
  >
    <div class="o-cube__face o-cube__face--front"></div>
    <div class="o-cube__face o-cube__face--back"></div>
    <div class="o-cube__face o-cube__face--right"></div>
    <div class="o-cube__face o-cube__face--left"></div>
    <div class="o-cube__face o-cube__face--top"></div>
    <div class="o-cube__face o-cube__face--bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'cube',
  data: function() {
    return {
      blockClass: 'o-cube',
      yOffset: this.calculateOffsetPercentage(this.y),
      xOffset: this.calculateOffsetPercentage(this.x),
    };
  },
  computed: {
    computedClass: function() {
      return this.blockClass + '--' + this.identifier;
    },
    style: function() {
      // eslint-disable-next-line no-console
      console.log(this.$el);
      // eslint-disable-next-line no-console
      console.log(`translate3d(${this.xOffset}, -${this.yOffset}, -32px)`);
      return {
        transform: `translate3d(${this.xOffset}, -${this.yOffset}, -32px)`
      };
    }
  },
  watch: {
    x: function(val) {
      this.xOffset = this.calculateOffsetPercentage(val);
    },
    y: function(val) {
      this.yOffset = this.calculateOffsetPercentage(val);
    }
  },
  methods: {
    calculateOffsetPercentage: function(val) {
      return val * 100 + '%';
    }
  },
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    identifier: {
      type: String,
      default: 'ground'
    }
  }
};
</script>
