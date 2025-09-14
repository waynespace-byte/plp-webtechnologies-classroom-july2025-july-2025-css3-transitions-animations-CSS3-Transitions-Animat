// Global variable
let animationActive = false;

// Toggle animation 
function toggleAnimation(state) {
  animationActive = state; // modifies global
  return animationActive;
}

// Set Pulse Animation
function setPulseAnimation(el, on) {
  if (on) el.classList.add('pulse');
  else el.classList.remove('pulse');
}

// Flip Card
function flipCard(card) {
  card.classList.toggle('flipped');
  return card.classList.contains('flipped');
}

//event listeners to trigger animations

const btn = document.getElementById('animateBtn');
const box = document.getElementById('box');
const card = document.getElementById('card');

// On button click event listener
btn.addEventListener('click', () => {
  const active = toggleAnimation(!animationActive);
  setPulseAnimation(box, active);
  btn.textContent = active ? 'Stop Animation' : 'Start Animation';
});

// On card click Event Listener, flip card
card.addEventListener('click', () => {
  const flipped = flipCard(card);
  console.log('Card flipped:', flipped);
});