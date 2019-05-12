<template>
    <v-toolbar app>
        <v-btn icon @click="closeDialog" >
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <strong> 
          <a v-if="idplan" @click="goTo('PROFILE',{})">TrainingsPlan/</a><span>{{idplan}}</span>
          <a v-if="idplan" @click="goTo('TRAININGS',{idPlan:idplan})">/Trainings/</a>
          <span v-if="idtraining">{{idtraining}}/Activities</span>
      </strong>
    </v-toolbar>
</template>

<script>
export default {
  name: 'BackTopBar',
  data () {
    return {
      idplan: this.$route.params.idPlan,
      idtraining: this.$route.params.idTraining,
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
