<template>
  <div>
    <back-top-bar/>
    <div>
      <v-layout align-center justify-center>
        <v-flex xs12 md6>
          <v-text-field v-model="searcherValue" 
          prepend-inner-icon="search"></v-text-field>
        </v-flex>
      </v-layout>
      <h2>Warp Up</h2>
      <div v-if="activitiesWarn.length > 0">
        <training-card v-for="activity in activitiesWarn"
            class="trainingCard"
            :key="activity.id"
            :methods="methods"
            :training="activity"
            :newUpdate="updateActivity"
            >
            <template v-slot:modify>
              <activity-modify-form :activity="activity"
              @updatedActivity="updateInstance"/>
            </template>
        </training-card>
      </div>
      <div v-else>
        <p>There are not Warn Up Activities</p>
      </div>
      <h2>Training</h2>
      <div v-if="activitiesTrain.length > 0">
        <training-card v-for="activity in activitiesTrain"
            class="trainingCard"
            :key="activity.id"
            :methods="methods"
            :training="activity"
            :newUpdate="updateActivity"
            >
            <template v-slot:modify>
              <activity-modify-form :activity="activity"
              @updatedActivity="updateInstance"/>
            </template>
        </training-card>
      </div>
      <div v-else>
        <p>There are not Training Activities</p>
      </div>
      <h2>Come to Calm</h2>
      <div v-if="activitiesCalm.length > 0">
        <training-card v-for="activity in activitiesCalm"
            class="trainingCard"
            :key="activity.id"
            :methods="methods"
            :training="activity"
            :newUpdate="updateActivity"
            >
            <template v-slot:modify>
              <activity-modify-form :activity="activity"
              @updatedActivity="updateInstance"/>
            </template>
        </training-card>
      </div>
      <div v-else>
        <p>There are not Calm Activities</p>
      </div>
    </div>
    <floating-button v-if="user.userType === 2"
    @click.native="dialog = !dialog">
      add
    </floating-button>
    <add-dialog
      :dialog="dialog"
      @isActivated="isDialogActivated">
        <template v-slot:text>
          <activity-form @passActivity="changeActivity"/>
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
import { GET_ACTIVITIES, ADD_ACTIVITY, MODIFY_ACTIVITY,
  DELETE_ACTIVITY } from '../store/types/ActivityTypes'
import TrainingCard from '../components/TrainingCard.vue'
import BackTopBar from '../components/BackTopBar.vue'
import ActivityForm from '../components/ActivityForm.vue'
import ActivityModifyForm from '../components/ActivityModifyForm.vue'
import FloatingButton from '../components/FloatingButton.vue'
import AddDialog from '../components/AddDialog.vue'

export default {
  name: 'Activities',
  components: {
    TrainingCard,
    BackTopBar,
    ActivityForm,
    ActivityModifyForm,
    FloatingButton,
    AddDialog
  },
  data () {
    return {
      methods: {
        clone: (params) => this.addActivity(params),
        update: (params) => this.modifyActivity(params),
        delete: (params) => this.deleteActivity(params)
      },
      dialog: false,
      idplan: this.$route.params.idPlan,
      idtraining: this.$route.params.idTraining,
      newActivity: {},
      updateActivity: {},
      searcherValue: ""
    }
  },
  methods: {
    closeDialog () {
      this.dialog = !this.dialog
    },
    saveDialog () {
      this.addActivity(this.newActivity)
      this.dialog = !this.dialog
    },
    isDialogActivated (value) {
      this.dialog = value
    },
    changeActivity (value) {
      this.newActivity = value
    },
    updateInstance (value) {
      this.updateActivity = value
    },
    activityString (activity) {
      return `${activity.exercise}${activity.meters}
      ${activity.style}${activity.type}${activity.rhythm}`.toLowerCase()
    },
    ...mapActions({
      getActivities: GET_ACTIVITIES,
      addActivity: ADD_ACTIVITY,
      modifyActivity: MODIFY_ACTIVITY,
      deleteActivity: DELETE_ACTIVITY
    })
  },
  computed: {
    ...mapState({
      activities: state => state.activities,
      user: state => state.user
    }),
    activitiesWarn () {
      return this.searchTraining.filter(activity => activity.type == "Warm up")
    },
    activitiesTrain () {
      return this.searchTraining.filter(activity => activity.type == "Train")
    },
    activitiesCalm () {
      return this.searchTraining.filter(activity => activity.type == "Calm")
    },
    searchTraining () {
      return this.activities.filter(activity => this.activityString(activity).includes(this.searcherValue))
    },
  },
  created () {
    let params = {
      plantraining_id: this.idplan,
      training_id: this.idtraining
    }
    this.getActivities(params)
  }
}
</script>

<style>
.trainingCard {
  cursor: pointer;
}
</style>
