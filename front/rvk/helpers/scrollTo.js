import { TimelineMax, Power1 } from 'gsap'
import getScrollPosition from '~/helpers/getScrollPosition'
import processClient from '~/helpers/processClient'

export default props =>
  processClient(() => {
    const section = props.section
      ? document.querySelector(`[data-section="${props.section}"]`)
      : null
    const duration = typeof props.duration === 'number' ? props.duration : 0.7
    const position = getScrollPosition()
    const newPositionY =
      position.y + (section ? section.getBoundingClientRect().y : props.y)

    return new TimelineMax({
      onUpdate: () => {
        window.scrollTo(0, position.y)
      }
    }).to(position, duration, {
      y: newPositionY,
      ease: Power1.easeInOut
    })
  })
