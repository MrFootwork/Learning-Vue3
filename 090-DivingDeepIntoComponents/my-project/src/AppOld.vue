<template>
	<div>
		<TheHeader />
		<BadgeList />
		<UserInfo
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		/>

		<CourseGoals>
			<!-- #default = v-slot:default -->
			<!-- any Prop from component will be called by #default -->
			<template #default="slotProps">
				<h2>{{ slotProps.item }}</h2>
				<p>{{ slotProps.['another-prop'] }}</p>
			</template>
		</CourseGoals>

		<!-- if markup is targeted to a single slot -->
		<!-- <template> tag can be omitted -->
		<CourseGoals #default="slotProps">
			<h2>{{ slotProps.item }}</h2>
			<p>{{ slotProps.['another-prop'] }}</p>
		</CourseGoals>
	</div>
</template>

<script>
	import TheHeader from './components/TheHeader.vue'
	import BadgeList from './components/BadgeList.vue'
	import UserInfo from './components/UserInfo.vue'
	import CourseGoals from './components/CourseGoals.vue'

	export default {
		//registering local components
		components: {
			// 'the-header': TheHeader,
			TheHeader,
			BadgeList,
			UserInfo,
			CourseGoals,
		},
		data() {
			return {
				activeUser: {
					name: 'Maximilian Schwarzmüller',
					description: 'Site owner and admin',
					role: 'admin',
				},
			}
		},
	}
</script>

<style>
	html {
		font-family: sans-serif;
	}

	body {
		margin: 0;
	}
</style>
