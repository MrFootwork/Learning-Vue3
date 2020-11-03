const app = Vue.createApp({
	data() {
		return {
			friends: [
				{
					id: 'manuel',
					name: 'Manuel Lorenz',
					phone: '01234 5678 991',
					email: 'manuel@localhost.com',
				},
				{
					id: 'julie',
					name: 'Julie Jones',
					phone: '09876 543 221',
					email: 'julie@localhost.com',
				},
			],
		}
	},
})

app.component('friend-contact', {
	template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="activateDetails">
        {{ detailsVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
	data() {
		return {
			detailsVisible: false,
			friend: {
				id: 'manuel',
				name: 'Manuel Lorenz',
				phone: '01234 5678 991',
				email: 'manuel@localhost.com',
			},
		}
	},
	methods: {
		activateDetails() {
			this.detailsVisible = !this.detailsVisible
		},
	},
})

app.mount('#app')
