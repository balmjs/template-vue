<template>
  <div class="container">
    <img :src="logo" />
    <hello></hello>
  </div>
</template>

<script>
import Hello from '@/views/components/hello';
import logo from '@/assets/logo.png';

export default {
  name: 'App',
  components: {
    Hello
  },
  data() {
    return {
      logo
    };
  }
};
</script>
