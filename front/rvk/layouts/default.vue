<template>
  <div class="layout" :class="classes">
    <div class="layout__inner">
      <WithScroll v-if="hasWelcome" :loaded="hasWelcome" @visible="showWelcome">
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
import { mapGetters, mapActions } from 'vuex'

import { GETTERS, MODULES, ACTIONS } from '~/helpers/constants'
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
      if (oldRoute.name === 'index')
        this.setEventListScrollPosition(getScrollPosition().y)
      // show welcome after page transition (assets/styles/_page-transition.scss)
      setTimeout(() => {
        this.hasWelcome = newRoute.name === 'index'
      }, 500)
      this.isLoaded = newRoute.name !== 'index'
    }
  },
  created() {
    this.requestCount()
    this.requestEvents()
    this.checkTouch()
  },
  methods: {
    ...mapActions({
      requestEvents: `${MODULES.COMMON}/${ACTIONS.REQUEST_EVENTS}`,
      requestCount: `${MODULES.COMMON}/${ACTIONS.REQUEST_COUNT}`,
      setEventListScrollPosition: `${MODULES.COMMON}/${ACTIONS.SET_EVENT_LIST_SCROLL_POSITION}`
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
            onComplete: () =>
              this.$nextTick(() =>
                setTimeout(() => {
                  this.$route.name === 'index' &&
                    !!this.eventListScrollPosition &&
                    scrollTo({
                      y: this.eventListScrollPosition,
                      duration: 0
                    }).call(() => {
                      this.isLoaded = true
                    })
                }, 500)
              )
          })
          .progress(1)
      }
    },
    checkTouch() {
      processClient(() => {
        'ontouchstart' in window && document.body.classList.add('is-touch')
      })
    }
  }
}
</script>
