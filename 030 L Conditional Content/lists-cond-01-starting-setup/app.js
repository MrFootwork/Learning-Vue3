const app = Vue.createApp({
	data() {
		return {
			goals: [],
			enteredGoalValue: 'Learn all about Vue!',
		}
	},
	methods: {
		addGoal() {
			this.goals.push(this.enteredGoalValue)
			this.enteredGoalValue = ''
		},
		removeGoal(index) {
			this.goals.splice(index, 1)
		},
	},
})

app.mount('#user-goals')
