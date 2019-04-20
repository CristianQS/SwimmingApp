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
  <v-sheet height="500">
  <v-calendar
    ref="calendar"
    v-model="start"
    color="primary"
  >
  <template v-slot:day="{ date }">
    <template v-for="event in eventsMap[date]">
      <v-card
        :key="event.title"
        v-html="event.title"
        dark
      >
      </v-card>
    </template>
  </template>
  </v-calendar>
  </v-sheet>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      start: Date.now().toString(),
      events: [
        {
          title: 'Vacation',
          details: 'Going to the beach!',
          date: '2018-12-30',
          open: false
        },
        {
          title: 'Vacation',
          details: 'Going to the beach!',
          date: '2018-12-31',
          open: false
        },
        {
          title: 'Vacation',
          details: 'Going to the beach!',
          date: '2019-01-01',
          open: false
        },
        {
          title: 'Meeting',
          details: 'Spending time on how we do not have enough time',
          date: '2019-01-07',
          open: false
        },
        {
          title: '30th Birthday',
          details: 'Celebrate responsibly',
          date: '2019-01-03',
          open: false
        },
        {
          title: 'New Year',
          details: 'Eat chocolate until you pass out',
          date: '2019-01-01',
          open: false
        },
        {
          title: 'Conference',
          details: 'Mute myself the whole time and wonder why I am on this call',
          date: '2019-01-21',
          open: false
        },
        {
          title: 'Hackathon',
          details: 'Code like there is no tommorrow',
          date: '2019-02-01',
          open: false
        }
      ]
    }
  },
  computed: {
      // convert the list of events into a map of lists keyed by date
      eventsMap () {
        const map = {}
        this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
        return map
      }
    },
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
