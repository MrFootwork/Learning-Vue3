<template>
	<section>
		<h2>{{ name }}</h2>
		<h3>{{ age }}</h3>
	</section>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				required: true,
			},
			age: {
				type: Number,
				required: true,
			},
		},
	}
</script>

<style>
	section {
		margin: 0.75rem;
		padding: 1rem;
		border: 1px solid none;
		border-radius: 15px;
		box-shadow: 0px 0px 100px -15px #ccc;
	}
</style>
