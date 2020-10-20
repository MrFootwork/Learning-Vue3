const app = Vue.createApp({
	data() {
		return {
			userClass: '',
			hidden: false,
			userBackground: '',
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
		saveBackgroundColor(event) {
			this.userBackground = event.target.value
		},
	},
})

app.mount('#assignment')
