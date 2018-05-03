<template>
  <footer class="app-footer">
    <div class="app-container">
      <span id="app-version" class="text-muted">Version | {{git}}</span>
    </div>
  </footer>
</template>

<script>

  import {mapState} from 'vuex'

  export default{
    computed:{
      ...mapState({
        git: state => state.gitHash
      })
    }
  }

</script>

<style scoped>
  #app-version{
    margin-left: 15px;
  }
</style>
