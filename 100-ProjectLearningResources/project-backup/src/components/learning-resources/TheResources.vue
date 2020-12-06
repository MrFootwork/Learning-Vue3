<template>
  <base-card>
    <base-button
      @click="switchTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button @click="switchTab('add-resource')" :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource
  },
  provide() {
    return {
      resources: this.storedResources
    };
  },
  data() {
    return {
      // selectedTab: 'stored-resources',
      selectedTab: 'add-resource',
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
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  methods: {
    switchTab(tab) {
      this.selectedTab = tab;
    }
  }
};
</script>

<style></style>
