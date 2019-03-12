<template>
  <v-app>
    <div>
<app-header></app-header>

<app-footer></app-footer>
 <v-content>
    <router-view/>
</v-content>
</div>
  </v-app>
</template>


<script>
  import AppHeader from '@/components/AppHeader'
  export default{
    components:{
      AppHeader
    }
  }
</script>
<style scoped>

</style>