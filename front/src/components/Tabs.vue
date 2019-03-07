<template>
  <div>
    <v-tabs
      dark
      slider-color="yellow"
    >
      <v-tab
        v-for="option in options"
        :key="option.name"
        ripple
      >
        {{ option.name }}
      </v-tab>
       <v-tab-item
        v-for="n in 2"
        :key="n"
      >
        <training-plan-card v-for="training in trainings"
        class="trainingPlanCard"
        :key="training.nick"
        :trainingplan="training"/>
       </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import TrainingPlanCard from './TrainingPlanCard.vue';

export default {
  name: 'Tabs',
  components: {
    TrainingPlanCard
  },
  data () {
    return {
      options: [
        {
          name: 'Plan de Entrenamiento'
        },
        {
          name: 'Graphics'
        },
      ],
       trainings: [
        {
          name: 'PlanEntreno 1',
          activities: []
        },
        {
          name: 'PlanEntreno 2',
          activities: []
        },
        {
          name: 'PlanEntreno 3',
          activities: []
        },
        {
          name: 'PlanEntreno 4',
          activities: []
        },
        {
          name: 'PlanEntreno 5',
          activities: []
        },
        {
          name: 'PlanEntreno 6',
          activities: []
        },
      ]
    }
  }
}
</script>

<style>
.trainingPlanCard {
  cursor: pointer;
}
</style>
