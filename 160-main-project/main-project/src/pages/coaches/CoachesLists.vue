<template>
  <section>
    FILTER
  </section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">
        Register as Coach
      </router-link>
      <ul v-if="hasCoaches">
        List OF COACHES
        <li v-for="coach in filteredCoaches" :key="coach.id">
          {{ coach.firstName }}
        </li>
      </ul>
      <h3 v-else>No Coaches found.</h3>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    }
  }
};
</script>
