<template>
  <div>
    <back-top-bar/>
    <div>
      <v-layout align-center justify-center>
        <v-flex xs12 md6>
          <v-text-field prepend-inner-icon="search"></v-text-field>
        </v-flex>
      </v-layout>
      <h2>Plan de Entrenamiento</h2>
      <training-card v-for="training in trainings"
          class="trainingCard"
          :key="training.name"
          :url="'/activities'"
          :methods="methods"
          :training="training"
      >
      <template v-slot:modify>
        <modify-form
            :type="'Training'"
            :name="training.name"
        />
      </template>
      </training-card>
    </div>
    <floating-button @click.native="dialog = !dialog">
      add
    </floating-button>
    <add-dialog 
      :dialog="dialog"
      @isActivated="isDialogActivated"
    >
      <template v-slot:text>
        <training-form @training="changeTraining" />
      </template>
      <template v-slot:buttons>
        <v-btn color="blue darken-1" flat @click="closeDialog()">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="saveDialog()">Save</v-btn>
      </template>
      </add-dialog>
    </div>
</template>

<script>
import TrainingCard from '../components/TrainingCard.vue'
import BackTopBar from '../../../../../HotelSeacher/front/src/components/Basic/BackTopBar.vue'
import ModifyForm from '../components/ModifyForm.vue'
import FloatingButton from '../components/FloatingButton.vue'
import AddDialog from '../components/AddDialog.vue'
import TrainingForm from '../components/TrainingForm.vue'

export default {
  name: 'Trainings',
  components: {
    TrainingCard,
    BackTopBar,
    ModifyForm,
    FloatingButton,
    AddDialog,
    TrainingForm
  },
  data () {
    return {
      dialog: false,
      val: '',
      trainings: [
        {
          name: 'Entreno 1',
          activities: []
        },
        {
          name: 'Entreno 2',
          activities: []
        },
        {
          name: 'Entreno 3',
          activities: []
        },
        {
          name: 'Entreno 4',
          activities: []
        },
        {
          name: 'Entreno 5',
          activities: []
        },
        {
          name: 'Entreno 6',
          activities: []
        }
      ],
      methods: {
        clone: this.clone,
        delete: this.delete
      }
    }
  },
  methods: {
    clone () {
      console.log('clonar')
    },
    delete () {
      console.log('eliminar')
    },
    changeTraining (value) {
      this.val= value
    },
    closeDialog () {
      this.dialog = !this.dialog
    },
    saveDialog () {
      this.trainings.push(this.val)
      this.dialog = !this.dialog
    },
    isDialogActivated (value) {
      this.dialog = value
    }
  }
}
</script>

<style>
.trainingCard {
  cursor: pointer;
}
</style>
