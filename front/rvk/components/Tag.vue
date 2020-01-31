<template>
  <div
    class="tag"
    :class="{
      'is-selected': isSelected
    }"
  >
    <button type="button" class="tag__btn" @click.prevent="$emit('click')">
      <slot name="default"></slot>
    </button>
    <button type="button" class="tag__close" @click.prevent="$emit('clear')">
      <Icon name="close" class="tag__close-icon" />
    </button>
  </div>
</template>

<script>
import Icon from '~/components/Icon'
export default {
  name: 'Tag',
  components: {
    Icon
  },
  props: {
    isSelected: {
      type: Boolean,
      default: false
    }
  }
}
</script>
