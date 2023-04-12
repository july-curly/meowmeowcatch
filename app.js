const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('.time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let cats = 'cats'
//const colors = ['michael-sum-LEpfefQf4rU-unsplash.jpg']
let time = 0
let score = 0

startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  screens[0].classList.add('up')
})

timeList.addEventListener('click', e => {
  if (e.target.classList.contains('time-btn')){
    time = parseInt(e.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
  }
})

board.addEventListener('click', e => {
  if (e.target.classList.contains('circle')) {
    score++
    e.target.remove()
    createRandomCircle()
  }
})

function startGame() {
  setInterval(decreaseTime, 1000)
  createRandomCircle()
  setTime(time)
}

function decreaseTime() {
  if(time === 0){
    finishGame()
  } else {
    let current = --time
    if(current < 10) {
    current = `0${current}`
    }
    setTime(current)
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function cat () {
  if (score === 1) {
    cats = 'cat';
  }
} 

function finishGame() {
  timeEl.parentNode.classList.add('hide')
  
  cat()

  board.innerHTML = `<h1>You catch <span class="primary">${score}</span> ${cats}</h1>`
}

function createRandomCircle() {
  const circle = document.createElement('div');
  //const size = getRandomNumber(10, 60)
  const {width, height} = board.getBoundingClientRect()
 // circleWidth = circle.offsetWidth
 // circleHeight = circle.offsetHeight
 // console.log(circleHeight)

  const x = getRandomNumber(0, width - 100)
  const y = getRandomNumber(0, height - 100)
    
  circle.classList.add('circle')
  
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  
  board.append(circle)
  //setColor(circle)
}
function  getRandomNumber(min, max) {
 return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
} 

// function setColor(element) {
//   const color = getRandomColor()
//   element.style.backgroundImage = color
// }

