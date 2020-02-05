export const MODULES = {
  COMMON: 'common'
}

export const ACTIONS = {
  CHANGE_THEME: 'CHANGE_THEME',
  CHANGE_VIEW: 'CHANGE_VIEW',

  SET_RANDOM_THEME: 'SET_RANDOM_THEME',
  SET_EVENT_LIST_SCROLL_POSITION: 'SET_EVENT_LIST_SCROLL_POSITION',
  SET_SELECTED_TYPE: 'SET_SELECTED_TYPE',
  SET_SELECTED_PLACE: 'SET_SELECTED_PLACE',
  SET_SELECTED_ACCESS: 'SET_SELECTED_ACCESS',
  SET_SELECTED_DATE: 'SET_SELECTED_DATE',
  SET_SELECTED_TIME: 'SET_SELECTED_TIME',
  SET_SEARCH: 'SET_SEARCH',

  CLEAR_EVENT_DETAILS: 'CLEAR_EVENT_DETAILS',
  RESET_FILTERS: 'RESET_FILTERS',

  REQUEST_COUNT: 'REQUEST_COUNT',
  REQUEST_EVENTS: 'REQUEST_EVENTS',
  REQUEST_EVENT_DETAILS: 'REQUEST_EVENT_DETAILS'
}

export const GETTERS = {
  LOADING: 'LOADING',

  THEME: 'THEME',
  VIEWS: 'VIEWS',

  EVENT_LIST_SCROLL_POSITION: 'EVENT_LIST_SCROLL_POSITION',
  EVENTS_WITHOUT_COPIES: 'EVENTS_WITHOUT_COPIES',
  EVENTS_TILES: 'EVENTS_TILES',
  GET_EVENT_DETAILS: 'GET_EVENT_DETAILS',

  WELCOME_WORDS: 'WELCOME_WORDS',

  EVENT_DETAILS: 'EVENT_DETAILS',
  EVENT_TYPES: 'EVENT_TYPES',
  EVENT_PLACES: 'EVENT_PLACES',
  EVENT_ACCESSES: 'EVENT_ACCESSES',
  EVENT_DATES: 'EVENT_DATES',
  EVENT_TIMES: 'EVENT_TIMES',
  SEARCH: 'SEARCH'
}

export const STATES = {
  LOADING: 'LOADING',

  THEME: 'THEME',
  VIEW: 'VIEW',

  COUNT: 'COUNT',

  EVENT_DETAILS: 'EVENT_DETAILS',
  EVENTS: 'EVENTS',
  EVENTS_LIMIT: 'EVENTS_LIMIT',
  EVENTS_OFFSET: 'EVENTS_OFFSET',
  EVENT_LIST_SCROLL_POSITION: 'EVENT_LIST_SCROLL_POSITION',

  SELECTED_TYPE: 'SELECTED_TYPE',
  SELECTED_PLACE: 'SELECTED_PLACE',
  SELECTED_ACCESS: 'SELECTED_ACCESS',
  SELECTED_DATE: 'SELECTED_DATE',
  SELECTED_TIME: 'SELECTED_TIME',
  SEARCH: 'SEARCH'
}

export const MUTATIONS = {
  SET_DATA: 'SET_DATA'
}

// export const DEFAULT_THEME = 0
export const THEMES = [
  'supernova',
  'lovender-rose',
  'midnight-blue',
  'dark-orange',
  'bondi-blue',
  'ghost-white',
  'dark-turquoise',
  'melon',
  'guardsman-red'
]

export const DEFAULT_VIEW = 0
export const VIEWS = [
  {
    id: 1,
    text: 'söfnin',
    isLink: true,
    href: '/sofnin'
  },
  {
    id: 2,
    text: '#safnaðu',
    isLink: true,
    href: '/safnadu'
  }
]
export const UNSCROLLABLE = 'is-unscrollable'

export const eventListLink = '/'

export const eventTypes = [
  { id: 0, text: 'allt', value: 'allt' },
  { id: 1, text: 'sýningar', value: 'sýning' },
  { id: 2, text: 'sjónlistir', value: 'sýning' },
  { id: 3, text: 'tónlist', value: 'tónlist' },
  { id: 5, text: 'börn', value: 'börn' },
  { id: 7, text: 'hátíðir', value: 'hátíð' },
  { id: 8, text: 'bókmenntir', value: 'bók' },
  { id: 15, text: 'fjölskyldan', value: 'fjölskyld' },
  { id: 16, text: 'ljósmyndir', value: 'ljósmynd' },
  { id: 17, text: 'gagnvirkt', value: 'landnáms' },
  { id: 18, text: 'myndlist', value: 'sýning' }
]

export const eventPlaces = [
  {
    id: 'all',
    text: 'allir staðir',
    value: 'allir staðir'
  },
  {
    id: 0,
    value: 'ljósmyndasafn',
    text: 'Ljósmyndasafn Reykjavíkur'
  },
  { id: 1, value: 'landnámssýningin', text: 'Landnámssýningin' },
  { id: 2, value: 'sjóminjasafnið', text: 'Sjóminjasafnið' },
  { id: 3, value: 'árbæjarsafn', text: 'Árbæjarsafn' },
  { id: 4, value: 'hafnarhús', text: 'Hafnarhús' },
  { id: 5, value: 'kjarvalsstaðir', text: 'Kjarvalsstaðir' },
  { id: 6, value: 'ásmundarsafn', text: 'Ásmundarsafn' },
  { id: 7, value: 'grófinni', text: 'Borgarbókasafnið Grófinni' },
  { id: 8, value: 'sólheimum', text: 'Borgarbókasafnið Sólheimum' },
  { id: 9, value: 'árbæ', text: 'Borgarbókasafnið Árbæ' },
  { id: 10, value: 'gerðubergi', text: 'Borgarbókasafnið Gerðubergi' },
  { id: 11, value: 'kringlu', text: 'Borgarbókasafnið Kringlunni' },
  { id: 12, value: 'spönginni', text: 'Borgarbókasafnið Spönginni' }
]

export const eventAccesses = [
  { id: 0, value: 'Allt', text: 'Allt' },
  { id: 1, value: true, text: 'keyptur aðgangur' },
  { id: 2, value: false, text: 'ókeypis aðgangur' }
]

export const eventDates = [
  { id: 1, value: 'í dag', text: 'í dag' },
  { id: 2, value: 'á morgun', text: 'á morgun' },
  { id: 3, value: new Date(), text: 'dagatal', isDatepicker: true }
]

export const eventTimes = [
  { id: 1, value: '08:00-12:00', text: 'Fyrir hádegi' },
  { id: 2, value: '12:00-18:00', text: 'Eftirmiðdagur' },
  { id: 3, value: '18:00-23:59', text: 'Kvöld' }
]

export const museumsLink = '/sofnin'

export const cookieName = 'RVK_SESSION'
