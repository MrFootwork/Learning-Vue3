<template>
  <ul>
    <learning-resource
      v-for="res in storedResources"
      :key="res.id"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue';

export default {
  components: { LearningResource },
  data() {
    return {
      storedResources: [
        {
          id: 'official-giude',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google',
          link: 'https://google.com'
        }
      ]
    };
  }
};
</script>
