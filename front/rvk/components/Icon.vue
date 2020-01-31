<template>
  <i :class="className"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    className() {
      return `icon icon-${this.name}`
    }
  }
}
</script>
