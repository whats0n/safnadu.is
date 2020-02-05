<template>
  <div class="main main_stock">
    <Header ref="header" type="static" :has-logo="false" />
    <div class="stock">
      <div class="container stock__container">
        <div class="stock__inner">
          <div class="stock__content">
            <div class="stock__text">
              Það er með ólíkindum hversu mikið framboð er af skemmtilegum,
              fróðlegum og spennandi hlutum að sjá, prófa og njóta á söfnum
              Reykjavíkurborgar. Á safnadu.is færðu yfirlit yfir sýningar,
              viðburði og afþreyingu sem boðið er upp á hverju sinni. Snjallasta
              leiðin til að njóta safna borgarinnar er með
              <a
                href="https://menningarkort.is"
                class="link-inner link-inner_inherit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Menningarkorti Reykjavíkur </a
              >.
            </div>
            <div class="stock__links">
              Við erum á
              <a
                class="link-inner link-inner_inherit"
                href="https://www.facebook.com/safnadu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              og
              <a
                class="link-inner link-inner_inherit"
                href="https://www.instagram.com/safnadu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div class="stock__items">
              <iframe
                src="https://cdn.lightwidget.com/widgets/646cd654685a5d63a22a0af94148fc9b.html"
                scrolling="no"
                allowtransparency="true"
                class="lightwidget-widget"
                style="width:100%;border:0;overflow:hidden;"
              ></iframe>
            </div>
          </div>
          <div class="stock__logo-wrapper">
            <button
              type="button"
              class="stock__logo"
              @click.prevent="handleChangeTheme"
            >
              <Icon name="rvk-logo" class="stock__logo-in" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { MODULES, ACTIONS } from '~/helpers/constants'

import Header from '~/components/Header'
import Icon from '~/components/Icon'

export default {
  name: 'Safnadu',
  components: {
    Header,
    Icon
  },
  methods: {
    ...mapActions({
      handleChangeTheme: `${MODULES.COMMON}/${ACTIONS.CHANGE_THEME}`
    })
  }
}
</script>
