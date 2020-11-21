<template>
	<!-- Fragments possible: that <div> is not required in Vue 3Ö -->
	<div>
		<h2>Manage Goals</h2>
		<input type="text" ref="goal" />
		<button @click="setGoal">Set Goal</button>
		<teleport to="body">
			<error-alert v-if="inputIsInvalid">
				<h2>Invalid entry</h2>
				<p>Please enter at least one character...</p>
				<button @click="confirmError">Got it!</button>
			</error-alert>
		</teleport>
	</div>
</template>

<script>
	import ErrorAlert from './ErrorAlert.vue'

	export default {
		components: {
			ErrorAlert,
		},
		data() {
			return {
				inputIsInvalid: false,
			}
		},
		methods: {
			setGoal() {
				const enteredValue = this.$refs.goal.value
				if (enteredValue === '') {
					this.inputIsInvalid = true
				}
			},
			confirmError() {
				this.inputIsInvalid = false
			},
		},
	}
</script>
