<template>
  <div id="app">
    <v-app>
      <v-content  class="a">
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.a {
background: rgba(181,226,242,1);
background: -moz-linear-gradient(left, rgba(181,226,242,1) 0%, rgba(245,245,245,1) 51%, rgba(181,226,242,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(181,226,242,1)), color-stop(51%, rgba(245,245,245,1)), color-stop(100%, rgba(181,226,242,1)));
background: -webkit-linear-gradient(left, rgba(181,226,242,1) 0%, rgba(245,245,245,1) 51%, rgba(181,226,242,1) 100%);
background: -o-linear-gradient(left, rgba(181,226,242,1) 0%, rgba(245,245,245,1) 51%, rgba(181,226,242,1) 100%);
background: -ms-linear-gradient(left, rgba(181,226,242,1) 0%, rgba(245,245,245,1) 51%, rgba(181,226,242,1) 100%);
background: linear-gradient(to right, rgba(181,226,242,1) 0%, rgba(245,245,245,1) 51%, rgba(181,226,242,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b5e2f2', endColorstr='#b5e2f2', GradientType=1 );

}

</style>
