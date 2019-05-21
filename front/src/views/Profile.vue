<template>
  <div>
    <v-flex xs12 sm8 offset-sm2 md8>
      <card-profile @modifyUser="modifyUser"/>
    </v-flex>
    <v-flex class="wrapper wrapper__center progressCircular">
      <v-progress-circular
        v-if="wait"
        :size="150"
        :width="7"
        color="black"
        indeterminate
      />
    </v-flex>
    <v-flex xs12 sm8 offset-sm2 md8>
      <calendar v-if="!wait" :events="events"></calendar>
    </v-flex>
    <p></p>
    <v-flex xs12 sm8 offset-sm2 md8>
      <tabs v-if="!wait"></tabs>
    </v-flex>
    <floating-button v-if="user.userType === 2"
      @click.native="dialog = !dialog">
      add
    </floating-button>
    <add-dialog
      :message="'Add Plan Training'"
      :dialog="dialog"
      @isActivated="isDialogActivated">
        <template v-slot:text>
          <plan-training-form
            v-if="dialog"
            @plantraining="newPlanTraining"
            :userPlan="user"
            />
        </template>
        <template v-slot:buttons>
          <v-btn color="blue darken-1" flat @click="closeDialog()">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="saveDialog()">Save</v-btn>
        </template>
    </add-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { ADD_TRAINING_PLAN, GET_PLANTRAININGS } from '../store/types/TrainingPlanTypes'
import { GET_TRAININGS } from '../store/types/TrainingTypes'
import { GET_ACTIVITIES } from '../store/types/ActivityTypes'
import { MODIFY_USER, AUTHENTICATE, GET_USERS_BY_CLUB } from '../store/types/UserTypes'
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
      plantraining: {},
      events: [],
      usersClubs: [],
      wait: '',
      activities: []
    }
  },
  methods: {
    newPlanTraining (value) {
      this.plantraining = value
    },
    changeTraining (value) {
      this.val = value
    },
    closeDialog () {
      this.dialog = !this.dialog
    },
    saveDialog () {
      if (this.plantraining.name.length > 0) {
        this.addPlanTraining(this.plantraining)
        this.dialog = !this.dialog
      }
    },
    isDialogActivated (value) {
      this.dialog = value
    },
    modifyUser (value) {
      this.updateUser(value)
    },
    ...mapActions({
      addPlanTraining: ADD_TRAINING_PLAN,
      getPlanTrainings: GET_PLANTRAININGS,
      getTrainings: GET_TRAININGS,
      updateUser: MODIFY_USER,
      getUser: AUTHENTICATE,
      getUsersByClub: GET_USERS_BY_CLUB,
      getActivities: GET_ACTIVITIES
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
      let user = await this.getUser()
      this.usersClubs = await this.getUsersByClub(user.club)
      let plantrainings = await this.getPlanTrainings(user)
      plantrainings.forEach(async plantraining => {
        let trainings = await this.getTrainings(plantraining.id)
        for (let i = 0; i < trainings.length; i++) {
          var date = new Date(trainings[i].timetraining)
          trainings[i].timetraining = date.toISOString().substr(0, 10)
          this.events.push(trainings[i])
          await this.getActivities({ plantraining_id: plantraining.id, training_id: trainings[i].id })
        }
      })
    } catch (error) {
      return error
    } finally {
      this.wait = false
    }
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
.wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap
}
.wrapper__center{
  align-items: center
}

.progressCircular {
  margin: 15px 0;
}
</style>
