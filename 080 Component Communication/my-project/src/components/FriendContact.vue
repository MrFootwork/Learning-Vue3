<template>
	<li>
		<h2>{{ name }} {{ isFavorite ? '*' : '' }}</h2>
		<button @click="toggleDetails">
			{{ detailsAreVisible ? 'Hide' : 'Show' }} Details
		</button>
		<button @click="toggleFavorites">Favourite</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone: </strong>{{ phoneNumber }}</li>
			<li><strong>Email: </strong>{{ mailAddress }}</li>
		</ul>
		<button @click="$emit('delete', id)">Delete</button>
	</li>
</template>

<script>
	export default {
		props: {
			id: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			phoneNumber: String,
			mailAddress: String,
			isFavorite: Boolean,
		},
		emits: ['toggle-favorite', 'delete'],
		// emits: {
		// 	'toggle-favorite': function(id) {
		// 		if (id) return true
		// 		else {
		// 			console.warn('Id is missing!')
		// 			return false
		// 		}
		// 	},
		// },
		data() {
			return {
				detailsAreVisible: false,
			}
		},
		methods: {
			toggleDetails() {
				this.detailsAreVisible = !this.detailsAreVisible
			},
			toggleFavorites() {
				this.$emit('toggle-favorite', this.id)
			},
		},
	}
</script>
