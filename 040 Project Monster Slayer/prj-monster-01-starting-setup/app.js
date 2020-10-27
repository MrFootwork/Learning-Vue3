function attackValue(min, max) {
	return Math.floor(min + Math.random() * (max - min))
}

const game = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
		}
	},
	computed: {
		monsterBarStyles() {
			return { width: this.monsterHealth + '%' }
		},
		playerBarStyles() {
			return { width: this.playerHealth + '%' }
		},
	},
	methods: {
		attackMonster() {
			//Attack Value between 5 and 12
			this.monsterHealth -= attackValue(5, 12)
			this.attackPlayer()
		},
		attackPlayer() {
			//Attack Value between 8 and 15
			this.playerHealth -= attackValue(8, 15)
		},
	},
})

game.mount('#game')
