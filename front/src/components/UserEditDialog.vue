<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn depressed color="grey" v-on="on">Edit Profile</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Modify User</span>
      </v-card-title>
      <v-card-text>
        <v-text-field label="Username" v-model="editUser.username"></v-text-field>
        <v-text-field type="password" label="Password" v-model="password"></v-text-field>
        <v-text-field type="password" label="Confirm Password" 
        :disabled="diabledField" v-model="confirmPassword"></v-text-field>
        <v-textarea label="Description" outline v-model="editUser.description"></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="closeDialog()">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="saveDialog()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions} from 'vuex'
import { AUTHENTICATE } from '../store/types/UserTypes'

export default {
  name: 'UserEditDialog',
  data () {
    return {
      dialog: false,
      editUser: {},
      password:"",
      confirmPassword:""
    }
  },  
  methods: {
    closeDialog () {
      this.dialog = !this.dialog
    },
    saveDialog () {
      if (this.password === this.confirmPassword) {
        if (this.password.length > 0) {
          this.editUser.password = this.password
        }
        console.log(this.editUser)
        this.$emit('modifyUser',this.editUser)
        this.dialog = !this.dialog
      } else {

      }
    },
    ...mapActions({
      getUser: AUTHENTICATE
    })
  },
  computed: {
    diabledField () {
      return this.password.length == 0
    }
  },
  async created () {
    let user = await this.getUser()
    this.editUser = Object.assign({},user)
    this.editUser.password =""
  }
}
</script>

<style>

</style>
