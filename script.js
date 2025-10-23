
let objects = []; 
let isPaused = false;
let nextWeight = Math.floor(Math.random() * 10) + 1; 

const PLANK_LENGTH = 400;
const MAX_TILT = 30; 
const TILT_FACTOR = 10; 

// DOM elements (will be set after DOM loads)
let plank, seesawWrap, objectsLayer;
let leftWeightDisplay, nextWeightDisplay, rightWeightDisplay, tiltAngleDisplay;
let resetBtn, actionLog;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Seesaw simulation initialized');
    
    // Get DOM elements
    plank = document.getElementById('plank');
    seesawWrap = document.getElementById('seesawWrap');
    objectsLayer = document.getElementById('objectsLayer');
    leftWeightDisplay = document.getElementById('leftWeight');
    nextWeightDisplay = document.getElementById('nextWeight');
    rightWeightDisplay = document.getElementById('rightWeight');
    tiltAngleDisplay = document.getElementById('tiltAngle');
    resetBtn = document.getElementById('resetBtn');
    actionLog = document.getElementById('actionLog');
    
    // Check if all elements exist
    if (!plank || !seesawWrap || !objectsLayer) {
        console.error('Critical DOM elements not found!');
        return;
    }
    
    // Check info display elements
    if (!leftWeightDisplay) console.error('leftWeight element not found!');
    if (!rightWeightDisplay) console.error('rightWeight element not found!');
    if (!tiltAngleDisplay) console.error('tiltAngle element not found!');
    if (!nextWeightDisplay) console.error('nextWeight element not found!');
    if (!actionLog) console.error('actionLog element not found!');
    
    // Set up event listeners
    plank.addEventListener('click', handlePlankClick);
    resetBtn.addEventListener('click', resetSeesaw);
    
    loadState();
    updateUI();
    // Set initial values
    if (leftWeightDisplay) leftWeightDisplay.textContent = '0.0 kg';
    if (rightWeightDisplay) rightWeightDisplay.textContent = '0.0 kg';
    if (tiltAngleDisplay) tiltAngleDisplay.textContent = '0.0°';
    if (nextWeightDisplay) nextWeightDisplay.textContent = `${nextWeight} kg`;
});

