<template>
  <div class="container">
    <img :src="logo" alt="">
    <hello></hello>
  </div>
</template>

<script>
import Hello from '../components/hello';

export default {
  name: 'app',
  components: {
    Hello
  },
  data() {
    return {
      logo: require('../../../images/logo.png')
    };
  }
};
</script>
