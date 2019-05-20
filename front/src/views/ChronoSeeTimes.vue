<template>
  <div>
    <back-top-bar/>
    <div class="wrapper wrapper__center">
      <v-progress-circular
        v-if="wait"
        :size="150"
        :width="7"
        color="black"
        indeterminate
      />
      <div v-if="chrono.length > 0 && wait == false">
        <h3 class="display-2" >Last Time</h3>
        <p class="timer__countdown font-weight-light">{{chrono[0].time}}</p>
      </div>
      <div v-if="error && wait == false || chrono.length == 0 && wait == false">
         <p class="font-weight-light display-2">No Chrono Time Found</p>
      </div>
      <div class="phases" v-if="phases.length > 0">
        <h4 class="display-1">Phases</h4>
        <v-card :width="300" class="card__phase"
          v-for="(phase,index) in phases" :key="index">
          <div class="wrapper wrapper__between wrapper__center">
            <span class="font-weight-bold">{{phase.meters}}:</span><span class="font-weight-light">{{phase.timePhase}}</span>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import BackTopBar from '../components/BackTopBar.vue'
import { mapState, mapActions } from 'vuex'
import { GET_CHRONO_BY_IDACTIVITY } from '../store/types/ChronoTypes'
import { GET_PHASES_BY_CHRONO } from '../store/types/PhaseTypes'

export default {
  name: 'ChronoSeeTimes',
  components: {
    BackTopBar
  },
  data () {
    return {
      chrono: [],
      phases: [],
      wait: false,
      error: false
    }
  },
  methods: {
    ...mapActions({
      getChronoByActivity: GET_CHRONO_BY_IDACTIVITY,
      getPhasesByChrono: GET_PHASES_BY_CHRONO
    })
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  async created () {
    try {
      this.wait = true
      this.chrono = await this.getChronoByActivity({activityid:this.$route.params.idActivity})
      this.chrono = this.chrono.filter(chrono => chrono.user_id == this.user.id)
      try {
        this.phases = await this.getPhasesByChrono(this.chrono[0].id)
        this.phases = this.phases.sort((a,b) => {
          return a.meters - b.meters
          })
      } catch (error) {
        return error
      }

    } catch (error) {
      this.error = true
      return error
    } finally {
      this.wait = false
    }
  }
}
</script>

<style scoped>

.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.wrapper__center{
  align-items: center;
}
.wrapper__between{
  flex-direction: row;
  justify-content:space-between ;
}
.card__phase {
  margin: 10px 0;
  padding: 8px
}

.timer__countdown {
  font-size: 2.5rem
}

span {
  font-size: 18px;
}

.phases {
  margin:30px 0 0 0;
}

</style>
