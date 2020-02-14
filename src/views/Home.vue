<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
import _ from 'lodash'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      person: {
        age: 18,
        name: 'Alex'
      }
    }
  },
  computed: {
    msg () {
      return `Hello, ${_.get(this.person, 'name')}. Welcome to Vue.js!`
    }
  }
}
</script>