function handlePlankClick(event) {
    console.log('Plank clicked!');
    if (isPaused) return;
    
    // Get click position
    const clickX = event.offsetX;
    const positionFromCenter = clickX - (PLANK_LENGTH / 2);
    
    const weight = nextWeight;
    nextWeight = Math.floor(Math.random() * 10) + 1;
    
    console.log('Creating object with weight:', weight, 'position:', positionFromCenter);
    
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
    
    console.log('Object added:', object);
    console.log('Total objects:', objects.length);

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
    
    // Set size based on weight (heavier = bigger circle)
    const baseSize = 16; // base size from CSS
    const sizeMultiplier = 0.5 + (object.weight / 10) * 1.5; // 0.5x to 2x size
    const circleSize = baseSize * sizeMultiplier;
    objElement.style.width = `${circleSize}px`;
    objElement.style.height = `${circleSize}px`;
    
    // Position the object on the plank
    const positionPercent = ((object.position + PLANK_LENGTH / 2) / PLANK_LENGTH) * 100;
    objElement.style.left = `${positionPercent}%`;
    objElement.style.top = '50%';
    
    // Add weight label - FIX: Use textContent instead of innerHTML
    const label = document.createElement('span');
    label.className = 'label';
    label.textContent = `${object.weight}kg`;
    objElement.appendChild(label);
    
    // Make sure the object is visible
    objElement.style.display = 'flex';
    
    // Add to objects layer
    objectsLayer.appendChild(objElement);
}
function updateSeesaw() {
    if (!seesawWrap) {
        console.error('seesawWrap not found!');
        return;
    }
    
    let leftTorque = 0;
    let rightTorque = 0;
    
    objects.forEach(obj => {
        const distance = Math.abs(obj.position);
        const torque = obj.weight * distance;
        
        if (obj.side === 'left') {
            leftTorque += torque;
        } else {
            rightTorque += torque;
        }
    });
    
    // Calculating angle
    const torqueDifference = rightTorque - leftTorque;
    const angle = Math.max(-MAX_TILT, Math.min(MAX_TILT, torqueDifference / TILT_FACTOR));
    
    // Apply rotation to seesaw
    seesawWrap.style.transform = `translateX(-50%) rotate(${angle}deg)`;
    
    console.log(`Torque - Left: ${leftTorque}, Right: ${rightTorque}, Angle: ${angle.toFixed(1)}°`);
}
function updateUI() {
    // Calculate total weights for both side
    let leftWeight = 0;
    let rightWeight = 0;
    
    objects.forEach(obj => {
        if (obj.side === 'left') {
            leftWeight += obj.weight;
        } else {
            rightWeight += obj.weight;
        }
    });
    
    let leftTorque = 0;
    let rightTorque = 0;
    
    objects.forEach(obj => {
        const distance = Math.abs(obj.position);
        const torque = obj.weight * distance;
        
        if (obj.side === 'left') {
            leftTorque += torque;
        } else {
            rightTorque += torque;
        }
    });
    
    const torqueDifference = rightTorque - leftTorque;
    const angle = Math.max(-MAX_TILT, Math.min(MAX_TILT, torqueDifference / TILT_FACTOR));
    
    // Update info cards
    if (leftWeightDisplay) {
        leftWeightDisplay.textContent = `${leftWeight.toFixed(1)} kg`;
    } else {
        console.error('leftWeightDisplay is null!');
    }
    if (rightWeightDisplay) {
        rightWeightDisplay.textContent = `${rightWeight.toFixed(1)} kg`;
    } else {
        console.error('rightWeightDisplay is null!');
    }
    if (tiltAngleDisplay) {
        tiltAngleDisplay.textContent = `${angle.toFixed(1)}°`;
    } else {
        console.error('tiltAngleDisplay is null!');
    }
    if (nextWeightDisplay) {
        nextWeightDisplay.textContent = `${nextWeight} kg`;
    } else {
        console.error('nextWeightDisplay is null!');
    }
}
function addLogEntry(message) {
    if (!actionLog) {
        console.error('actionLog not found!');
        return; // Safety check
    }
    
    const logItem = document.createElement('div');
    logItem.className = 'log-entry';
    
    // Create icon and text properly
    const icon = document.createElement('span');
    icon.className = 'log-icon';
    logItem.appendChild(icon);
    
    const text = document.createTextNode(` ${message}`);
    logItem.appendChild(text);
    
    actionLog.prepend(logItem); // Add to the top
    
    // Keep only last 10 entries
    while (actionLog.children.length > 10) {
        actionLog.removeChild(actionLog.lastChild);
    }
    
}

function resetSeesaw() {
    console.log('Resetting seesaw');
    
    // Clear all objects
    objects = [];
    if (objectsLayer) {
        objectsLayer.innerHTML = '';
    }

    // Reset seesaw to horizontal
    if (seesawWrap) {
        seesawWrap.style.transform = 'translateX(-50%) rotate(0deg)';
    }
    
    // Generate new next weight
    nextWeight = Math.floor(Math.random() * 10) + 1;
    
    // Clear action log
    if (actionLog) {
        actionLog.innerHTML = '';
    }
    
    // Update UI
    updateUI();
    addLogEntry('Seesaw reset!');
    saveState();
}
function saveState() {
    const state = {
        objects: objects,
        isPaused: isPaused,
        nextWeight: nextWeight,
        logEntries: Array.from(actionLog.children).map(item => item.innerHTML)
    };
    localStorage.setItem('seesawState', JSON.stringify(state));
    console.log('State saved to localStorage');
}

function loadState() {
    const savedState = localStorage.getItem('seesawState');
    if (savedState) {
        try {
            const state = JSON.parse(savedState);
            objects = state.objects || [];
            isPaused = state.isPaused || false;
            nextWeight = state.nextWeight || Math.floor(Math.random() * 10) + 1;
            
            // Restore visual objects
            objects.forEach(obj => createObjectElement(obj));
            
            // Restore action log
            if (state.logEntries) {
                actionLog.innerHTML = '';
                state.logEntries.reverse().forEach(entryHtml => {
                    const logItem = document.createElement('div');
                    logItem.className = 'log-entry';
                    logItem.innerHTML = entryHtml;
                    actionLog.appendChild(logItem);
                });
            }
            
            // Update seesaw position
            updateSeesaw();
            
            console.log('State loaded from localStorage');
        } catch (e) {
            console.error('Error loading saved state:', e);
            // Initialize with default values
            nextWeight = Math.floor(Math.random() * 10) + 1;
        }
    } else {
        // No saved state, initialize with default values
        nextWeight = Math.floor(Math.random() * 10) + 1;
    }
}
