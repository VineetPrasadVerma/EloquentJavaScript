const p1Button = document.querySelector('#p1')
const p2Button = document.querySelector('#p2')
const resetButton = document.querySelector('#reset')
const p1DisplayScore = document.querySelector('#p1DisplayScore')
const p2DisplayScore = document.querySelector('#p2DisplayScore')
const numInput = document.querySelector('input')

let p1Score = 0
let p2Score = 0
let gameOver = false
const winningScoreDisplay = document.querySelector('p span')
let winningScore = 5
// console.log(winningScore)

p1Button.addEventListener('click', () => {
  if (!gameOver) {
    p1Score++
    if (p1Score === winningScore) {
      p1DisplayScore.classList.add('winner')
      gameOver = true
    }
    p1DisplayScore.textContent = p1Score
  }
})

p2Button.addEventListener('click', () => {
  if (!gameOver) {
    p2Score++
    if (p2Score === winningScore) {
      p2DisplayScore.classList.add('winner')
      gameOver = true
    }
    p2DisplayScore.textContent = p2Score
  }
})

resetButton.addEventListener('click', () => {
  reset()
})

numInput.addEventListener('change', function () {
  winningScoreDisplay.textContent = Number(this.value)
  winningScore = Number(this.value)
  reset()
})

function reset () {
  p1Score = 0
  p2Score = 0
  p1DisplayScore.textContent = 0
  p2DisplayScore.textContent = 0
  gameOver = false
  p1DisplayScore.classList.remove('winner')
  p2DisplayScore.classList.remove('winner')
}
