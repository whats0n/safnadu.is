<template>
  <div ref="select" class="select">
    <div class="select__header" @click.prevent="toggle">
      <div class="select__value">
        <slot name="value" :value="value">{{ value.text }}</slot>
      </div>
      <div class="select__arrow">></div>
    </div>
    <div v-if="hasOptions && isOpened" class="select__body">
      <ul class="select__list">
        <li
          v-for="option in options"
          :key="option.id"
          class="select__option"
          @click.prevent="handleChange(option)"
        >
          <slot name="option">{{ option.text }}</slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import isExist from '~/helpers/isExist'
import processClient from '~/helpers/processClient'

export default {
  name: 'Select',
  props: {
    options: {
      type: Array,
      default: () => [],
      validator: value =>
        !value.length ||
        value.every(option => isExist(option.id) && isExist(option.text))
    }
  },
  data: () => ({
    isOpened: false
  }),
  computed: {
    hasOptions() {
      return this.options.length
    },
    value() {
      return this.options.find(option => option.isSelected) || {}
    }
  },
  watch: {
    isOpened(isOpened) {
      processClient(() => {
        isOpened
          ? document.addEventListener('click', this.handleClose)
          : document.removeEventListener('click', this.handleClose)
      })
    }
  },
  methods: {
    toggle() {
      this.isOpened ? this.close() : this.open()
    },
    close() {
      this.isOpened = false
    },
    open() {
      this.isOpened = true
    },
    handleChange(option) {
      this.$emit('change', option)
      this.close()
    },
    handleClose(e) {
      const select = e.target.closest('.select')
      if (select && select === this.$refs.select) return
      this.close()
    }
  }
}
</script>
