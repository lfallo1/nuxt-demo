<template>
  <footer class="footer">
      <span class="text-muted">Version | {{git}}</span>
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
