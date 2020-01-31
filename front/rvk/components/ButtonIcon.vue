<template>
  <component :is="tag" class="btn-icon" v-bind="$attrs" v-on="$listeners">
    <Icon :name="name" class="btn-icon__figure" />
    <span class="btn-icon__text">{{ text }}</span>
  </component>
</template>

<script>
import Icon from '~/components/Icon'
export default {
  name: 'ButtonIcon',
  components: { Icon },
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    name: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
