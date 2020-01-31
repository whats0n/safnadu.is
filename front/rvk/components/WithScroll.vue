<template>
  <div
    v-scroll="handleScroll"
    :style="!isVisible && !loaded && { visibility: 'hidden' }"
  >
    <slot :isVisible="isVisible"></slot>
  </div>
</template>

<script>
import triggerScroll from '~/helpers/triggerScroll'

export default {
  name: 'WithScroll',
  props: {
    name: {
      type: String,
      default: 'on scroll'
    },
    once: {
      type: Boolean,
      default: true
    },
    loaded: {
      type: null,
      default: true
    }
  },
  data: () => ({
    isVisible: false
  }),
  watch: {
    loaded: {
      handler(isLoaded) {
        isLoaded && this.$nextTick(triggerScroll)
      }
    }
  },
  methods: {
    handleScroll(event) {
      if (
        event.y + event.windowHeight >= event.elementOffsetTop + 150 &&
        !!this.loaded
      ) {
        this.isVisible = true
        this.$emit('visible')
        return this.once
      }
    }
  }
}
</script>
