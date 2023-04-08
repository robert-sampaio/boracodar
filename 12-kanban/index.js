/** Help */
function log(message) {
  console.log('>' + message)
}

/** Limiting the card's description */
const elements = document.querySelectorAll('.dots')
const LIMIT = 55

for (let p of elements) {
  const aboveLimit = p.innerText.length > LIMIT
  const dotsOrEmpty = aboveLimit ? '...' : ''
  p.innerText = p.innerText.substring(0, LIMIT) + dotsOrEmpty
}

/** Drag & Drop */

  /** App */
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

  /** Our Cards */
cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})

function dragstart() {
  // log('CARD: Start Dragging')
  dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

  // this = card
  this.classList.add('is-dragging')
}

function drag() {
  // log('CARD: Is Dragging')
}

function dragend() {
  // log('CARD: Stop Drag')
  dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

  // this = card
  this.classList.remove('is-dragging')
}

  /** place where we'll drop cards */
dropzones.forEach( dropzones => {
  dropzones.addEventListener('dragenter', dragenter)
  dropzones.addEventListener('dragover', dragover)
  dropzones.addEventListener('dragleave', dragleave)
  dropzones.addEventListener('drop', drop)
})

function dragenter() {
  // log('DROPZONE: Enter in zone!')
}

function dragover() {
  // log('DROPZONE: Over!')
  // this = dropzone
  this.classList.add('over')

  // get dragging card
  const cardBeingDragged = document.querySelector('.is-dragging')

  this.appendChild(cardBeingDragged)
}

function dragleave() {
  // log('DROPZONE: Leave!')
  // this = dropzone
  this.classList.remove('over')
}

function drop() {
  // log('DROPZONE: Dropped!')
  // this = dropzone
  this.classList.remove('over')
}