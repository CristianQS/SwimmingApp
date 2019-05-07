<template>
  <div>
    <v-flex xs12 sm8 offset-sm2 md8>
      <card-profile @modifyUser="modifyUser"/>
    </v-flex>
    <v-flex xs12 sm8 offset-sm2 md8>
      <calendar :events="events"></calendar>
    </v-flex>
    <v-flex xs12 sm8 offset-sm2 md8>
      <tabs></tabs>
    </v-flex>
    <floating-button @click.native="dialog = !dialog">
      add
    </floating-button>
    <add-dialog 
      :dialog="dialog"
      @isActivated="isDialogActivated">
        <template v-slot:text>
          <plan-training-form @plantraining="newPlanTraining"/>
        </template>
        <template v-slot:buttons>
          <v-btn color="blue darken-1" flat @click="closeDialog()">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="saveDialog()">Save</v-btn>
        </template>
    </add-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ADD_TRAINING_PLAN, GET_PLANTRAININGS } from '../store/types/TrainingPlanTypes'
import { GET_TRAININGS } from '../store/types/TrainingTypes'
import { MODIFY_USER } from '../store/types/UserTypes'
import Tabs from '../components/Tabs.vue'
import CardProfile from '../components/CardProfile.vue'
import Calendar from '../components/Calendar.vue'
import FloatingButton from '../components/FloatingButton.vue'
import AddDialog from '../components/AddDialog.vue'
import PlanTrainingForm from '../components/PlanTrainingForm.vue'

export default {
  name: 'Profile',
  components: {
    Tabs,
    CardProfile,
    Calendar,
    FloatingButton,
    AddDialog,
    PlanTrainingForm
  },
  data () {
    return {
      dialog: false,
      plantraining : {},
      events: []
    }
  },
  methods: {
    newPlanTraining (value) {
      this.plantraining = value
    },
    changeTraining (value) {
      this.val= value
    },
    closeDialog () {
      this.dialog = !this.dialog
    },
    saveDialog () {
      this.addPlanTraining(this.plantraining)
      this.dialog = !this.dialog
    },
    isDialogActivated (value) {
      this.dialog = value
    },
    modifyUser (value) {
      console.log(value)
      this.updateUser(value)
    },
    ...mapActions({
      addPlanTraining: ADD_TRAINING_PLAN,
      getPlanTrainings: GET_PLANTRAININGS,
      getTrainings: GET_TRAININGS,
      updateUser: MODIFY_USER,
    })
  },
  async created () {
    let user = {
      userid: 1
    }
    let plantrainings = await this.getPlanTrainings(user)    
    plantrainings.forEach(async plantraining => {
      let trainings = await this.getTrainings(plantraining.id)
      for (let i = 0; i < trainings.length; i++) {
        var date = new Date(trainings[i].timetraining)
        trainings[i].timetraining = date.toISOString().substr(0, 10)
        this.events.push(trainings[i])
      }
    })
  }

}
</script>

<style>
.card {
  margin: 10px 0;
}
.card__img {
  margin: 20px 0 0 10px;
}
</style>
