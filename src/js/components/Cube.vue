<template lang="html">
  <div :class="[blockClass, computedClass]"
    :data-x="x"
    :data-y="y"
    :data-type="identifier"
    :style="{
      top: topOffset,
      left: leftOffset
    }"
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
      topOffset: this.calculateOffsetPercentage(this.x),
      leftOffset: this.calculateOffsetPercentage(this.y),
    };
  },
  computed: {
    computedClass: function() {
      return this.blockClass + '--' + this.identifier;
    }
  },
  watch: {
    x: function(val) {
      this.leftOffset = this.calculateOffsetPercentage(val);
    },
    y: function(val) {
      this.topOffset = this.calculateOffsetPercentage(val);
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
