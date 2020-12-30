<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: []
    };
  },
  inject: ['teams', 'users'],
  props: ['teamId'],
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    }
  },
  methods: {
    loadTeamMembers(teamId) {
      // console.log(this.$route.query); //accessing the query paramter
      const selectedTeams = this.teams.find(team => team.id === teamId);
      const selectedMembers = this.users.filter(user =>
        selectedTeams.members.includes(user.id)
      );
      this.members = selectedMembers;
      this.teamName = selectedTeams.name;
    }
  },
  created() {
    this.loadTeamMembers(this.teamId);
  },
  //alternative to watch:
  //getting params via routing
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate TeamMembers cmp');
    console.log(to, from);
    // this.loadTeamMembers(to.params.teamId);
    next();
  }
  // data() {
  //   return {
  //     teamName: 'Test',
  //     members: [
  //       { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
  //       { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
  //     ],
  //   };
  // },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
