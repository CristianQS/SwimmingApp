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
background: rgba(22,178,240,1);
background: -moz-linear-gradient(left, rgba(22,178,240,1) 0%, rgba(139,218,240,1) 50%, rgba(22,178,240,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(22,178,240,1)), color-stop(50%, rgba(139,218,240,1)), color-stop(100%, rgba(22,178,240,1)));
background: -webkit-linear-gradient(left, rgba(22,178,240,1) 0%, rgba(139,218,240,1) 50%, rgba(22,178,240,1) 100%);
background: -o-linear-gradient(left, rgba(22,178,240,1) 0%, rgba(139,218,240,1) 50%, rgba(22,178,240,1) 100%);
background: -ms-linear-gradient(left, rgba(22,178,240,1) 0%, rgba(139,218,240,1) 50%, rgba(22,178,240,1) 100%);
background: linear-gradient(to right, rgba(22,178,240,1) 0%, rgba(139,218,240,1) 50%, rgba(22,178,240,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#16b2f0', endColorstr='#16b2f0', GradientType=1 );
}

</style>
