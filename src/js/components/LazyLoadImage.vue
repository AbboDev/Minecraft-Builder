<template>
  <div
    v-lazyload="'js-lazyload'"
    :class="[
      'o-box',
      ratio ? `o-box--ratio o-box--ratio-${ratio}` : ''
    ]">
    <div
      class="o-box__image o-box__image--fill js-lazyload"
      :data-url="source"
    >
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'LazyLoadImage',
  props: {
    source: {
      type: String,
      required: true
    },
    ratio: {
      type: String,
      required: false
    }
  }
};
</script>
