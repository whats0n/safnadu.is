import processClient from '~/helpers/processClient'
import getPosition from '~/helpers/getScrollPosition'

export default {
  inserted(el, binding) {
    processClient(() => {
      const f = function(e) {
        if (!el) return
        const position = getPosition()
        const offset = el.getBoundingClientRect()
        binding.value(
          {
            ...position,
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
            elementOffsetTop: offset.top + position.y,
            elementOffsetLeft: offset.left + position.x,
            elementOffsetWidth: el.offsetWidth,
            elementOffsetHeight: el.offsetHeight,
            element: el
          },
          el,
          e
        ) && window.removeEventListener('scroll', f)
      }
      window.addEventListener('scroll', f)
      f()
    })
  }
}
