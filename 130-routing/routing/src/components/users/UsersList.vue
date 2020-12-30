<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users'],
  data() {
    return {
      dataSaved: false
    };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    saveChanges() {
      this.dataSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter cmp');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouterLeave cmp');
    console.log(to, from);
    if (this.dataSaved) {
      next();
    } else {
      const leavConfirmed = confirm(
        "You haven't saved your data, yet. Are you sure to leave this page? You might loose data."
      );
      next(leavConfirmed);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
