function attackValue(min, max) {
	return Math.floor(min + Math.random() * (max - min))
}

const game = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			currentRound: 0,
		}
	},
	computed: {
		monsterBarStyles() {
			return { width: this.monsterHealth + '%' }
		},
		playerBarStyles() {
			return { width: this.playerHealth + '%' }
		},
		specialAttackAllowed() {
			return this.currentRound % 3 !== 0
		},
	},
	methods: {
		attackMonster() {
			//Attack Value between 5 and 12
			this.monsterHealth -= attackValue(5, 12)
			this.attackPlayer()
			++this.currentRound
		},
		attackPlayer() {
			//Attack Value between 8 and 15
			this.playerHealth -= attackValue(8, 15)
		},
		specialAttackMonster() {
			//Attack Value between 10 and 25
			this.monsterHealth -= attackValue(10, 25)
			this.attackPlayer()
			++this.currentRound
		},
	},
})

game.mount('#game')
