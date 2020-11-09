<template>
  <ul>
    <knowledge-element
      v-for="topic in providedTopics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  inject: ['providedTopics']
};
</script>
