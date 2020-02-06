<template>
  <div
    class="filters"
    :class="{
      'is-visible': isVisible,
      'is-opened': isOpened
    }"
  >
    <div class="filters__wrapper">
      <div class="filters__container">
        <button type="button" class="filters__close" @click="toggle">
          <svg
            class="filters__icon-search"
            width="30px"
            height="38px"
            viewBox="0 0 42 42"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>Shape</title>
            <desc>Created with Sketch.</desc>
            <g
              id="design"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Artboard"
                transform="translate(-354.000000, -45.000000)"
                fill="currentColor"
                fill-rule="nonzero"
              >
                <g
                  id="iconfinder_11_Search_106236"
                  transform="translate(354.000000, 45.000000)"
                >
                  <path
                    id="Shape"
                    d="M40.8444657,40.8444657 C39.3037532,42.3851781 36.8064734,42.3851781 35.265679,40.8444657 L28.3043362,33.8830409 C25.4423452,35.7190661 22.0592911,36.8129539 18.406518,36.8129539 C8.2416057,36.8129539 0,28.5724967 0,18.4064359 C0,8.24037523 8.2416057,0 18.406518,0 C28.5727427,0 36.813036,8.24021117 36.813036,18.4064359 C36.813036,22.0579786 35.7177536,25.4423452 33.8830409,28.3056487 L40.8444657,35.2670735 C42.3851781,36.8077859 42.3851781,39.3037532 40.8444657,40.8444657 Z M18.406518,5.25894654 C11.1458429,5.25894654 5.25902857,11.1444484 5.25902857,18.4063539 C5.25902857,25.6682594 11.1459249,31.5538433 18.406518,31.5538433 C25.6683415,31.5538433 31.5539253,25.6682594 31.5539253,18.4063539 C31.5539253,11.1444484 25.6683415,5.25894654 18.406518,5.25894654 Z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          {{ closeButtonText }}
        </button>
        <form class="filters__inner" @submit.prevent="handleSubmit">
          <div class="filters__fieldset">
            <div class="filters__field">
              <div class="filters__label">Tegund</div>
              <div class="filters__control">
                <Select :options="typeOptions" @change="handleType" />
              </div>
            </div>
            <div class="filters__field">
              <div class="filters__label">Staður</div>
              <div class="filters__control">
                <Select :options="placeOptions" @change="handlePlace" />
              </div>
            </div>
            <div class="filters__field">
              <div class="filters__label">Dagsetning</div>
              <div class="filters__control">
                <TagList
                  class="filters__tag-list"
                  :items="dateList"
                  @change="handleDate"
                />
              </div>
            </div>
            <div class="filters__field">
              <div class="filters__label">Tími</div>
              <div class="filters__control">
                <TagList
                  class="filters__tag-list"
                  :items="timeList"
                  @change="handleTime"
                />
              </div>
            </div>
            <!-- <div class="filters__field">
              <div class="filters__label">Aðgangur</div>
              <div class="filters__control">
                <Select :options="accessOptions" @change="handleAccess" />
              </div>
            </div> -->
            <div class="filters__field">
              <div class="filters__label">Leitarorð</div>
              <div class="filters__control">
                <Input
                  :model-value="search"
                  placeholder="skrifaðu inn leitarorð"
                  class="filters__input"
                  @model-changed="handleSearch"
                />
              </div>
            </div>
          </div>
          <div class="filters__footer">
            <button type="submit" class="btn">Leita</button>
          </div>
        </form>
      </div>
    </div>
    <div class="filters__overlay" @click.prevent="close"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { MODULES, GETTERS, ACTIONS } from '~/helpers/constants'
import toggleScroll from '~/helpers/toggleScroll'

import Select from '~/components/Select'
import TagList from '~/components/TagList'
import Input from '~/components/Input'

export default {
  name: 'Filters',
  components: {
    Select,
    TagList,
    Input
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    scrollPosition: 0,
    isOpened: false
  }),
  computed: {
    ...mapGetters({
      typeOptions: `${MODULES.COMMON}/${GETTERS.EVENT_TYPES}`,
      placeOptions: `${MODULES.COMMON}/${GETTERS.EVENT_PLACES}`,
      accessOptions: `${MODULES.COMMON}/${GETTERS.EVENT_ACCESSES}`,
      dateList: `${MODULES.COMMON}/${GETTERS.EVENT_DATES}`,
      timeList: `${MODULES.COMMON}/${GETTERS.EVENT_TIMES}`,
      search: `${MODULES.COMMON}/${GETTERS.SEARCH}`
    }),
    closeButtonText() {
      return this.isOpened ? '> fela' : '< leita'
    }
  },
  watch: {
    isOpened(isOpened) {
      toggleScroll(!isOpened)
    }
  },
  methods: {
    ...mapActions({
      handleTypeChange: `${MODULES.COMMON}/${ACTIONS.SET_SELECTED_TYPE}`,
      handlePlaceChange: `${MODULES.COMMON}/${ACTIONS.SET_SELECTED_PLACE}`,
      handleAccessChange: `${MODULES.COMMON}/${ACTIONS.SET_SELECTED_ACCESS}`,
      handleDateChange: `${MODULES.COMMON}/${ACTIONS.SET_SELECTED_DATE}`,
      handleTimeChange: `${MODULES.COMMON}/${ACTIONS.SET_SELECTED_TIME}`,
      handleSearch: `${MODULES.COMMON}/${ACTIONS.SET_SEARCH}`,
      clearItems: `${MODULES.COMMON}/${ACTIONS.CLEAR_EVENTS}`,
      requestItems: `${MODULES.COMMON}/${ACTIONS.REQUEST_EVENTS}`
    }),
    /* handleAccess(option) {
      this.handleAccessChange(option)
      this.requestItems({ clear: true })
    }, */
    handlePlace(option) {
      this.handlePlaceChange(option)
      this.requestItems({ clear: true })
    },
    handleType(option) {
      this.handleTypeChange(option)
      this.requestItems({ clear: true })
    },
    handleTime(option) {
      this.handleTimeChange(option)
      this.requestItems({ clear: true })
    },
    handleDate(option) {
      this.handleDateChange(option)
      this.requestItems({ clear: true })
    },
    handleSubmit() {
      this.requestItems({ clear: true })
      this.close()
    },
    toggle() {
      this.isOpened ? this.close() : this.open()
    },
    close() {
      this.isOpened = false
    },
    open() {
      this.isOpened = true
    }
  }
}
</script>
