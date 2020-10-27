const app = Vue.createApp({
	data() {
		return {
			tasks: [],
			taskToAdd: '',
			isHidden: false,
		}
	},
	computed: {
		buttonCaption() {
			if (this.isHidden) return 'Show List'
			return 'Hide List'
		},
	},
	methods: {
		addTask() {
			this.tasks.push(this.taskToAdd)
			this.taskToAdd = ''
		},
		removeTask(index) {
			this.tasks.splice(index, 1)
		}
		switchToHidden() {
			this.isHidden = !this.isHidden
		},
	},
})

app.mount('#assignment')
