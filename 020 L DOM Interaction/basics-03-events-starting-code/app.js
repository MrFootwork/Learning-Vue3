const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			howMuch: 0,
			fullName: '',
			confirmedName: '',
		}
	},
	methods: {
		addToCounter(number) {
			this.counter += number
		},
		removeFromCounter(number) {
			this.counter -= number
		},
		storeNumber(event) {
			this.howMuch = +event.target.value
		},
		storeName(event, lastName) {
			this.fullName = `${event.target.value} ${lastName}`
		},
		confirmName(event) {
			this.confirmedName = this.fullName
		},
		submitForm() {
			alert('Submitted!')
		},
	},
})

app.mount('#events')
