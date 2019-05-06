<template>
  <div>
    <v-flex xs12 sm8 offset-sm2 md8>
      <card-profile :user="user"></card-profile>
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
      user: {
        name: 'pepe',
        nick: '@pepiro',
        img: 'user.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In voluptate facere repellat voluptatem suscipit recusandae ipsa repudiandae minima velit asperiores ab corporis esse illum, ullam unde cumque harum, excepturi quisquam. Tempora incidunt quaerat eaque. Corporis debitis facilis eaque ratione nam quia molestiae id commodi aliquid reprehenderit nihil pariatur consequuntur illum omnis, accusantium esse aliquam consequatur impedit reiciendis ipsam sit neque. Nobis explicabo ipsum rem fugit quia at numquam. Maiores vitae temporibus iure labore officiis. Repudiandae in mollitia velit ratione adipisci. Aperiam rem nam, consequuntur numquam eius cupiditate corporis. Quaerat sapiente doloremque aperiam nihil nobis optio eaque quas qui beatae voluptatibus, similique dolorem omnis rerum totam quos molestiae ducimus minus et dolore animi quisquam officiis cupiditate. Iusto minima tenetur ducimus sit magnam dolorem nobis ipsum! Deserunt quaerat dolorem temporibus molestias. Nulla?'
      },
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
    ...mapActions({
      addPlanTraining: ADD_TRAINING_PLAN,
      getPlanTrainings: GET_PLANTRAININGS,
      getTrainings: GET_TRAININGS
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
