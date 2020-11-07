<template>
	<section>
		<active-user :name="name" :age="age"></active-user>
		<user-data @data-changed="updateData"></user-data>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				name: 'mein Name',
				age: 36,
			}
		},
		methods: {
			updateData(name, age) {
				this.name = name
				this.age = +age
			},
		},
	}
</script>

<style></style>
