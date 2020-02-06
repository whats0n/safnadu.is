import {
  STATES,
  MUTATIONS,
  DEFAULT_VIEW,
  // DEFAULT_THEME,
  eventTypes,
  eventPlaces,
  eventAccesses
  // eventDates,
  // eventTimes
} from '~/helpers/constants'

export const actions = require('./actions').default
export const getters = require('./getters').default
export const mutations = {
  [MUTATIONS.SET_DATA]: require('~/helpers/SET_DATA').default
}

export const state = () => ({
  [STATES.LOADING]: false,

  [STATES.THEME]: null,
  [STATES.VIEW]: DEFAULT_VIEW,

  [STATES.COUNT]: null,

  // start filters
  [STATES.SELECTED_TYPE]: eventTypes[0].value,
  [STATES.SELECTED_PLACE]: eventPlaces[0].value,
  [STATES.SELECTED_ACCESS]: eventAccesses[0].value,
  [STATES.SELECTED_DATE]: null,
  [STATES.SELECTED_TIME]: null,
  // [STATES.SELECTED_DATE]: eventDates[0].value,
  // [STATES.SELECTED_TIME]: eventTimes[0].value,
  [STATES.SEARCH]: '',
  // end filters

  [STATES.EVENT_DETAILS]: null,
  [STATES.EVENTS]: [],
  [STATES.EVENT_LIST_SCROLL_POSITION]: 0,
  [STATES.EVENTS_LIMIT]: 50,
  [STATES.EVENTS_OFFSET]: 0
})
