<template>
  <div>
  <v-card>
    <v-card-text class="button-section">
      <v-btn
        fab
        small
        color="primary"
        @click="backMonth()"
      >
        <v-icon dark>
          keyboard_arrow_left
        </v-icon>
      </v-btn>
      <p>{{mappingMonth +" "+ year}}</p>
      <v-btn
        fab
        small
        color="primary"
        @click="nextMonth()"
      >
        <v-icon dark>
          keyboard_arrow_right
        </v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
  <v-calendar
    ref="calendar"
    v-model="date"
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
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      date: new Date().getTime().toString(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      events: [
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
        }
      ]
    }
  },
  methods: {
    backMonth () {
      this.month--
      if(this.month === -1){ 
        this.month = 11
        this.year--
      }
      this.$refs.calendar.prev()
    },
    nextMonth () {
      this.month++
      if(this.month === 12){
        this.month = 0
        this.year++
      } 
      this.$refs.calendar.next()
    }
  },
  computed: {
    eventsMap () {
      const map = {}
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
      return map
    },
    mappingMonth () {
      var months = ["January", "February", "March", "April", "May", 
      "June", "July", "August", "September", "October", "November", "December"]
      return months[this.month]
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
  align-items: center;
}
</style>
