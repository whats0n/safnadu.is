<template>
  <div
    ref="main"
    class="welcome"
    :class="{
      'is-visible': isVisible,
      'is-animated': isAnimated,
      'is-disabled': hasSession
    }"
  >
    <div
      ref="logoLeft"
      class="welcome__logo welcome__logo_left"
      @click="handleHint"
    >
      <div ref="logoLeftButton" class="welcome__logo-in">
        <ButtonLogo class="welcome__logo-btn" />
        <img
          src="/img/smelltu-til-skipta-um-lit.png"
          alt="hint"
          class="welcome__logo-hint"
          :class="{
            'is-active': hasActiveHint
          }"
        />
      </div>
    </div>
    <div ref="logoRight" class="welcome__logo welcome__logo_right">
      <div ref="logoRightButton" class="welcome__logo-in">
        <ButtonLogo class="welcome__logo-btn" />
      </div>
    </div>
    <div
      v-show="!hasSession"
      ref="container"
      class="container welcome__container"
    >
      <div ref="title" class="welcome__title title-xl">
        <div v-if="!isSecondTitleActive" class="welcome__title-in">
          Velkomin<br />
          á safn safnanna
        </div>
        <div v-else class="welcome__title-in">Hvað viltu skoða?</div>
      </div>
      <div class="content">
        <ul class="welcome__words">
          <li
            v-for="item in words"
            ref="words"
            :key="item.id"
            class="welcome__words-item"
            @click.prevent="handleWordsClick(item)"
          >
            {{ item.text }}
          </li>
          <li ref="singleWord" class="welcome__words-item">
            <NuxtLink :to="museumsLink">
              söfnin
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { TimelineMax, Power1 } from 'gsap'

import {
  MODULES,
  ACTIONS,
  GETTERS,
  museumsLink,
  cookieName
} from '~/helpers/constants'
import processClient from '~/helpers/processClient'
import scrollTo from '~/helpers/scrollTo'
import toggleScroll from '~/helpers/toggleScroll'
import cookie from '~/helpers/cookie'

import ButtonLogo from '~/components/ButtonLogo'

const hasSession = !!cookie.get(cookieName) && +cookie.get(cookieName) > 0
const sessionCounter = hasSession ? +cookie.get(cookieName) : 0

const DURATION_K = 0.8

const DURATION_FIRST_PART = DURATION_K * 1.2
const DURATION_FIRST_PART_TOP = DURATION_FIRST_PART * 0.7
const DURATION_FIRST_PART_BUTTON_ROTATION = DURATION_FIRST_PART * 0.3
const DURATION_SECOND_PART = DURATION_K * 0.6
const DURATION_THIRD_PART = DURATION_K * 1

const DURATION_TITLE_MOVE = 1
const DURATION_TITLE_OPACITY = 0.5
const DURATION_WORDS = 0.2

const DELAY_TITLE = 1.25

