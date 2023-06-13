// Get the stars container
const starsContainer = document.querySelector('#stars-container');

// Get the number of stars
const numOfStars = 200;

// Create an array of stars
let stars = [];

// Create the stars
for (let i = 0; i < numOfStars; i++) {
let star = document.createElement('div');
star.className = 'star';
stars.push(star);
starsContainer.appendChild(star);
}

// Animate the stars
function animateStars() {
stars.forEach(star => {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let duration = Math.random() * 15;
    let delay = Math.random() * 50;
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.animationDuration = duration + 's';
    star.style.animationDelay = delay + 's';
});
}

animateStars();

// Animate stars on resize
window.addEventListener('resize', animateStars);
