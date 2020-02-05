<template>
  <div class="event-details">
    <Header
      ref="header"
      :is-visible="isVisible"
      :date="pageData.fullDate"
      type="static"
    />
    <div v-if="hasPageData" class="container event-details__container">
      <div class="content">
        <div class="event-details__inner">
          <div class="event-details__box">
            <ul class="event-details__controls">
              <li v-if="hasMapLink" class="event-details__controls-item">
                <ButtonIcon
                  tag="a"
                  :href="pageData.mapLink"
                  :text="pageData.mapLinkText"
                  name="marker"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </li>
              <li class="event-details__controls-item">
                <ButtonIcon
                  v-if="hasPrevEventLink"
                  tag="NuxtLink"
                  :to="pageData.prevEventLink"
                  name="angle-left"
                  text="Go to previous event"
                />
                <ButtonIcon
                  v-else
                  type="button"
                  name="angle-left"
                  text="Go to previous event"
                />
              </li>
              <li class="event-details__controls-item">
                <ButtonIcon
                  v-if="hasNextEventLink"
                  tag="NuxtLink"
                  :to="pageData.nextEventLink"
                  name="angle-right"
                  text="Go to next event"
                />
                <ButtonIcon
                  v-else
                  type="button"
                  name="angle-right"
                  text="Go to previous event"
                />
              </li>
              <li class="event-details__controls-item">
                <ButtonIcon
                  tag="NuxtLink"
                  :to="eventListLink"
                  name="close"
                  text="Go to event list"
                />
              </li>
            </ul>
            <div class="event-details__box-in">
              <div class="event-details__main">
                <img
                  :src="pageData.img"
                  alt="main image"
                  class="event-details__img"
                />
                <div class="event-details__main-content">
                  <div class="title-md event-details__title">
                    {{ pageData.title }}
                  </div>
                  <div class="text event-details__text">
                    {{ pageData.text }}
                  </div>
                </div>
              </div>
              <div class="event-details__aside">
                <div class="title-md event-details__label">Upplýsingar</div>
                <ul class="text event-details__info">
                  <li class="event-details__info-item">
                    <div class="event-details__info-label">Tímasetning</div>
                    <div class="event-details__info-value">
                      {{ pageData.date }}
                      <template v-if="hasRange">
                        <br />á opnunartíma
                      </template>
                    </div>
                  </li>
                  <li class="event-details__info-item">
                    <div class="event-details__info-label">Staðsetning</div>
                    <div class="event-details__info-value">
                      <a
                        :href="pageData.mapLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="event-details__info-link"
                      >
                        {{ pageData.place }}
                      </a>
                    </div>
                  </li>
                  <li class="event-details__info-item">
                    <div class="event-details__info-label">Heimilisfang</div>
                    <div class="event-details__info-value">
                      {{ pageData.address }}
                    </div>
                  </li>
                </ul>
                <ul v-if="hasMedia" class="event-details__media">
                  <li
                    v-for="item in pageData.media"
                    :key="item.id"
                    class="event-details__media-item"
                  >
                    <a
                      :href="item.href"
                      class="event-details__media-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div class="event-details__media-figure">
                        <Icon
                          :name="item.icon"
                          class="event-details__media-icon"
                        />
                      </div>
                      <div class="event-details__media-text">
                        {{ item.text }}
                      </div>
                    </a>
                  </li>
                  <li class="event-details__media-item">
                    <a
                      href="#"
                      class="event-details__media-link"
                      @click.prevent="fbShare"
                    >
                      <div class="event-details__media-figure">
                        <Icon
                          name="facebook"
                          class="event-details__media-icon"
                        />
                      </div>
                      <div class="event-details__media-text">
                        Facebook
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container event-details__container">
      <div class="content">
        <div class="event-details__inner">
          <div class="event-details__box">
            <div class="title-md">
              Hleð...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { MODULES, GETTERS, ACTIONS, eventListLink } from '~/helpers/constants'
import isExist from '~/helpers/isExist'
import prettyDate from '~/helpers/prettyDate'

import Header from '~/components/Header'
import Icon from '~/components/Icon'
import ButtonIcon from '~/components/ButtonIcon'

export default {
  name: 'EventDetails',
  components: { Header, Icon, ButtonIcon },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isLoaded: false
  }),
  computed: {
    ...mapGetters({
      pageData: `${MODULES.COMMON}/${GETTERS.EVENT_DETAILS}`
    }),
    eventListLink() {
      return eventListLink
    },
    hasControls() {
      return this.hasPageData && this.hasPrevEventLink && this.hasNextEventLink
    },
    hasPageData() {
      return isExist(this.pageData) && !!Object.keys(this.pageData).length
    },
    hasRange() {
      return this.hasPageData && this.pageData.hasRange
    },
    hasMedia() {
      return (
        this.hasPageData &&
        Array.isArray(this.pageData.media) &&
        this.pageData.media.length
      )
    },
    hasMapLink() {
      return this.hasPageData && !!this.pageData.mapLink
    },
    hasPrevEventLink() {
      return this.hasPageData && !!this.pageData.prevEventLink
    },
    hasNextEventLink() {
      return this.hasPageData && !!this.pageData.nextEventLink
    },
    fullDate() {
      if (!this.hasPageData) return null

      const date = this.pageData.startDate
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
  watch: {
    '$route.query.id': {
      immediate: true,
      handler(id) {
        this.isLoaded = false
        if (isExist(id) && id.length) {
          this.clearEvent()
          this.requestEvent(this.$route.query.id)
            .then(data => {
              this.isLoaded = true
              if (isExist(data)) return
              this.$router.push('/')
            })
            .catch(() => this.$router.push('/'))
        } else {
          this.$router.push('/')
        }
      }
    }
  },
  methods: {
    ...mapActions({
      requestEvent: `${MODULES.COMMON}/${ACTIONS.REQUEST_EVENT_DETAILS}`,
      clearEvent: `${MODULES.COMMON}/${ACTIONS.CLEAR_EVENT_DETAILS}`
    }),
    fbShare() {
      const url = window.location.href
      const shareUrl =
        'https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(url)
      const popupParams =
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600'
      window.open(shareUrl, '', popupParams)
    }
  }
}
</script>
