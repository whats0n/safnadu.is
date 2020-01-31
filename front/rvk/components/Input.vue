<template>
  <input
    :value="modelValue"
    class="input"
    :class="{
      'is-error': isError
    }"
    @input="handleInput"
    @blur="$emit('blur')"
  />
</template>

<script>
export default {
  name: 'Input',
  model: {
    prop: 'modelValue',
    event: 'model-changed'
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    isError: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('model-changed', e.target.value)
      this.$emit('input', e)
    }
  }
}
</script>
