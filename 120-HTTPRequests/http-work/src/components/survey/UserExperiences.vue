<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found. Start adding some survey results!
      </p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  data() {
    return {
      results: [],
      isLoading: false
    };
  },
  methods: {
    async loadExperiences() {
      this.results = [];
      this.isLoading = true;
      const response = await fetch(
        'https://vue-http-demo-7bbe9-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
      );
      const data = await response.json();
      this.isLoading = false;
      for (const id in data) {
        this.results.push({
          id: id,
          name: data[id].name,
          rating: data[id].rating
        });
      }
      console.log(data);
      console.log(this.results);
    }
  },
  components: {
    SurveyResult
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
