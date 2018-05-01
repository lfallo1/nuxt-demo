<template>
  <b-row>
    <b-col md="4" offset-md="4" class="pad-15">
        <b-form @submit.prevent="submit">
          <b-form-group>
            <b-form-input id="usernameInput"
                          type="text"
                          v-model="username"
                          placeholder="Username"
                          v-focus>
            </b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input id="passwordInput"
                          type="password"
                          v-model="password"
                          placeholder="Password">
            </b-form-input>
          </b-form-group>
          <b-button :disabled="loading" type="submit" variant="primary">Login</b-button>
        </b-form>
    </b-col>
  </b-row>
</template>

<script>

  import {mapActions, mapState} from 'vuex'
  import axios from 'axios'

  export default {
    data(){
      return {
        username: '',
        password: ''
      }
    },
    computed:{
      ...mapState(['loading'])
    },
    methods: {
      ...mapActions(['setAuth', 'login']),
      submit(){
        this.login({username: this.username, password: this.password});
      }
    },
    middleware: ['noAuth']
  }
</script>

<style scoped>

  .pad-15{
    margin-top: 55px;
  }

  input{
    border-top: none;
    border-right: none;
    border-left: none;
    font-size: 20px;
  }

  input:active, input:focus{
    outline: none !important;
    box-shadow: none;
    border-color: #0069d9;
    font-weight: bolder;
  }

  button{
    width: 100%;
    font-size: 22px;
    font-weight: bolder;
  }

</style>
