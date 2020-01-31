import processClient from '~/helpers/processClient'

export default props =>
  processClient(() =>
    ((props && props.el) || window).dispatchEvent(new CustomEvent('scroll'))
  )
