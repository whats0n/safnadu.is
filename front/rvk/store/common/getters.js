import {
  STATES,
  GETTERS,
  THEMES,
  VIEWS,
  eventTypes,
  eventPlaces,
  eventAccesses,
  eventDates,
  eventTimes
} from '~/helpers/constants'
import convertEventTiles from '~/helpers/convertEventTiles'
import convertEventDetails from '~/helpers/convertEventDetails'
import createEventPageLink from '~/helpers/createEventPageLink'
// import createGUID from '~/helpers/createGUID'

export default {
  [GETTERS.LOADING]: state => state[STATES.LOADING],

  [GETTERS.RANDOM_LINE]: state => {
    const random = state[STATES.RANDOM]
    const counter = state[STATES.COUNTER]
    const index = Math.floor(
      Math.random() * Math.floor(random.items.length - 1)
    )
    const text = counter >= 6 ? random.main : random.items[index]
    return counter ? text : null
  },

  [GETTERS.THEME]: state => `is-${THEMES[state[STATES.THEME]]}-theme`,
  [GETTERS.VIEWS]: state =>
    VIEWS.map(view => ({
      ...view,
      target: view.id,
      text: view.text,
      isActive: view.id === state[STATES.VIEW]
    })),

  [GETTERS.EVENT_LIST_SCROLL_POSITION]: state =>
    state[STATES.EVENT_LIST_SCROLL_POSITION],

  [GETTERS.WELCOME_WORDS]: () => eventTypes,

  [GETTERS.EVENT_TYPES]: state =>
    eventTypes.map(option => ({
      ...option,
      isSelected: state[STATES.SELECTED_TYPE] === option.value
    })),
  [GETTERS.EVENT_PLACES]: state =>
    eventPlaces.map(option => ({
      ...option,
      isSelected: state[STATES.SELECTED_PLACE] === option.value
    })),
  [GETTERS.EVENT_ACCESSES]: state =>
    eventAccesses.map(option => ({
      ...option,
      isSelected: state[STATES.SELECTED_ACCESS] === option.value
    })),
  [GETTERS.EVENT_DATES]: state =>
    eventDates.map(option => ({
      ...option,
      isSelected:
        option.isDatepicker &&
        state[STATES.SELECTED_DATE] &&
        state[STATES.SELECTED_DATE] !== eventDates[0].value &&
        state[STATES.SELECTED_DATE] !== eventDates[1].value
          ? true
          : state[STATES.SELECTED_DATE] === option.value
    })),
  [GETTERS.EVENT_TIMES]: state =>
    eventTimes.map(option => ({
      ...option,
      isSelected: state[STATES.SELECTED_TIME] === option.value
    })),
  [GETTERS.SEARCH]: state => state[STATES.SEARCH],

  [GETTERS.EVENTS_WITHOUT_COPIES]: (state, getters) => {
    const withoutCopies = {}

    if (Array.isArray(state[STATES.EVENTS])) {
      state[STATES.EVENTS].forEach(item => {
        const id = item._id
        if (withoutCopies[id]) return
        withoutCopies[id] = item
      })
    }
    return Object.values(withoutCopies)
  },

  [GETTERS.EVENTS_TILES]: (state, getters) => {
    // const bannerAd = {
    //   id: createGUID(),
    //   title: '',
    //   text: '',
    //   img: /* 'img/extended-item-thumbnail.jpg' */ 'img/box.png',
    //   page: /* '/event?id=0' */ 'https://jolavaettir.safnadu.is/',
    //   blank: true,
    //   date: '',
    //   time: '',
    //   startDate: '',
    //   bannerAd: true
    // }
    const items = []
    getters[GETTERS.EVENTS_WITHOUT_COPIES].forEach(item => {
      // if (((idx - 5) % 25 === 0 && idx !== 0) || idx === 5)
      //   items.push({ ...bannerAd /* , id: createGUID() */ })
      items.push(convertEventTiles(item))
    })

    return items.sort((prev, next) => prev.startDateMS - next.startDateMS)
  },
  [GETTERS.EVENT_DETAILS]: state => {
    const item = state[STATES.EVENT_DETAILS]

    if (!item) return {}

    const prevLink = item.prev ? createEventPageLink({ id: item.prev }) : null
    const nextLink = item.next ? createEventPageLink({ id: item.next }) : null

    return (
      convertEventDetails(item, {
        prevLink,
        nextLink
      }) || {}
    )
  }
}
