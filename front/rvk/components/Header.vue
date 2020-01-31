<template>
  <header
    ref="main"
    class="header"
    :class="classes"
    :style="{
      'min-height': minHeight
    }"
  >
    <div
      ref="inner"
      class="header__inner"
      :class="{
        'is-fixed': isFixed
      }"
    >
      <div class="container header__container">
        <div class="title-xl header__title">Safnaðu</div>
        <ul class="header__tabs">
          <li v-for="item in tabs" :key="item.target" class="header__tabs-item">
            <button
              class="header__tabs-btn"
              :class="{
                'is-active': item.isActive
              }"
              @click.prevent="changeView(item.target)"
            >
              {{ item.text }}
            </button>
          </li>
        </ul>
        <div v-if="hasDate" class="header__date">
          <div class="header__date-in">{{ date }}</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { MODULES, GETTERS, ACTIONS } from '~/helpers/constants'
import processClient from '~/helpers/processClient'

export default {
  name: 'Header',
  props: {
    type: {
      type: String,
      default: '',
      validator: value => !value.length || ['static'].includes(value)
    },
    date: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    isFixed: false,
    minHeight: null
  }),
  computed: {
    ...mapGetters({
      tabs: `${MODULES.COMMON}/${GETTERS.VIEWS}`
    }),
    classes() {
      return this.type && `header_${this.type}`
    },
    isStatic() {
      return this.type === 'static'
    },
    hasDate() {
      return this.date && this.date.length
    }
  },
  mounted() {
    processClient(
      () =>
        !this.isStatic && window.addEventListener('scroll', this.handleScroll)
    )
  },
  destroyed() {
    processClient(
      () =>
        !this.isStatic &&
        window.removeEventListener('scroll', this.handleScroll)
    )
  },
  methods: {
    ...mapActions({
      changeView: `${MODULES.COMMON}/${ACTIONS.CHANGE_VIEW}`
    }),
    handleScroll() {
      const { inner, main } = this.$refs

      if (main.getBoundingClientRect().top > 0) {
        this.isFixed = false
        this.minHeight = null
        this.$emit('fixed', false)
      } else {
        this.isFixed = true
        this.minHeight = `${inner.offsetHeight}px`
        this.$emit('fixed', true)
      }

      this.$emit('scroll', {
        height: inner.offsetHeight
      })
    }
  }
}
</script>
