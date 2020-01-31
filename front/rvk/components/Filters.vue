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
          {{ closeButtonText }}
        </button>
        <form class="filters__inner" @submit.prevent="handleSubmit">
          <div class="filters__fieldset">
            <!--<div class="filters__field">
              <div class="filters__label">Tegund</div>
              <div class="filters__control">
                <Select :options="typeOptions" @change="handleTypeChange" />
              </div>
            </div>
            <div class="filters__field">
              <div class="filters__label">Staður</div>
              <div class="filters__control">
                <Select :options="placeOptions" @change="handlePlaceChange" />
              </div>
            </div>-->
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
            <!--<div class="filters__field">
              <div class="filters__label">Aðgangur</div>
              <div class="filters__control">
                <Select :options="accessOptions" @change="handleAccessChange" />
              </div>
            </div>-->
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

// import Select from '~/components/Select'
import TagList from '~/components/TagList'
import Input from '~/components/Input'

export default {
  name: 'Filters',
  components: {
    // Select,
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
    handleTime(option) {
      this.handleTimeChange(option)
      this.handleSubmit()
    },
    handleDate(option) {
      this.handleDateChange(option)
      this.handleSubmit()
    },
    handleSubmit() {
      // this.clearItems()
      this.requestItems({ clear: true })
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
