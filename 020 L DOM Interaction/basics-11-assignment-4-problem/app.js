const app = Vue.createApp({
	data() {
		return {
			userClass: '',
			hidden: false,
		}
	},
	computed: {
		displayClass() {
			return this.userClass
		},
		visibleClass() {
			if (this.hidden) return 'hidden'
			return 'visible'
		},
	},
	methods: {
		readClass(event) {
			this.userClass = event.target.value
		},
		toggleHidden() {
			this.hidden = !this.hidden
		},
	},
})

app.mount('#assignment')
