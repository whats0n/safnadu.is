import {
  STATES,
  GETTERS,
  MUTATIONS,
  ACTIONS,
  THEMES,
  DEFAULT_VIEW,
  eventDates,
  eventTypes,
  eventPlaces,
  eventAccesses
} from '~/helpers/constants'
import getItems from '~/helpers/getItems'

const request = ({ state, getters, method, callback }) =>
  new Promise(resolve => {
    const today = new Date()
    const tomorrow = new Date(new Date().setDate(today.getDate() + 1))
    const selected = state[STATES.SELECTED_DATE]
    const date =
      selected === eventDates[0].value
        ? today
        : selected === eventDates[1].value
        ? tomorrow
        : selected
    const time = state[STATES.SELECTED_TIME]
    const search = state[STATES.SEARCH]

    const limit = state[STATES.EVENTS_LIMIT]
    const offset = state[STATES.EVENTS_OFFSET]
    const place = getters[GETTERS.EVENT_PLACES].find(item => item.isSelected)
      .value
    const type = getters[GETTERS.EVENT_TYPES].find(item => item.isSelected)
      .value
    const access = getters[GETTERS.EVENT_ACCESSES].find(item => item.isSelected)
      .value

    getItems(
      {
        method,
        limit,
        offset,
        search,
        date,
        time,
        type: type !== getters[GETTERS.EVENT_TYPES][0].value ? type : null,
        place: place !== getters[GETTERS.EVENT_PLACES][0].value ? place : null,
        access:
          access !== getters[GETTERS.EVENT_ACCESSES][0].value ? access : null
      },
      data => {
        resolve()
        const isActiveTime = time === state[STATES.SELECTED_TIME]
        const isActiveData = selected === state[STATES.SELECTED_DATE]
        const isActiveSearch = search === state[STATES.SEARCH]
        const isActiveType =
          type ===
          getters[GETTERS.EVENT_TYPES].find(item => item.isSelected).value
        const isActivePlace =
          place ===
          getters[GETTERS.EVENT_PLACES].find(item => item.isSelected).value
        const isActiveAccess =
          access ===
          getters[GETTERS.EVENT_ACCESSES].find(item => item.isSelected).value
        isActiveTime &&
          isActiveData &&
          isActiveSearch &&
          isActiveType &&
          isActivePlace &&
          isActiveAccess &&
          callback(data)
      }
    )
  })

