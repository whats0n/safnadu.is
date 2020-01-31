import Vue from 'vue'
import processClient from '~/helpers/processClient'

processClient(() => {
  Vue.component('Dot', require('vue-text-dot').default)
  Vue.component(
    'Datepicker',
    require('vuejs-datepicker/dist/vuejs-datepicker.common')
  )
})
