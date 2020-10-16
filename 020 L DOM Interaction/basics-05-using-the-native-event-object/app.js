const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			howMuch: 0,
		}
	},
	computed: {
		fullname() {
			if (this.name === '') {
				return ''
			}
			return `${this.name} Ting`
		},
	},
	methods: {
		// setName(event, lastName) {
		// 	this.name = event.target.value
		// },
		add(num) {
			this.counter += num
		},
		reduce(num) {
			this.counter -= num
		},
		resetInput() {
			this.name = ''
		},
		storeAdder(event) {
			this.howMuch = +event.target.value
		},
	},
})

app.mount('#events')
