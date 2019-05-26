<template>
 <v-menu
        v-model="menu"
        :change="sendDate()"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
          :label="title"
          prepend-icon="event"
          readonly
          box
        />
        <v-date-picker
          no-title
          v-model="date"
          @input="menu = false"
          :min="minDate"
          :max="maxDate"
        />
      </v-menu>
</template>

<script>
export default {
  name: 'DateTimePicker',
  props: {
    title: { type: String, required: true },
    minDate: { type: String, required: false, default: new Date().toISOString().substr(0, 10) },
    maxDate: { type: String, required: false },
    selectedDate: { type: String, required: false, default: new Date().toISOString().substr(0, 10) }
  },
  data () {
    return {
      date: this.selectedDate,
      menu: false
    }
  },
  methods: {
    sendDate () {
      return this.$emit('datePicker', Date.parse(this.date))
    }
  }
}
</script>

<style>

</style>
