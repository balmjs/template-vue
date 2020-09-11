<template>
  <h1>{{ msg }}</h1>
  <p>
    thx
    <a href="//balm.js.org/">BalmJS</a>
  </p>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';

export default {
  name: 'hello',
  setup() {
    const msg = ref('Hello Vue@3 App');

    return {
      msg
    };
  }
  // OR
  // setup() {
  //   const state = reactive({
  //     msg: 'Hello Vue@3 App'
  //   });

  //   return {
  //     ...toRefs(state)
  //   };
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
