// import getScrollPosition from '~/helpers/getScrollPosition'
import processClient from '~/helpers/processClient'
import { UNSCROLLABLE } from '~/helpers/constants'

// const scrollPosition = 0

export default scrollable => {
  processClient(() => {
    const body = document.body
    if (!scrollable) {
      // scrollPosition = getScrollPosition().y
      body.classList.add(UNSCROLLABLE)
      // body.style.top = `${-scrollPosition}px`
    } else {
      body.classList.remove(UNSCROLLABLE)
      // body.removeAttribute('style')
      // window.scrollTo(0, scrollPosition)
    }
  })
}
