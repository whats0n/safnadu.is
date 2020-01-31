<template>
  <div class="main">
    <WithScroll @visible="showSection(section.eventList)">
      <template #default="{ isVisible }">
        <EventList :ref="section.header" :is-visible="isVisible" />
      </template>
    </WithScroll>
  </div>
</template>

<script>
import WithScroll from '~/components/WithScroll'
import EventList from '~/components/EventList'

export default {
  name: 'Index',
  components: { WithScroll, EventList },
  computed: {
    section() {
      return {
        eventList: 'eventList'
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
