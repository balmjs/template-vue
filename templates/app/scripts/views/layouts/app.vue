<template>
  <div class="container">
    <img :src="logo" alt="">
    <hello></hello>
  </div>
</template>

<script>
import hello from '../components/hello';
import logo from '../../../images/logo.png';

export default {
  name: 'app',
  components: {
    hello
  },
  data() {
    return {
      logo
    };
  }
};
</script>
