const app = Vue.createApp({
	data() {
		return {
			result: 0,
		}
	},
	watch: {
		displayedResult() {
			setTimeout(() => {
				this.result = 0
			}, 5000)
			// const that = this
			// setTimeout(function() {
			// 	that.result = 0
			// }, 5000)
		},
	},
	computed: {
		displayedResult() {
			if (this.result < 37) return 'Not there yet'
			if (this.result === 37) return this.result
			if (this.result > 37) return 'Too much!'
		},
	},
	methods: {
		add(num) {
			this.result += num
		},
	},
})

app.mount('#assignment')
