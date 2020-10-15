const app = Vue.createApp({
	data() {
		return {
			counter: 0,
		}
	},
	methods: {
		addToCounter() {
			this.counter++
		},
		removeFromCounter() {
			this.counter--
		},
	},
})

app.mount('#events')
