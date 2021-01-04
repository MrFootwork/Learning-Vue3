<template>
  <base-container title="Vuex" v-if="isIn">
    <the-counter></the-counter>
    <favourite-value></favourite-value>
    <button @click="increment">Add 1</button>
    <button @click="increase({ value: 10 })">Add 10</button>
  </base-container>
  <base-container title="Auth" name="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavouriteValue,
    UserAuth
  },
  // computed: {
  //   counter() {
  //     return this.$store.state.counter;
  //   }
  // },
  computed: {
    ...mapGetters({
      isIn: 'isLoggedIn'
    })
  },
  methods: {
    // addOne() {
    //   // ++this.$store.state.counter;
    //   this.$store.dispatch('increment');
    // },
    // addMore() {
    //   // this.$store.dispatch('increase', { value: 10 });
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10
    //   });
    // }
    ...mapActions(['increment', 'increase'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
