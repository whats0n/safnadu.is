<template>
  <div class="main">
    <WithScroll v-if="isEvent" @visible="showSection(section.eventDetails)">
      <template #default="{ isVisible }">
        <EventDetails :ref="section.header" :is-visible="isVisible" />
      </template>
    </WithScroll>

    <WithScroll v-else @visible="showSection(section.bannerAdDetails)">
      <template #default="{ isVisible }">
        <BannerAdDetails
          :ref="section.header"
          :is-visible="isVisible"
          class="banner-ad-section"
        />
      </template>
    </WithScroll>
  </div>
</template>

<script>
import WithScroll from '~/components/WithScroll'
import EventDetails from '~/components/EventDetails'
import BannerAdDetails from '~/components/BannerAdDetails'

export default {
  name: 'Index',
  components: { WithScroll, EventDetails, BannerAdDetails },
  data: vm => ({
    isEvent: true
  }),
  computed: {
    section() {
      return {
        eventDetails: 'eventDetails',
        bannerAdDetails: 'bannerAdDetails'
      }
    }
  },
  watch: {
    '$route.query.id': {
      immediate: true,
      handler(id) {
        if (id === '0') this.isEvent = false
      }
    }
  },
  methods: {
    showSection(name) {
      const section = this.$refs[name]
      section && typeof section.show === 'function' && section.show()
    }
  }
}
</script>
