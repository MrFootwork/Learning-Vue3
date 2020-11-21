<template>
  <ul>
    <LearningResources
      v-for="res in storedResources"
      :key="res.id"
    ></LearningResources>
  </ul>
</template>

<script>
import LearningResources from './components/learning-resources/LearningResources.vue';

export default {
  components: {
    LearningResources
  },
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
