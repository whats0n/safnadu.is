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

export default {
  [GETTERS.LOADING]: state => state[STATES.LOADING],

  [GETTERS.THEME]: state => `is-${THEMES[state[STATES.THEME]]}-theme`,
  [GETTERS.VIEWS]: state =>
    VIEWS.map(view => ({
      target: view.id,
      text: view.text,
      isActive: view.id === state[STATES.VIEW]
    })),

  [GETTERS.EVENT_LIST_SCROLL_POSITION]: state =>
    state[STATES.EVENT_LIST_SCROLL_POSITION],

  [GETTERS.WELCOME_WORDS]: () => eventTypes.slice(1),

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
    // const types = getters[GETTERS.EVENT_TYPES]
    // const places = getters[GETTERS.EVENT_PLACES]
    // const accesses = getters[GETTERS.EVENT_ACCESSES]
    // let type = types.find(({ isSelected }) => isSelected).value
    // let place = places.find(({ isSelected }) => isSelected).value
    // let access = accesses.find(({ isSelected }) => isSelected).value

    // const filteredByType = type !== types[0].value
    // const filteredByPlace = place !== places[0].value
    // const filteredByAccess = access !== accesses[0].value

    // type = filteredByType ? type.toLowerCase() : types[0].value
    // place = filteredByPlace ? place.toLowerCase() : places[0].value
    // access = filteredByAccess ? access.toLowerCase() : accesses[0].value

    const withoutCopies = {}

    if (Array.isArray(state[STATES.EVENTS])) {
      state[STATES.EVENTS].forEach(item => {
        const id = item._id
        if (withoutCopies[id]) return
        withoutCopies[id] = item
      })
    }
    // return filteredByType || filteredByPlace || filteredByAccess
    //   ? Object.values(withoutCopies).filter(item => {
    //       let isActive = true
    //       const { is } = item.language
    //       console.log(
    //         is.tags.some(
    //           tag =>
    //             tag.toLowerCase() === type ||
    //             tag.toLowerCase().localeCompare(type) === 0
    //         ),
    //         is.place.toLowerCase().includes(place) ||
    //           is.place.toLowerCase().localeCompare(place) === 0
    //       )
    //       if (filteredByType && isActive)
    //         isActive = is.tags.some(
    //           tag =>
    //             tag.toLowerCase() === type ||
    //             tag.toLowerCase().localeCompare(type) === 0
    //         )
    //       if (filteredByPlace && isActive)
    //         isActive =
    //           is.place.toLowerCase().includes(place) ||
    //           is.place.toLowerCase().localeCompare(place) === 0
    //       // if (filteredByAccess && isActive) isActive = is.place.includes(access)
    //       return isActive
    //     })
    //   : Object.values(withoutCopies)
    return Object.values(withoutCopies)
  },

  [GETTERS.EVENTS_TILES]: (state, getters) =>
    getters[GETTERS.EVENTS_WITHOUT_COPIES].map(convertEventTiles),

  [GETTERS.GET_EVENT_DETAILS]: (state, getters) => {
    const convertedItems = {}

    return id => {
      if (
        Array.isArray(getters[GETTERS.EVENTS_WITHOUT_COPIES]) &&
        !convertedItems[id]
      ) {
        let index = null
        const events = getters[GETTERS.EVENTS_WITHOUT_COPIES]
        const item = events.find((item, i) => {
          if (item.language.is.slug === id || item._id === id) {
            index = i
            return true
          }
        })

        if (!item) return

        const prevIndex = index <= 0 ? events.length - 1 : index - 1
        const nextIndex = index >= events.length - 1 ? 0 : index + 1

        const prevItem = getters[GETTERS.EVENTS_TILES][prevIndex]
        const nextItem = getters[GETTERS.EVENTS_TILES][nextIndex]

        convertedItems[id] = convertEventDetails(item, {
          prevLink: prevItem && prevItem.page,
          nextLink: nextItem && nextItem.page
        })
      }
      return convertedItems[id]
    }
  }
}
