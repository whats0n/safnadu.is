export const MODULES = {
  COMMON: 'common'
}

export const ACTIONS = {
  CHANGE_THEME: 'CHANGE_THEME',
  CHANGE_VIEW: 'CHANGE_VIEW',

  SET_EVENT_LIST_SCROLL_POSITION: 'SET_EVENT_LIST_SCROLL_POSITION',
  SET_SELECTED_TYPE: 'SET_SELECTED_TYPE',
  SET_SELECTED_PLACE: 'SET_SELECTED_PLACE',
  SET_SELECTED_ACCESS: 'SET_SELECTED_ACCESS',
  SET_SELECTED_DATE: 'SET_SELECTED_DATE',
  SET_SELECTED_TIME: 'SET_SELECTED_TIME',
  SET_SEARCH: 'SET_SEARCH',

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

export const DEFAULT_THEME = 0
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
export const VIEWS = [{ id: 1, text: 'söfnin' }, { id: 2, text: '#safnaðu' }]
export const UNSCROLLABLE = 'is-unscrollable'

export const eventListLink = '/'

export const eventTypes = [
  { id: 0, value: 'Allt', text: 'Allt' },
  { id: 1, value: 'sýningar', text: 'sýningar' },
  { id: 2, value: 'sjónlistir', text: 'sjónlistir' },
  { id: 3, value: 'tónlist', text: 'tónlist' },
  { id: 4, value: 'allsskonar', text: 'allsskonar' },
  { id: 5, value: 'börn', text: 'börn' },
  { id: 6, value: 'sviðslistir', text: 'sviðslistir' },
  { id: 7, value: 'hátíðir', text: 'hátíðir' },
  { id: 8, value: 'bókmenntir', text: 'bókmenntir' },
  { id: 9, value: 'rólegt', text: 'rólegt' },
  { id: 10, value: 'fjörugt', text: 'fjörugt' },
  { id: 11, value: 'fræðsla', text: 'fræðsla' },
  { id: 12, value: 'handavinna', text: 'handavinna' },
  { id: 13, value: 'inni', text: 'inni' },
  { id: 14, value: 'úti', text: 'úti' },
  { id: 15, value: 'fjölskyldan', text: 'fjölskyldan' },
  { id: 16, value: 'ljósmyndir', text: 'ljósmyndir' },
  { id: 17, value: 'gagnvirkt', text: 'gagnvirkt' },
  { id: 18, value: 'myndlist', text: 'myndlist' }
]

export const eventPlaces = [
  {
    id: 0,
    value: 'Ljósmyndasafn Reykjavíkur',
    text: 'Ljósmyndasafn Reykjavíkur'
  },
  { id: 1, value: 'Landnámssýningin', text: 'Landnámssýningin' },
  { id: 2, value: 'Sjóminjasafnið', text: 'Sjóminjasafnið' },
  { id: 3, value: 'Árbæjarsafn', text: 'Árbæjarsafn' },
  { id: 4, value: 'Hafnarhús', text: 'Hafnarhús' },
  { id: 5, value: 'Kjarvalsstaðir', text: 'Kjarvalsstaðir' },
  { id: 6, value: 'Ásmundarsafn', text: 'Ásmundarsafn' },
  { id: 7, value: 'Grófinni', text: 'Borgarbókasafn Grófinni' },
  { id: 8, value: 'Sólheimum', text: 'Borgarbókasafn Sólheimum' },
  { id: 9, value: 'Árbæ', text: 'Borgarbókasafn Árbæ' },
  { id: 10, value: 'Gerðubergi', text: 'Borgarbókasafn Gerðubergi' },
  { id: 11, value: 'Kringlunni', text: 'Borgarbókasafn Kringlunni' }
]

export const eventAccesses = [
  { id: 0, value: 'Allt', text: 'Allt' },
  { id: 1, value: 'keyptur aðgangur', text: 'keyptur aðgangur' },
  { id: 2, value: 'ókeypis aðgangur', text: 'ókeypis aðgangur' }
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