export default {
  name: 'Welcome',
  components: {
    ButtonLogo
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isAnimated: false,
    isSecondTitleActive: false,
    hasActiveHint: false
  }),
  computed: {
    ...mapGetters({
      words: `${MODULES.COMMON}/${GETTERS.EVENT_TYPES}`
    }),
    museumsLink() {
      return museumsLink
    },
    hasSession() {
      return hasSession
    }
  },
  watch: {
    isAnimated: {
      immediate: true,
      handler(isAnimated) {
        processClient(() => !isAnimated && window.scrollTo(0, 0))
        toggleScroll(isAnimated)
      }
    }
  },
  methods: {
    ...mapActions({
      handleChangeTheme: `${MODULES.COMMON}/${ACTIONS.CHANGE_THEME}`,
      handleTypeChange: `${MODULES.COMMON}/${ACTIONS.SET_SELECTED_TYPE}`,
      requestItems: `${MODULES.COMMON}/${ACTIONS.REQUEST_EVENTS}`
    }),
    handleWordsClick(item) {
      scrollTo({ section: 'event-list' })
      if (item.isSelected) return
      this.handleTypeChange(item)
      this.requestItems({ clear: true })
    },
    handleHint() {
      if (this.hasActiveHint && this.isAnimated) {
        this.hasActiveHint = false
        cookie.set(cookieName, 6)
      }
    },
    showLogo() {
      const {
        logoLeft,
        logoRight,
        logoLeftButton,
        logoRightButton
      } = this.$refs

      const LABEL_START_FIRST_PART = 'LABEL_START_FIRST_PART'
      const LABEL_START_FIRST_PART_BUTTON_ROTATION =
        'LABEL_START_FIRST_PART_BUTTON_ROTATION'
      const LABEL_START_SECOND_PART = 'LABEL_START_SECOND_PART'
      const LABEL_START_THIRD_PART = 'LABEL_START_THIRD_PART'

      return new TimelineMax()
        .addLabel(LABEL_START_FIRST_PART)
        .addLabel(
          LABEL_START_FIRST_PART_BUTTON_ROTATION,
          `+=${DURATION_FIRST_PART - DURATION_FIRST_PART_BUTTON_ROTATION}`
        )
        .addLabel(LABEL_START_SECOND_PART, `+=${DURATION_FIRST_PART}`)
        .fromTo(
          logoLeft,
          DURATION_FIRST_PART,
          {
            left: '-10%'
          },
          {
            left: '50%'
          },
          LABEL_START_FIRST_PART
        )
        .fromTo(
          logoRight,
          DURATION_FIRST_PART,
          {
            right: '-10%'
          },
          {
            right: '50%'
          },
          LABEL_START_FIRST_PART
        )
        .fromTo(
          [logoLeft, logoRight],
          DURATION_FIRST_PART_TOP,
          {
            top: '80%'
          },
          {
            top: '50%'
          },
          LABEL_START_FIRST_PART
        )
        .fromTo(
          logoLeftButton,
          DURATION_FIRST_PART_BUTTON_ROTATION,
          {
            rotation: 10
          },
          {
            rotation: 0,
            ease: Power1.EaseIn
          },
          LABEL_START_FIRST_PART_BUTTON_ROTATION
        )
        .fromTo(
          logoRightButton,
          DURATION_FIRST_PART_BUTTON_ROTATION,
          {
            rotation: -10
          },
          {
            rotation: 0,
            ease: Power1.EaseIn
          },
          LABEL_START_FIRST_PART_BUTTON_ROTATION
        )
        .to(
          logoRight,
          DURATION_SECOND_PART,
          {
            right: -16,
            ease: Power1.EaseOut
          },
          LABEL_START_SECOND_PART
        )
        .to(
          logoLeftButton,
          DURATION_SECOND_PART,
          {
            rotation: 20,
            ease: Power1.EaseIn
          },
          LABEL_START_SECOND_PART
        )
        .addLabel(LABEL_START_THIRD_PART)
        .fromTo(
          [logoLeft, logoRight],
          DURATION_THIRD_PART,
          {
            scale: 1.5
          },
          {
            scale: 1
          },
          LABEL_START_THIRD_PART
        )
        .to(
          logoLeft,
          DURATION_THIRD_PART,
          {
            top: '100%',
            left: '100%',
            marginTop: -39,
            marginLeft: -30
          },
          LABEL_START_THIRD_PART
        )
        .to(
          logoLeftButton,
          DURATION_THIRD_PART,
          {
            rotation: 0,
            marginTop: -174,
            ease: Power1.EaseIn
          },
          LABEL_START_THIRD_PART
        )
        .call(() => {
          this.hasActiveHint = sessionCounter + 1 <= 5
        })
    },
    showContent() {
      const { title, words, singleWord } = this.$refs

      return new TimelineMax()
        .fromTo(
          title,
          DURATION_TITLE_MOVE,
          {
            x: '-100vw'
          },
          {
            x: 0
          }
        )
        .fromTo(
          title,
          DURATION_TITLE_OPACITY,
          {
            opacity: 1
          },
          {
            opacity: 0
          },
          `+=${DELAY_TITLE}`
        )
        .call(() => {
          this.isSecondTitleActive = true
        })
        .add(
          new TimelineMax().fromTo(
            title,
            DURATION_TITLE_OPACITY,
            {
              opacity: 0
            },
            {
              opacity: 1
            }
          )
        )
        .staggerFromTo(
          [...words, singleWord],
          DURATION_WORDS,
          {
            opacity: 0
          },
          {
            opacity: 1
          },
          DURATION_WORDS * 0.6
        )
    },
    show({ onComplete } = {}) {
      console.time('start')
      const tl = new TimelineMax({
        onComplete: () => {
          this.isAnimated = true
          typeof onComplete === 'function' && onComplete()
          console.timeEnd('start')
        }
      })

      tl.fromTo(
        this.$refs.main,
        0.3,
        {
          opacity: 0
        },
        {
          opacity: 1
        }
      )

      tl.add(this.showLogo())

      !this.hasSession && tl.add(this.showContent(), `-=${DURATION_THIRD_PART}`)

      this.hasActiveHint &&
        tl.call(() => {
          setTimeout(() => {
            this.hasActiveHint = false
          }, 15000)
        })

      return cookie.get(cookieName)
        ? tl
            .call(() => {
              cookie.set(cookieName, sessionCounter + 1, {
                expires: 5400000
              })
            })
            .progress(1)
        : tl.call(() => {
            cookie.set(cookieName, 1, {
              expires: 5400000
            })
          })
    }
  }
}
</script>
