<template>
  <b-navbar toggleable="md" :type="scheme" :variant="scheme">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand>PALAS Programming Export</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <!-- signed in -->
        <b-nav-item v-if="auth" class="nav-link-item">
          <small>Logged in as {{auth.user_details.username}}</small>&nbsp;
          <a href="" @click="logout">Logout</a>
        </b-nav-item>
        <!-- signed out -->
        <b-nav-item class="nav-link-item" v-else>
          <nuxt-link to="/login">Login</nuxt-link>
        </b-nav-item>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>

  import {mapState, mapActions} from 'vuex'

  export default {
    computed:{
      ...mapState({
        auth: state => state.auth
      })
    },
    methods:{
      ...mapActions(['logout'])
    },
    props: {
      scheme: {
        required: true
      }
    }
  }
</script>

<style scoped>

  .nav-link-item a{
    color: white !important;
    font-size: 18px;
  }

  .nav-link-item a:hover{
    text-decoration: none !important;
    color: #0069d9 !important;
  }

  .nav-link-item small{
    font-weight: lighter;
    color: white !important;
  }

  .nav-link-item small:hover{
    cursor: default;
  }

</style>
