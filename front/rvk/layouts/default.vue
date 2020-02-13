<template>
  <div class="layout" :class="classes">
    <div class="layout__inner">
      <WithScroll
        v-if="hasWelcome"
        :loaded="hasWelcome"
        :class="{
          'is-hidden': isHiddenWelcome
        }"
        @visible="showWelcome"
      >
        <template #default="{ isVisible }">
          <Welcome ref="welcome" :is-visible="isVisible" />
        </template>
      </WithScroll>
      <template v-else>
        <ButtonLogo type="static" />
      </template>
      <nuxt />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

import { GETTERS, MODULES, ACTIONS, MUTATIONS } from '~/helpers/constants'
import processClient from '~/helpers/processClient'
import getScrollPosition from '~/helpers/getScrollPosition'
import scrollTo from '~/helpers/scrollTo'

import WithScroll from '~/components/WithScroll'
import ButtonLogo from '~/components/ButtonLogo'
import Welcome from '~/components/Welcome'

export default {
  name: 'DefaultLayout',
  components: { WithScroll, Welcome, ButtonLogo },
  data: vm => ({
    isAnimated: false,
    isLoaded: vm.$route.name !== 'index', // to show/hide content with transition
    hasWelcome: vm.$route.name === 'index'
  }),
  computed: {
    ...mapGetters({
      themeClass: `${MODULES.COMMON}/${GETTERS.THEME}`,
      eventListScrollPosition: `${MODULES.COMMON}/${GETTERS.EVENT_LIST_SCROLL_POSITION}`
    }),
    isHiddenWelcome() {
      return this.$route.name !== 'index'
    },
    classes() {
      return [
        this.themeClass,
        {
          'is-animated': this.isAnimated,
          'is-visible': this.isLoaded
        }
      ]
    }
  },
  watch: {
    $route(newRoute, oldRoute) {
      if (oldRoute.name === 'index' || oldRoute.name === 'web')
        this.setEventListScrollPosition(getScrollPosition().y)
      // show welcome after page transition (assets/styles/_page-transition.scss)
      setTimeout(() => {
        this.hasWelcome = newRoute.name === 'index'
      }, 500)
      this.isLoaded = newRoute.name !== 'index'
      this.scrollBackOnIndexPage()
    }
  },
  created() {
    this.requestEvents()
    this.checkTouch()
    processClient(() => {
      this.setRandomTheme()
      let counter = localStorage.getItem('__refreshCounter')
      counter = isFinite(+counter) ? +counter : 1
      const isMain = counter >= 6
      counter = isMain ? 1 : counter + 1
      localStorage.setItem('__refreshCounter', counter)
      this.setCounter(counter)
    })
  },
  methods: {
    ...mapActions({
      requestEvents: `${MODULES.COMMON}/${ACTIONS.REQUEST_EVENTS}`,
      setEventListScrollPosition: `${MODULES.COMMON}/${ACTIONS.SET_EVENT_LIST_SCROLL_POSITION}`,
      setRandomTheme: `${MODULES.COMMON}/${ACTIONS.SET_RANDOM_THEME}`
    }),
    ...mapMutations({
      setCounter: `${MODULES.COMMON}/${MUTATIONS.SET_COUNTER}`
    }),
    showWelcome() {
      if (!this.isAnimated) {
        this.isLoaded = true
        this.$refs.welcome.show().call(() => {
          this.isAnimated = true
        })
      } else {
        this.$refs.welcome
          .show({
            onComplete: () => this.scrollBackOnIndexPage()
          })
          .progress(1)
      }
    },
    scrollBackOnIndexPage() {
      this.$nextTick(() =>
        setTimeout(() => {
          if (this.$route.name !== 'index') return
          if (this.eventListScrollPosition)
            scrollTo({
              y: this.eventListScrollPosition,
              duration: 0
            }).call(() => {
              this.isLoaded = true
            })
          else {
            this.isLoaded = true
          }
        }, 500)
      )
    },
    checkTouch() {
      processClient(() => {
        'ontouchstart' in window && document.body.classList.add('is-touch')
      })
    }
  }
}
</script>
