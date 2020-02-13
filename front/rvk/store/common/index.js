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
  [MUTATIONS.SET_DATA]: require('~/helpers/SET_DATA').default,
  [MUTATIONS.SET_COUNTER]: (state, counter) => {
    state[STATES.COUNTER] = counter
  }
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
  [STATES.EVENTS_OFFSET]: 0,
  [STATES.COUNTER]: null,
  [STATES.RANDOM]: {
    main: 'viðburðaríkum frítíma í Reykjavík',
    items: [
      'myndlist',
      'sögum á erlendum tungumálum',
      'tónlist á vínylplötum',
      'sunnudagskaffi á Kjarvalsstöðum',
      'laugardagskaffi í Dillonshúsi',
      'Kjarval',
      'Erró',
      'myndastyttum úti á túni',
      'húsinu sem landnámsfólkið byggði sér',
      'Reykjavík sirka 870',
      'húsdýrum frá landnámsöld',
      'þegar það rignir',
      'heimildum',
      'góðum minningum',
      'með fjölskyldunni',
      'nýrri þekkingu',
      'og sjáðu aðra',
      'í dag',
      'á morgun',
      'fyrir þig',
      'meðan þú bíður',
      'fornminjum',
      'fiskitegundum',
      'gömlum ljósmyndum',
      'eins og enginn sé morgundagurinn',
      'með stóru systur',
      'með litla bróður',
      'út fyrir kassann',
      'bókum',
      'uppskriftum',
      'glósum á hlaðvarpsformi',
      'ofurhetjum og ævintýrum',
      'hvíld',
      'tíma fyrir þig',
      'upplifunum',
      'með menningarkortinu',
      'hugarró',
      'visku',
      'gæðastundum',
      'pönnukökum á Árbæjarsafni',
      'kandís og kleinum',
      'innblæstri'
    ]
  }
})
