import processClient from '~/helpers/processClient'

export default cb =>
  processClient(() => window.matchMedia('(max-width: 560px)').matches && cb())
