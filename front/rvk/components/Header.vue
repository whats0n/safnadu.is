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
        <div class="header__title-wrapper">
          <span class="title-xl header__title" @click="closePopupOrScrollTop">
            Safnaðu
          </span>
          <div v-if="!!randomLine" class="header__sub-info">
            - {{ randomLine }}
          </div>
        </div>
        <ul class="header__tabs">
          <!-- <li class="header__tabs-item">
            <a
              href="https://jolavaettir.safnadu.is/"
              target="_blank"
              class="header__tabs-btn"
              :class="{
                'is-active': false
              }"
            >
              jólavættir
            </a>
          </li> -->
          <li v-for="item in tabs" :key="item.target" class="header__tabs-item">
            <NuxtLink
              v-if="item.isLink"
              :to="item.href"
              class="header__tabs-btn"
            >
              {{ item.text }}
            </NuxtLink>
            <button
              v-else
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
        <button
          v-if="hasLogo"
          type="button"
          class="header__logo"
          @click.prevent="handleChangeTheme"
        >
          <Icon name="rvk-logo" class="header__logo-in" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { MODULES, GETTERS, ACTIONS } from '~/helpers/constants'
import processClient from '~/helpers/processClient'

import Icon from '~/components/Icon'

export default {
  name: 'Header',
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      default: '',
      validator: value => !value.length || ['static'].includes(value)
    },
    date: {
      type: String,
      default: ''
    },
    hasLogo: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    isFixed: false,
    minHeight: null
  }),
  computed: {
    ...mapGetters({
      tabs: `${MODULES.COMMON}/${GETTERS.VIEWS}`,
      words: `${MODULES.COMMON}/${GETTERS.EVENT_TYPES}`,
      randomLine: `${MODULES.COMMON}/${GETTERS.RANDOM_LINE}`
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
      handleChangeTheme: `${MODULES.COMMON}/${ACTIONS.CHANGE_THEME}`,
      changeView: `${MODULES.COMMON}/${ACTIONS.CHANGE_VIEW}`,
      resetFilters: `${MODULES.COMMON}/${ACTIONS.RESET_FILTERS}`,
      requestItems: `${MODULES.COMMON}/${ACTIONS.REQUEST_EVENTS}`
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
    },
    closePopupOrScrollTop() {
      if (this.$route.path === '/') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        // this.handleTypeChange(this.words[0])
        this.resetFilters()
        setTimeout(() => {
          this.requestItems({ clear: true })
        }, 1000)
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>
