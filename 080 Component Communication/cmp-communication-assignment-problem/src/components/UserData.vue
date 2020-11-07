<template>
	<section>
		<div>
			<label for="">Name</label>
			<input
				type="name"
				placeholder="Your name"
				v-model="enteredName"
				@keyup.enter="sendData"
			/>
		</div>
		<div>
			<label for="">Age</label>
			<input
				type="age"
				placeholder="Your age"
				v-model="enteredAge"
				@keyup.enter="sendData"
			/>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				enteredName: '',
				enteredAge: '',
			}
		},
		methods: {
			sendData() {
				this.$emit('data-changed', this.enteredName, this.enteredAge)
			},
		},
	}
</script>

<style></style>
