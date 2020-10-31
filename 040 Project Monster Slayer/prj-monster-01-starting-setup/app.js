function randomValue(min, max) {
	return Math.floor(min + Math.random() * (max - min))
}

const game = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			currentRound: 3,
			winner: null,
			logMessages: [],
		}
	},
	computed: {
		monsterBarStyles() {
			if (this.monsterHealth < 0) return { width: '0%' }
			return { width: this.monsterHealth + '%' }
		},
		playerBarStyles() {
			if (this.playerHealth < 0) return { width: '0%' }
			return { width: this.playerHealth + '%' }
		},
		specialAttackDisabled() {
			if (this.currentRound >= 3) return false
			return true
		},
	},
	watch: {
		playerHealth(health) {
			if (health <= 0 && this.monsterHealth <= 0) {
				this.winner = 'draw'
			} else if (health <= 0) {
				this.winner = 'monster'
			}
		},
		monsterHealth(health) {
			if (health <= 0 && this.playerHealth <= 0) {
				this.winner = 'draw'
			} else if (health <= 0) {
				this.winner = 'player'
			}
		},
	},
	methods: {
		restart() {
			this.playerHealth = 100
			this.monsterHealth = 100
			this.currentRound = 3
			this.winner = null
			this.logMessages = []
		},
		attackMonster() {
			//Attack Value between 5 and 12
			const attackValue = randomValue(5, 12)
			this.monsterHealth -= attackValue
			this.addLogMessage('player', 'attack', attackValue)
			this.attackPlayer()
			++this.currentRound
		},
		attackPlayer() {
			//Attack Value between 8 and 15
			const attackValue = randomValue(8, 15)
			this.playerHealth -= attackValue
			this.addLogMessage('monster', 'attack', attackValue)
		},
		specialAttackMonster() {
			//Attack Value between 10 and 25
			const attackValue = randomValue(10, 25)
			this.monsterHealth -= attackValue
			this.addLogMessage('player', 'special-attack', attackValue)
			this.attackPlayer()
			this.currentRound = 0
		},
		healPlayer() {
			const healValue = randomValue(8, 20)
			if (this.playerHealth + healValue > 100) {
				this.playerHealth = 100
				this.addLogMessage('player', 'heal', this.playerHealth - healValue)
			} else {
				this.playerHealth += healValue
				this.addLogMessage('player', 'heal', healValue)
			}
		},
		surrender() {
			this.winner = 'monster'
		},
		addLogMessage(who, what, value) {
			this.logMessages.unshift({
				actionBy: who,
				actionType: what,
				actionValue: value,
			})
		},
	},
})

game.mount('#game')
