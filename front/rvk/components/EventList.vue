<template>
  <div class="event-list" data-section="event-list">
    <Header
      ref="header"
      :is-visible="isVisible"
      :date="fullDate"
      @scroll="handleScroll"
      @fixed="handleFixed"
    />
    <Filters :is-visible="isFiltersVisible" />
    <div class="container event-list__container">
      <div class="content">
        <div class="event-list__inner">
          <div class="event-list__items">
            <div
              v-for="item in items"
              ref="card"
              :key="item.id"
              :data-id="item.id"
              class="event-list__item"
            >
              <NuxtLink
                :to="item.page"
                class="event-list__item-link"
                :class="{
                  'is-hidden': hidden[item.id]
                }"
              >
                <div
                  class="event-list__item-img"
                  :style="{
                    'background-image': `url(${item.img})`
                  }"
                >
                  <div class="event-list__item-date small">
                    <strong>{{ item.date }}</strong>
                  </div>
                </div>
                <div class="event-list__item-content">
                  <Dot
                    v-if="isClient && isDot"
                    class="event-list__item-title title-md"
                    :msg="item.title"
                    :line="2"
                  ></Dot>
                  <div v-else class="event-list__item-title title-md">
                    {{ item.title }}
                  </div>
                  <div class="event-list__item-text small">{{ item.text }}</div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import { MODULES, GETTERS, ACTIONS } from '~/helpers/constants'
import processClient from '~/helpers/processClient'
import getScrollPosition from '~/helpers/getScrollPosition'
import debounce from '~/helpers/debounce'
import isExist from '~/helpers/isExist'
import prettyDate from '~/helpers/prettyDate'

import Header from '~/components/Header'
import Filters from '~/components/Filters'

export default {
  name: 'EventList',
  components: { Header, Filters },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    hidden: {},
    isFiltersVisible: false,
    isDot: true,
    date: null
  }),
  computed: {
    ...mapGetters({
      items: `${MODULES.COMMON}/${GETTERS.EVENTS_TILES}`,
      isLoading: `${MODULES.COMMON}/${GETTERS.LOADING}`
    }),
    isClient() {
      return processClient(() => true)
    },
    fullDate() {
      const { date } = this
      if (isExist(date)) {
        const d = new Date(date)
        const month = prettyDate.months[d.getMonth()]
        const weekDay = prettyDate.days[d.getDay()]
        const day = d.getDate()
        return `${weekDay} ${day}. ${month}`
      } else {
        return date
      }
    }
  },
  mounted() {
    this.toggleInfiniteScroll(true)
    this.toggleReInitDotOnResize(true)
  },
  destroyed() {
    this.toggleInfiniteScroll(false)
    this.toggleReInitDotOnResize(false)
  },
  methods: {
    ...mapActions({
      requestEvents: `${MODULES.COMMON}/${ACTIONS.REQUEST_EVENTS}`
    }),
    handleFixed(isFixed) {
      this.isFiltersVisible = isFixed
    },
    handleScroll({ height }) {
      const { card } = this.$refs
      let date = null
      Array.isArray(card) &&
        card.forEach((item, i) => {
          this.$set(
            this.hidden,
            item.dataset.id,
            item.getBoundingClientRect().top < height / 2
          )

          if (!(item.getBoundingClientRect().top < height / 2) && !date) {
            date = item.dataset.id
            const card = this.items.find(card => card.id === item.dataset.id)
            this.date = isExist(card) ? card.startDate : null
          }
        })
    },
    handleInfiniteScroll() {
      const { y } = getScrollPosition()
      const documentHeight = document.body.scrollHeight

      if (y + (window.innerHeight + 10) < documentHeight || this.isLoading)
        return
      this.requestEvents()
      console.log('final')
    },
    toggleInfiniteScroll(isActive) {
      processClient(() => {
        if (isActive) {
          window.addEventListener('scroll', this.handleInfiniteScroll)
        } else {
          window.removeEventListener('scroll', this.handleInfiniteScroll)
        }
      })
    },
    reInitDotOnResize() {
      debounce(() => {
        this.isDot = false
        this.$nextTick(() => {
          this.isDot = true
        })
      }, 50)
    },
    toggleReInitDotOnResize(isActive) {
      processClient(() => {
        if (isActive) {
          window.addEventListener('resize', this.reInitDotOnResize)
        } else {
          window.removeEventListener('resize', this.reInitDotOnResize)
        }
      })
    }
  }
}
</script>
