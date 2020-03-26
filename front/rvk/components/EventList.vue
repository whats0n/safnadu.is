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
          <div class="event-list__box">
            <p>
              Á meðan á samkomubanni stendur eru söfn borgarinnar, leikhús og
              aðrir viðburðastaðir lokaðir.
            </p>
            <p>
              Við hvetjum ykkur til að njóta fjölbreyttra viðburða sem streymt
              er á netinu og safna góðum minningum heima.
            </p>
          </div>
          <!-- <a
            href="https://safnanott.safnadu.is/"
            target="_blank"
            class="event-list__intro"
          >
            <img
              src="~/static/img/safnanott.jpg"
              alt=""
              class="event-list__intro-img"
            />
          </a> -->
          <div
            v-if="isLoading && !disableLoader"
            class="title-md event-list__loader"
          >
            Hleð...
          </div>
          <div v-else-if="hasItems" class="event-list__items">
            <div
              v-for="(item, i) in items"
              ref="card"
              :key="item.id + '_' + i || Math.random()"
              :data-id="item.id"
              class="event-list__item"
            >
              <NuxtLink
                v-if="!(item && item.blank)"
                :to="item.page"
                class="event-list__item-link"
                :class="{
                  'is-hidden': hidden[item.id],
                  'is-extended': item.bannerAd
                }"
              >
                <div
                  class="event-list__item-img"
                  :style="{
                    'background-image': `url(${item.img})`
                  }"
                >
                  <div v-if="!!item.date" class="event-list__item-date small">
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
                  <div class="event-list__item-time small">
                    <strong>{{ item.time }}</strong>
                  </div>
                </div>
              </NuxtLink>

              <a
                v-else
                :href="item.page"
                target="_blank"
                class="event-list__item-link"
                :class="{
                  'is-hidden': hidden[item.id],
                  'is-extended': item.bannerAd
                }"
              >
                <div
                  class="event-list__item-img"
                  :style="{
                    'background-image': `url(${item.img})`
                  }"
                >
                  <!-- <div v-if="!!item.date" class="event-list__item-date small">
                    <strong>{{ item.date }}</strong>
                  </div> -->
                </div>
                <!-- <div class="event-list__item-content">
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
                  <div class="event-list__item-time small">
                    <strong>{{ item.time }}</strong>
                  </div>
                </div> -->
              </a>
            </div>
          </div>
          <div v-else class="title-md event-list__empty">
            Fann ekkert. Prófaðu að breyta leitarskilyrðunum.
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
import triggerScroll from '~/helpers/triggerScroll'

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
    date: null,
    disableLoader: false
  }),
  computed: {
    ...mapGetters({
      items: `${MODULES.COMMON}/${GETTERS.EVENTS_TILES}`,
      isLoading: `${MODULES.COMMON}/${GETTERS.LOADING}`
    }),
    hasItems() {
      return !!this.items.length
    },
    isClient() {
      return processClient(() => true)
    },
    fullDate() {
      const { date } = this
      if (isExist(date)) {
        const isRange = Array.isArray(date)
        const d = new Date(isRange ? date[0] : date)
        const month = prettyDate.months[d.getMonth()]
        const weekDay = prettyDate.days[d.getDay()]
        const day = d.getDate()
        const year = d.getFullYear()

        if (isRange && date[0] !== date[1]) {
          const dTo = new Date(date[1])
          const dayTo = dTo.getDate()
          const monthTo = prettyDate.months[dTo.getMonth()]
          const yearTo = dTo.getFullYear()

          return year !== yearTo
            ? `${month} ${year} - ${monthTo} ${yearTo}`
            : year === yearTo && month !== monthTo
            ? `${month} - ${monthTo} ${year}`
            : `${day} - ${dayTo}. ${month} ${year}`
        } else {
          return `${weekDay} ${day}. ${month} ${year}`
        }
      } else {
        return date
      }
    }
  },
  watch: {
    isLoading(isLoading) {
      if (!isLoading) {
        this.disableLoader = false
        this.$nextTick(() => triggerScroll())
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
        card.some((item, i) => {
          const rect = item.getBoundingClientRect()
          if (
            !(rect.top + rect.height / 2 < height) &&
            !date &&
            !item.querySelector('.is-extended')
          ) {
            date = item.dataset.id
            const card = this.items.find(card => card.id === item.dataset.id)
            this.date = isExist(card) ? card.dateRange || card.startDate : null
            return true
          }
          return false
        })
    },
    handleInfiniteScroll() {
      const { y } = getScrollPosition()
      const documentHeight = document.body.scrollHeight

      if (y + (window.innerHeight + 10) < documentHeight || this.isLoading)
        return
      this.disableLoader = true
      this.requestEvents()
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
