<template lang="html">
  <div ref="cube"
    :class="[blockClass, computedClass]"
    :data-x="x"
    :data-y="y"
    :data-z="z"
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
      xOffset: this.calculateOffsetPercentage(this.x),
      yOffset: this.calculateOffsetPercentage(-this.y),
      zOffset: this.calculateOffsetPixel(-this.z),
    };
  },
  computed: {
    computedClass: function() {
      return this.blockClass + '--' + this.identifier;
    },
    style: function() {
      return {
        width: `${this.width}px`,
        height: `${this.width}px`,
        transform: `translate3d(${this.xOffset}, ${this.yOffset}, ${this.zOffset})`
      };
    }
  },
  watch: {
    x: function(val) {
      this.xOffset = this.calculateOffsetPercentage(val);
    },
    y: function(val) {
      this.yOffset = this.calculateOffsetPercentage(-val);
    },
    z: function(val) {
      this.zOffset = this.calculateOffsetPixel(-val);
    }
  },
  methods: {
    calculateOffsetPercentage: function(val) {
      return (val * 100) + '%';
    },
    calculateOffsetPixel(val) {
      return ((-this.width / 2) + (this.width * val)) + 'px';
    },
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
    z: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 64
    },
    identifier: {
      type: String,
      default: 'ground'
    }
  }
};
</script>
