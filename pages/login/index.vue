<template>
  <b-row>
    <LoginForm />
  </b-row>
</template>

<script>

  import LoginForm from '~/components/loginForm.vue'

  export default {
    components: {
      LoginForm
    },
    middleware: ['noAuth']
  }
</script>
