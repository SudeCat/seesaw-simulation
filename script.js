
let objects = []; 
let isPaused = false; 

const PLANK_LENGTH = 400;
const MAX_TILT = 30; 
const TILT_FACTOR = 10; 

// DOM elements
const plank = document.getElementById('plank');
const seesawWrap = document.getElementById('seesawWrap');
const objectsLayer = document.getElementById('objectsLayer');

// Info cards
const leftWeightDisplay = document.getElementById('leftWeight');
const nextWeightDisplay = document.getElementById('nextWeight');
const rightWeightDisplay = document.getElementById('rightWeight');
const tiltAngleDisplay = document.getElementById('tiltAngle');

// Reset button
const resetBtn = document.getElementById('resetBtn');

// Action log
const actionLog = document.getElementById('actionLog');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Seesaw simulation initialized');
    loadState();
    updateUI();
});

plank.addEventListener('click', handlePlankClick);
resetBtn.addEventListener('click', resetSeesaw);

function handlePlankClick(event) {
    if (isPaused) return;
    
    // Get click position
    const clickX = event.offsetX;
    const positionFromCenter = clickX - (PLANK_LENGTH / 2);
    
    const weight = nextWeight;
    nextWeight = Math.floor(Math.random() * 10) + 1;
    
    const object = {
        id: Date.now() + Math.random(),
        weight: weight,
        position: positionFromCenter,
        side: positionFromCenter < 0 ? 'left' : 'right'
    };
    
    objects.push(object);
    createObjectElement(object);

    updateSeesaw();
    updateUI();
    
    // Add to action log
    addLogEntry(`${weight}kg dropped on ${object.side} side at ${Math.abs(positionFromCenter)}px from center`);

    saveState();
    
    console.log('Object created:', object);
}
function createObjectElement(object) {
    // Create DOM element for the object
    const objElement = document.createElement('div');
    objElement.className = 'obj';
    objElement.dataset.id = object.id;
    
    // Set color based on weight (heavier = darker)
    const intensity = Math.floor((object.weight / 10) * 255);
    objElement.style.backgroundColor = `rgb(${255 - intensity}, 100, 100)`;
    
    // Position the object on the plank
    const positionPercent = ((object.position + PLANK_LENGTH / 2) / PLANK_LENGTH) * 100;
    objElement.style.left = `${positionPercent}%`;
    objElement.style.top = '50%';
    
    // Add weight label
    objElement.innerHTML = `<span class="label">${object.weight}kg</span>`;
    
    // Add to objects layer
    objectsLayer.appendChild(objElement);
}
