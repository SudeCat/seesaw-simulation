# Seesaw Physics Simulation

A realistic seesaw simulation built with vanilla JavaScript, HTML, and CSS. Drop objects and watch the seesaw tilt based on weight distribution and torque calculations.

## Features

- **Real-time Physics**: Objects affect seesaw balance based on weight and distance from center
- **Interactive Controls**: Click on the seesaw or white area to drop objects
- **Visual Feedback**: See tilt angles, weights, and drop animations
- **State Persistence**: Your simulation is saved in browser storage

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/seesaw-simulation.git
   cd seesaw-simulation
   ```

2. **Open in browser**
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Start experimenting!**
   - Click on the seesaw or white area to drop objects
   - Watch the physics in action
   - Try to balance the seesaw!

## How to Use

1. **Drop Objects**: Click anywhere on the seesaw or white stage area
2. **Reset**: Click the "Reset Seesaw" button to clear all objects
3. **Balance**: Try to get equal weights on both sides for a horizontal seesaw

## Technical Details

### Physics Engine
- **Torque Calculation**: `Torque = Weight × Distance from Center`
- **Angle Calculation**: `Angle = (Right Torque - Left Torque) / Tilt Factor`
- **Real-time Updates**: Physics recalculated on every object placement

### Project Structure
```
seesaw-simulation/
├── index.html          # Main HTML structure
├── script.js           # Physics engine and interactions
├── styles.css          # Visual styling and animations
├── test.html           # Testing utilities
└── README.md           # This file
```

## Thought Process and Design Decisions

### Core Concept
The project started as a simple physics demonstration to show how torque affects balance. The key insight was that seesaw balance depends on both weight AND distance from the center, not just weight alone.


### Technical Challenges

**1. Object Positioning**
- **Challenge**: Making objects stick to the seesaw surface
- **Solution**: Used `calc(50% - 9px)` positioning to align with plank surface
- **Limitation**: Fixed offset might not work with all plank heights

**2. Physics Accuracy**
- **Challenge**: Ensuring equal weights at equal distances = 0° tilt
- **Solution**: Added detailed debugging and verified torque calculations
- **Limitation**: Simplified physics model doesn't account for friction or momentum

**3. Animation Performance**
- **Challenge**: Smooth drop animations without affecting physics
- **Solution**: CSS animations with JavaScript cleanup
- **Limitation**: Animations might be choppy on older devices

## Trade-offs and Limitations

### Current Limitations
1. **Object Stacking**: Objects can overlap when placed close together
2. **Save System**: Only local storage, no cloud sync
3. **Physics Scope**: Only handles static balance, not dynamic motion

### Future Improvements
1. **Object Collision**: Prevent overlapping objects
2. **Undo System**: Step-by-step object removal
3. **Export/Import**: Save and share simulations
4. **Advanced Physics**: Add momentum and dynamic effects

## AI Assistance

### Where I Used
- **Initial Physics Logic**: AI helped structure the torque calculation formulas
- **CSS Animation Keyframes**: AI suggested the drop animation structure
- **Event Handling**: AI assisted with the dual click detection logic
- **Debugging**: AI helped identify and fix the object positioning issues

## End of the README

Feel free to explore each step in detail and get into the project workflow. If you have questions or suggestions, please open an issue or submit a pull request.
- **Email:** [catsudeebrar@gmail.com](mail)
