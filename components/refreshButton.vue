<template>
  <div class="align-center col-xs-12">
    <b-btn class="refreshPrograms" variant="outline-success" @click="refreshPrograms" :disabled="refreshing">
      <i class="material-icons">autorenew</i>{{refreshProgramsText}}
    </b-btn>
  </div>
</template>

<script>

  import {mapState, mapActions} from 'vuex'

  export default{
    computed: {
      ...mapState({
        refreshing: state => state.reports.refreshing
      }),
      refreshProgramsText(){
        return this.refreshing ? 'Refresh in Progress' : 'Refresh Programs'
      }
    },
    methods: {
      ...mapActions({refreshPrograms: 'reports/refreshPrograms', logout: 'logout'}),
    }
  }
</script>
