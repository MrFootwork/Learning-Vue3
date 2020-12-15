<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul>
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
      result: []
    };
  },
  methods: {
    async loadExperiences() {
      // fetch(
      //   'https://vue-http-demo-7bbe9-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
      // )
      //   .then(function(response) {
      //     if (response.ok) {
      //       return response.json();
      //     }
      //   })
      //   .then(function(data) {
      //     console.log(data);
      //   });
      const response = await fetch(
        'https://vue-http-demo-7bbe9-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
      );
      const data = await response.json();
      console.log(data);
      // turn the Object data into an array and assign it to result!
    }
  },
  components: {
    SurveyResult
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
