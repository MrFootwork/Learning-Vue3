<template>
	<section>
		<base-card>
			<template v-slot:upperSlot>
				<!-- v-slot: = # -->
				<h1>{{ fullName }}</h1>
				<base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
			</template>
			<template v-slot:default>
				<p>{{ infoText }}</p>
			</template>
		</base-card>
	</section>
</template>

<script>
	export default {
		props: ['fullName', 'infoText', 'role'],
	}
</script>
