<template>
  <div class="museum-card">
    <div class="museum-card__inner">
      <div class="museum-card__img" :style="imgStyle"></div>
      <div class="museum-card__content">
        <div class="museum-card__title">
          {{ title }}
        </div>
        <div class="museum-card__text">
          {{ text }}
        </div>
        <ul class="museum-card__links">
          <li
            v-for="item in links"
            :key="item.id"
            class="museum-card__links-item"
          >
            <a
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class="museum-card__link link-inner"
            >
              {{ item.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MuseumCard',
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    links: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    imgStyle() {
      return this.img.length
        ? {
            'background-image': `url(${this.img})`
          }
        : null
    }
  }
}
</script>
