<template>
<div>
  <v-card>
    <v-card-text class="button-section">
    <v-btn
      fab
      small
      color="primary"
      @click="$refs.calendar.prev()"
    >
    <v-icon dark>
      keyboard_arrow_left
    </v-icon>
  </v-btn>
  <v-btn
    fab
    small
    color="primary"
    @click="$refs.calendar.next()"
  >
    <v-icon dark>
      keyboard_arrow_right
    </v-icon>
  </v-btn>
  </v-card-text>
  </v-card>
  <v-calendar
    ref="calendar"
    v-model="start"
    color="primary"
  ></v-calendar>
</div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      start: Date.now().toString()
    }
  }
}
</script>

<style scoped>
.calendar {
  margin: 20px 0;
}

.button-section {
  display: flex;
  justify-content: space-between;
}
</style>
