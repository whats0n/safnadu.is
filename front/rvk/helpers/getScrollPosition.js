import processClient from '~/helpers/processClient'

export default () =>
  processClient(() => ({
    y: window.pageYOffset || window.scrollY,
    x: window.pageXOffset || window.scrollX
  })) || {}