export default {
  [ACTIONS.CHANGE_THEME]: ({ commit, state }) => {
    const currentIndex = state[STATES.THEME]
    const lastIndex = THEMES.length - 1
    const index = currentIndex >= lastIndex ? 0 : currentIndex + 1

    commit(MUTATIONS.SET_DATA, {
      field: STATES.THEME,
      data: index
    })
  },

  [ACTIONS.SET_RANDOM_THEME]: ({ commit }) => {
    const index = Math.floor(Math.random() * Math.floor(THEMES.length - 1))

    commit(MUTATIONS.SET_DATA, {
      field: STATES.THEME,
      data: index
    })
  },

  [ACTIONS.CHANGE_VIEW]: ({ commit, state }, index) =>
    commit(MUTATIONS.SET_DATA, {
      field: STATES.VIEW,
      data: state[STATES.VIEW] === index ? DEFAULT_VIEW : index
    }),

  [ACTIONS.SET_EVENT_LIST_SCROLL_POSITION]: ({ commit }, position) =>
    commit(MUTATIONS.SET_DATA, {
      field: STATES.EVENT_LIST_SCROLL_POSITION,
      data: position
    }),

  [ACTIONS.SET_SELECTED_TYPE]: ({ commit }, option) =>
    commit(MUTATIONS.SET_DATA, {
      field: STATES.SELECTED_TYPE,
      data: option.value
    }),

  [ACTIONS.SET_SELECTED_PLACE]: ({ commit }, option) =>
    commit(MUTATIONS.SET_DATA, {
      field: STATES.SELECTED_PLACE,
      data: option.value
    }),

  [ACTIONS.SET_SELECTED_ACCESS]: ({ commit }, option) =>
    commit(MUTATIONS.SET_DATA, {
      field: STATES.SELECTED_ACCESS,
      data: option.value
    }),

  [ACTIONS.SET_SELECTED_DATE]: ({ commit, state }, option) =>
    commit(MUTATIONS.SET_DATA, {
      field: STATES.SELECTED_DATE,
      data:
        option.value && option.value.toString() !== state[STATES.SELECTED_DATE]
          ? option.value.toString()
          : null
    }),

  [ACTIONS.SET_SELECTED_TIME]: ({ commit, state }, option) =>
    commit(MUTATIONS.SET_DATA, {
      field: STATES.SELECTED_TIME,
      data:
        option.value && option.value !== state[STATES.SELECTED_TIME]
          ? option.value
          : null
    }),

  [ACTIONS.SET_SEARCH]: ({ commit }, value) =>
    commit(MUTATIONS.SET_DATA, {
      field: STATES.SEARCH,
      data: value
    }),

  [ACTIONS.RESET_FILTERS]: ({ commit }) => {
    commit(MUTATIONS.SET_DATA, {
      field: STATES.SELECTED_TIME,
      data: null
    })
    commit(MUTATIONS.SET_DATA, {
      field: STATES.SELECTED_DATE,
      data: null
    })
    commit(MUTATIONS.SET_DATA, {
      field: STATES.SELECTED_ACCESS,
      data: eventAccesses[0].value
    })
    commit(MUTATIONS.SET_DATA, {
      field: STATES.SELECTED_TYPE,
      data: eventTypes[0].value
    })
    commit(MUTATIONS.SET_DATA, {
      field: STATES.SELECTED_PLACE,
      data: eventPlaces[0].value
    })
    commit(MUTATIONS.SET_DATA, {
      field: STATES.SEARCH,
      data: ''
    })
  },

  [ACTIONS.REQUEST_EVENT_DETAILS]: ({ commit, state }, id) =>
    new Promise((resolve, reject) => {
      const event = state[STATES.EVENTS].find(item => item._id === id)
      commit(MUTATIONS.SET_DATA, {
        field: STATES.EVENT_DETAILS,
        data: event
      })
      getItems(
        {
          id
        },
        data => {
          resolve(data)
          commit(MUTATIONS.SET_DATA, {
            field: STATES.EVENT_DETAILS,
            data
          })
        },
        error => reject(error)
      )
    }),

  [ACTIONS.CLEAR_EVENT_DETAILS]: ({ commit, state }, id) =>
    new Promise(resolve => {
      resolve()
      commit(MUTATIONS.SET_DATA, {
        field: STATES.EVENT_DETAILS,
        data: null
      })
    }),

  [ACTIONS.CLEAR_EVENTS]: ({ commit }) =>
    commit(MUTATIONS.SET_DATA, {
      field: STATES.EVENTS,
      data: []
    }),

  // [ACTIONS.REQUEST_COUNT]: ({ commit, state, getters }) =>
  //   request({
  //     state,
  //     getters,
  //     method: 'count',
  //     callback: data => {
  //       commit(MUTATIONS.SET_DATA, {
  //         field: STATES.COUNT,
  //         data: data.count
  //       })
  //     }
  //   }),

  [ACTIONS.REQUEST_EVENTS]: ({ commit, state, getters }, props) =>
    (() => {
      commit(MUTATIONS.SET_DATA, {
        field: STATES.LOADING,
        data: true
      })
      return true
    })() &&
    (callback => {
      if (props && props.clear) {
        commit(MUTATIONS.SET_DATA, {
          field: STATES.EVENTS,
          data: []
        })
        commit(MUTATIONS.SET_DATA, {
          field: STATES.EVENTS_OFFSET,
          data: 0
        })
        // request({
        //   state,
        //   getters,
        //   method: 'count',
        //   callback: data => {
        //     commit(MUTATIONS.SET_DATA, {
        //       field: STATES.COUNT,
        //       data: data.count
        //     })
        //     callback()
        //   }
        // })
        callback()
      } else {
        state[STATES.EVENTS].length !== state[STATES.COUNT]
          ? callback()
          : commit(MUTATIONS.SET_DATA, {
              field: STATES.LOADING,
              data: false
            })
      }
    })(() =>
      request({
        state,
        getters,
        callback: data => {
          const items = state[STATES.EVENTS]
          commit(MUTATIONS.SET_DATA, {
            field: STATES.EVENTS,
            data: [...items, ...data.items]
          })
          commit(MUTATIONS.SET_DATA, {
            field: STATES.COUNT,
            data: +data.total
          })
          commit(MUTATIONS.SET_DATA, {
            field: STATES.LOADING,
            data: false
          })
          commit(MUTATIONS.SET_DATA, {
            field: STATES.EVENTS_OFFSET,
            data: items.length + data.items.length
          })
        }
      })
    )
  // [ACTIONS.REQUEST_EVENTS]: ({ commit, state, getters }) =>
  //   new Promise(resolve => {
  //     const today = new Date()
  //     const tomorrow = new Date(new Date().setDate(today.getDate() + 1))
  //     const selected = state[STATES.SELECTED_DATE]
  //     const date =
  //       selected === eventDates[0].value
  //         ? today
  //         : selected === eventDates[1].value
  //         ? tomorrow
  //         : selected
  //     const search = state[STATES.SEARCH]

  //     const limit = state[STATES.EVENTS_LIMIT]
  //     const offset = state[STATES.EVENTS_OFFSET]
  //     // const place = getters[GETTERS.EVENT_PLACES].find(item => item.isSelected)
  //     //   .value
  //     const type = getters[GETTERS.EVENT_TYPES].find(item => item.isSelected)
  //       .value

  //     commit(MUTATIONS.SET_DATA, {
  //       field: STATES.LOADING,
  //       data: true
  //     })

  //     const items = [...state[STATES.EVENTS]]

  //     getItems(
  //       {
  //         limit,
  //         offset,
  //         search,
  //         date,
  //         type: type !== getters[GETTERS.EVENT_TYPES][0].value ? type : null
  //       },
  //       data => {
  //         resolve()
  //         commit(MUTATIONS.SET_DATA, {
  //           field: STATES.EVENTS,
  //           data: [...items, ...data]
  //         })
  //         commit(MUTATIONS.SET_DATA, {
  //           field: STATES.LOADING,
  //           data: false
  //         })
  //         commit(MUTATIONS.SET_DATA, {
  //           field: STATES.EVENTS_OFFSET,
  //           data: items.length + data.length
  //         })
  //       }
  //     )
  //   })
}
