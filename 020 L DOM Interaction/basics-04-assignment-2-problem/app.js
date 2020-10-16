const app = Vue.createApp({
	data() {
		return {
			userInput1: '',
			userInput2: '',
		}
	},
	methods: {
		showAlert() {
			alert('This the ALERT!')
		},
		saveInput(event) {
			this.userInput1 = event.target.value
		},
		readOnEnter(event) {
			this.userInput2 = event.target.value
		},
	},
})

app.mount('#assignment')
