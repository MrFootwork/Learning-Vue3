<template>
	<form @submit.prevent="submitData">
		<div>
			<label for="name">Name</label>
			<input type="name" v-model="enteredName" />
		</div>
		<div>
			<label for="">Phone</label>
			<input type="phone" v-model="enteredPhone" />
		</div>
		<div>
			<label for="">Mail</label>
			<input type="mail" v-model="enteredEmail" />
		</div>
		<div>
			<button>Add Friend</button>
		</div>
	</form>
</template>

<script>
	export default {
		props: ['add-friend'],
		data() {
			return {
				enteredName: '',
				enteredPhone: '',
				enteredEmail: '',
			}
		},
		methods: {
			submitData() {
				this.$emit(
					'add-contact',
					this.enteredName,
					this.enteredPhone,
					this.enteredEmail
				)
				this.enteredName = ''
				this.enteredPhone = ''
				this.enteredEmail = ''
			},
		},
	}
</script>
