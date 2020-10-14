const app = Vue.createApp({
	data() {
		return {
			myCourseGoalA: 'Master Vue and finish this course!',
			myCourseGoalB: 'Learn more Vue!',
			renderedHTML: '<a href="http://google.com">Generated Link</a>',
			vueLink: 'https://vuejs.org/',
		}
	},
	methods: {
		outputGoal() {
			const randomNumber = Math.random()
			if (randomNumber < 0.5) {
				return this.myCourseGoalA
			} else {
				return this.myCourseGoalB
			}
		},
	},
})

app.mount('#user-goal')
