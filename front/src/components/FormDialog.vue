<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="yellow" v-on="on">Modificar</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-card-text>
        <modify-form/>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ModifyForm from './ModifyForm.vue'

export default {
  name: 'FormDialog',
  components: {
    ModifyForm
  },
  data () {
    return {
      dialog: false
    }
  }

}
</script>

<style>

</style>
