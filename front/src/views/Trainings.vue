<template>
  <div>
    <back-top-bar/>
    <div>
      <v-layout align-center justify-center>
        <v-flex xs12 md6>
          <v-text-field
          v-model="searcherValue"
          prepend-inner-icon="search"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <h2>Plan de Entrenamiento</h2>
      <div v-if="trainings.length === 0 && !wait">
        <p>Not Trainings Found</p>
      </div>
      <v-flex class="wrapper wrapper__center progressCircular">
        <v-progress-circular
          v-if="wait"
          :size="150"
          :width="7"
          color="black"
          indeterminate
        />
      </v-flex>
      <training-card v-for="training in searchTraining"
          class="trainingCard"
          :key="training.id"
          :url="url"
          :params="{idPlan: idplan, idTraining: training.id}"
          :methods="methods"
          :training="training"
          :newUpdate="updatetraining"
          :message="'Modify Training'"
      >
      <template v-slot:modify>
        <training-modify-form
          :training="training"
          @updateInstance="updateInstance"
        />
      </template>
      </training-card>
    </div>
    <floating-button v-if="user.userType === 2"
      @click.native="dialog = !dialog">add</floating-button>
    <add-dialog
      :message="'Add Training'"
      :dialog="dialog"
      @isActivated="isDialogActivated"
    >
      <template v-slot:text>
        <training-form v-if="dialog" @training="changeTraining" />
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
import { GET_TRAININGS, GET_TRAINING_BY_ID, ADD_TRAINING, MODIFY_TRAINING,
  CLONE_TRAINING, DELETE_TRAINING } from '../store/types/TrainingTypes'
import TrainingCard from '../components/TrainingCard.vue'
import BackTopBar from '../components/BackTopBar.vue'
import TrainingModifyForm from '../components/TrainingModifyForm.vue'
import FloatingButton from '../components/FloatingButton.vue'
import AddDialog from '../components/AddDialog.vue'
import TrainingForm from '../components/TrainingForm.vue'

export default {
  name: 'Trainings',
  components: {
    TrainingCard,
    BackTopBar,
    TrainingModifyForm,
    FloatingButton,
    AddDialog,
    TrainingForm
  },
  data () {
    return {
      dialog: false,
      url: 'ACTIVITIES',
      methods: {
        clone: (params) => this.cloneTraining(params),
        update: (params) => this.modifyTraining(params),
        delete: (params) => this.deleteTraining(params)
      },
      idplan: this.$route.params.idPlan,
      train: {},
      updatetraining: {},
      error: false,
      searcherValue: '',
      wait: false
    }
  },
  methods: {
    changeTraining (value) {
      console.log(value)
      this.train = value
    },
    updateInstance (value) {
      console.log(value)
      this.updatetraining = value
    },
    closeDialog () {
      this.dialog = !this.dialog
    },
    saveDialog () {
      var request = {
        plantraining_id: this.idplan,
        name: this.train.name,
        description: this.train.description,
        timetraining: this.train.timetraining
      }
      if (this.train.name.length > 0) {
        this.addTraining(request)
        this.dialog = !this.dialog
      }
    },
    isDialogActivated (value) {
      this.dialog = value
    },
    ...mapActions({
      getTrainings: GET_TRAININGS,
      addTraining: ADD_TRAINING,
      cloneTraining: CLONE_TRAINING,
      modifyTraining: MODIFY_TRAINING,
      deleteTraining: DELETE_TRAINING
    })
  },
  computed: {
    ...mapState({
      trainings: state => state.trainings,
      user: state => state.user
    }),
    searchTraining () {
      return this.trainings.filter(training => training.name.toLowerCase().includes(this.searcherValue))
    }
  },
  async created () {
    this.wait = true
    await this.getTrainings(this.$route.params.idPlan)
    this.wait = false
  }
}
</script>

<style scoped>
.trainingCard {
  cursor: pointer;
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
