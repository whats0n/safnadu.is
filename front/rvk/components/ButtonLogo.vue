<template>
  <button
    type="button"
    class="btn-logo"
    :class="classes"
    @click.prevent="handleChangeTheme"
  >
    <Logo class="btn-logo__icon" />
  </button>
</template>

<script>
import { mapActions } from 'vuex'
import { MODULES, ACTIONS } from '~/helpers/constants'
import Logo from '~/components/Logo'

export default {
  name: 'ButtonLogo',
  components: {
    Logo
  },
  props: {
    type: {
      type: String,
      default: '',
      validator: value => !value.length || ['static'].includes(value)
    }
  },
  computed: {
    classes() {
      return this.type && `btn-logo_${this.type}`
    }
  },
  methods: {
    ...mapActions({
      handleChangeTheme: `${MODULES.COMMON}/${ACTIONS.CHANGE_THEME}`
    })
  }
}
</script>
