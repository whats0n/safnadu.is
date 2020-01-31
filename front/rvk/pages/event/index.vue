<template>
  <div class="main">
    <WithScroll @visible="showSection(section.eventDetails)">
      <template #default="{ isVisible }">
        <EventDetails :ref="section.header" :is-visible="isVisible" />
      </template>
    </WithScroll>
  </div>
</template>

<script>
import WithScroll from '~/components/WithScroll'
import EventDetails from '~/components/EventDetails'

export default {
  name: 'Index',
  components: { WithScroll, EventDetails },
  computed: {
    section() {
      return {
        eventDetails: 'eventDetails'
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
