<template>
    <v-toolbar app>
        <v-btn icon @click="closeDialog" >
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <strong v-if="$route.name === 'TRAININGS'" class="navbar__font"> 
          <a @click="goTo('PROFILE',{})">TrainingsPlan/</a><span>{{idplan}}/Trainings</span>
        </strong>
        <strong v-if="$route.name === 'ACTIVITIES'" class="navbar__font"> 
          <a @click="goTo('PROFILE',{})">TrainingsPlan/</a><span>{{idplan}}/</span>
          <a @click="goTo('TRAININGS',{idPlan:idplan})">Trainings/</a><span>{{idtraining}}/Activities</span>
        </strong>
        <strong v-if="$route.name === 'CHRONOMETER'" class="navbar__font"> 
          <a @click="goTo('PROFILE',{})">TrainingsPlan/</a><span>{{idplan}}/</span>
          <a @click="goTo('TRAININGS',{idPlan:idplan})">Trainings/</a><span>{{idtraining}}/</span>
          <a @click="goTo('ACTIVITIES',{idPlan:idplan,idTraining:idtraining})">Activities/</a>
          <span>{{idActivity}}/Chronometer</span>
        </strong>
        <strong v-if="$route.name === 'CHRONOSEETIMES'" class="navbar__font"> 
          <a @click="goTo('PROFILE',{})">TrainingsPlan/</a><span>{{idplan}}/</span>
          <a @click="goTo('TRAININGS',{idPlan:idplan})">Trainings/</a><span>{{idtraining}}/</span>
          <a @click="goTo('ACTIVITIES',{idPlan:idplan,idTraining:idtraining})">Activities/</a>
          <span>{{idActivity}}/Chronoseetimes</span>
        </strong>
        <v-spacer/>
        <user-settings/>
    </v-toolbar>
</template>

<script>
import UserSettings from './UserSettings.vue'

export default {
  name: 'BackTopBar',
  components: {
    UserSettings
  },
  data () {
    return {
      idplan: this.$route.params.idPlan,
      idtraining: this.$route.params.idTraining,
      idActivity: this.$route.params.idActivity,
    }
  },
  methods: {
    closeDialog () {
      this.$router.go(-1)
    },
    goTo (route, params) {
      if (route !== undefined) {
        this.$router.push({ name: route, params: params })
      }
    },
  }
}
</script>

<style scoped>
.navbar__font {
  font-size: 1.2rem;
}
@media(max-width: 400px) {
  .navbar__font {
    font-size: 0.68rem;
  }
}

@media(max-width: 500px) {
  .navbar__font {
    font-size: 0.9rem;
  }
}
</style>

