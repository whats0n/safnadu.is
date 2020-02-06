<template>
  <div class="event-details ghfg">
    <Header ref="header" :is-visible="isVisible" type="static" />
    <div class="container event-details__container">
      <div class="content">
        <div class="event-details__inner">
          <div class="event-details__box">
            <ul class="event-details__controls">
              <li class="event-details__controls-item">
                <ButtonIcon
                  tag="NuxtLink"
                  to="/"
                  name="close"
                  text="Go to event list"
                />
              </li>
            </ul>
            <div class="event-details__box-in">
              <div class="event-details__main">
                <img :src="img" alt="main image" class="event-details__img" />
                <div class="event-details__main-content">
                  <div class="title-md event-details__title">
                    {{ content.title }}
                  </div>
                  <div
                    class="text event-details__text"
                    v-html="content.description"
                  ></div>
                  <div class="text event-details__text">
                    <b>{{ content.price }}</b>
                  </div>
                </div>
              </div>
              <div class="event-details__aside">
                <div class="title-md event-details__label">
                  {{ list.title }}
                </div>
                <ul class="text event-details__info">
                  <li
                    v-for="(item, idx) in list.items"
                    :key="idx"
                    class="extend-item-details__info-item"
                  >
                    <div class="event-details__info-label">{{ item }}</div>
                  </li>
                </ul>
                <ul class="event-details__media">
                  <li
                    v-for="(item, idx) in links"
                    :key="idx"
                    class="event-details__media-item"
                  >
                    <a
                      :href="item.href"
                      class="event-details__media-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div class="event-details__media-figure">
                        <Icon
                          :name="item.icon"
                          class="event-details__media-icon"
                        />
                      </div>
                      <div class="event-details__media-text">
                        {{ item.title }}
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import { mapGetters, mapActions } from 'vuex' */
/* import {
  MODULES, GETTERS, ACTIONS, eventListLink
} from '~/helpers/constants' */
/* import isExist from '~/helpers/isExist'
import prettyDate from '~/helpers/prettyDate' */

import Header from '~/components/Header'
import Icon from '~/components/Icon'
import ButtonIcon from '~/components/ButtonIcon'

export default {
  name: 'EventDetails',
  components: { Header, Icon, ButtonIcon },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data: vm => ({
    img: 'img/extended-item.jpg',
    list: {
      title: 'Hvað er innifalið?',
      items: [
        '14 söfn',
        '50+ sýningar',
        '300+ viðburðir',
        'bókasafnsskírteini',
        'auk fjölda tilboða'
      ]
    },
    links: [
      {
        title: 'Sölustaðir',
        href: 'https://menningarkort.is/solustadir/',
        icon: 'link'
      },
      {
        title: 'Vefsíða',
        href: 'https://menningarkort.is/',
        icon: 'website'
      },
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/menningarkort/',
        icon: 'instagram'
      },
      {
        title: 'Facebook',
        href: 'https://www.facebook.com/menningarkort/',
        icon: 'facebook'
      }
    ],
    content: {
      title: 'Menningarkort Reykjavíkur',
      description:
        'Menningarkort Reykjavíkur er hagstæðasta leiðin til að safna viðburðaríkum frítíma í Reykjavík. Kortið veiti ótakmarkaðan aðgang að sýningum og viðburðum hjá söfnum Reykjavíkurborgar auk margvíslegra fríðinda og sérkjara hjá samstarfsaðilum.<br/><br/> Kortið veitir aðgang að; Listasafni Reykjavíkur (Hafnarhús, Kjarvalsstaðir og Ásmundarsafn), Borgarsögusafni Reykjavíkur (Árbæjarsafn, Landnámssýningin, Sjóminjasafnið í Reykjavík, Ljósmyndasafn Reykjavíkur og Viðey). Auk þess fá handhafar bókasafnskort endurgjaldslaust hjá Borgarbókasafni Reykjavíkur. Korthafar fá jafnframt 10% afslátt í safnbúðum Listasafns Reykjavíkur og Borgarsögusafns Reykjavíkur, 10% afslátt í Viðeyjarferjuna og afslætti og sérkjör hjá fjölmörgum samstarfsaðilum.<br/><br/>',
      price:
        'Til og með 15. október verður kortið á sérstöku tilboði á 5.000 kr.'
    }
  })
}
</script>
