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
          :key="event.id"
          v-html="event.name"
          @click="goTo(event)"
          class="trainingCard"
          dark
        >
        </v-card>
      </template>
    </template>
  </v-calendar>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { GET_TRAININGS } from '../store/types/TrainingTypes'

export default {
  name: 'Calendar',
  props: {
    events: { type: Array, required: true }
  },
  data () {
    return {
      date: new Date().getTime().toString(),
      month: new Date().getMonth(),
      year: new Date().getFullYear()
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
    },
    goTo (event) {
      this.$router.push({name: 'ACTIVITIES', 
      params: {idPlan: event.plantraining_id, idTraining: event.id}})
      
    },
    ...mapActions({
      getTrainings: GET_TRAININGS,
    })
  },
  computed: {
    ...mapState({
      plantrainings: state => state.plantrainings
    }),
    eventsMap () {
      const map = {}
      this.events.forEach(e => (map[e.timetraining] = map[e.timetraining] || []).push(e))
      return map
    },
    mappingMonth () {
      var months = ["January", "February", "March", "April", "May", 
      "June", "July", "August", "September", "October", "November", "December"]
      return months[this.month]
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
  align-items: center;
}

.trainingCard {
  cursor: pointer;
  margin: 6px 0;
}
</style>
