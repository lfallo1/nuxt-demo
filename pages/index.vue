<template>
  <section class="container">
    <div>
      <h1 class="title">
        Programming Export
      </h1>
      <div class="row" v-if="auth">
        <div class="align-center col-xs-12">
          <b-btn class="refreshPrograms" variant="outline-success" @click="refreshPrograms" :disabled="refreshing">
            <i class="material-icons">autorenew</i>{{refreshProgramsText}}
          </b-btn>
        </div>
      </div>
      <div id="please-login-wrapper" v-else>
        <h4 class="title">Please <nuxt-link to="/login">login</nuxt-link> to refresh worksheets.</h4>
      </div>
    </div>

  </section>
</template>

<script>

  import {mapState, mapActions} from 'vuex'

  export default {

    computed: {
      ...mapState({
        refreshing: state => state.reports.refreshing,
        auth: state => state.auth
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

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  h1.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .align-center {
    margin: 0px auto;
    margin-top: 10px !important;
  }

  .refreshPrograms{
    font-size: 30px;
  }

  .refreshPrograms i{
    margin-right: 10px;
  }

  #please-login-wrapper{
    margin-top: 25px;
    text-align: center;
  }

  #please-login-wrapper a:hover{
    text-decoration: none;
    color: #28a745;
  }

</style>
