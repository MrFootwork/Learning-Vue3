const app = Vue.createApp({
	data() {
		return {
			name: 'Pandau',
			age: 35,
			random: Math.random().toFixed(2),
			foundImage:
				'https://phillipbrande.files.wordpress.com/2013/10/random-pic-14.jpg',
		}
	},
	methods: {
		randomMethod() {
			return Math.random().toFixed(2)
		},
	},
})

app.mount('#assignment')
