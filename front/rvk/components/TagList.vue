<template>
  <div class="tag-list">
    <ul class="tag-list__list">
      <li v-for="tag in items" :key="tag.id" class="tag-list__item">
        <Tag
          v-if="tag.isDatepicker"
          :is-selected="tag.isSelected"
          @click="toggle"
          @clear="handleClearDatepicker"
        >
          {{ tag.text }}
        </Tag>
        <Tag
          v-else
          :is-selected="tag.isSelected"
          @click="handleClick(tag)"
          @clear="handleClear(tag)"
        >
          {{ tag.text }}
        </Tag>
      </li>
    </ul>
    <template v-if="isOpened">
      <no-ssr>
        <div ref="datepicker">
          <Datepicker
            v-model="value"
            :inline="true"
            class="tag-list__datepicker"
            @selected="handleSelected"
          />
        </div>
      </no-ssr>
    </template>
  </div>
</template>

<script>
import isExist from '~/helpers/isExist'
import processClient from '~/helpers/processClient'

import Tag from '~/components/Tag'

export default {
  name: 'TagList',
  components: {
    Tag
  },
  props: {
    items: {
      type: Array,
      default: () => [],
      validator: value =>
        !value.length ||
        value.every(option => isExist(option.id) && isExist(option.text))
    }
  },
  data: () => ({
    isOpened: false,
    value: null,
    oldDate: null
  }),
  watch: {
    items: {
      immediate: true,
      handler(items) {
        if (items.some(({ isSelected }) => isSelected)) return
        this.value = null
        this.oldDate = null
      }
    },
    isOpened(isOpened) {
      processClient(() =>
        isOpened
          ? document.addEventListener('click', this.closeOnOutsideClick, true)
          : document.removeEventListener(
              'click',
              this.closeOnOutsideClick,
              true
            )
      )
    }
  },
  methods: {
    handleClear() {
      this.$emit('change', { value: null })
    },
    handleClearDatepicker() {
      this.handleClear()
      this.oldDate = null
      this.value = null
    },
    handleClick(item) {
      this.$emit('change', item)
    },
    handleSelected(date) {
      if (this.oldDate && date && this.oldDate.getTime() === date.getTime()) {
        this.$nextTick(() => {
          this.value = null
          this.oldDate = null
        })
      } else {
        this.oldDate = date
      }
      this.handleClick({
        value: date
      })
      this.close()
    },
    closeOnOutsideClick(e) {
      if (e.path.some(item => item === this.$refs.datepicker)) return
      this.close()
    },
    toggle() {
      this.isOpened ? this.close() : this.open()
    },
    open() {
      this.isOpened = true
    },
    close() {
      this.isOpened = false
    }
  }
}
</script>
