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

### Design Decisions

**1. Vanilla JavaScript Approach**
- **Decision**: Used pure JavaScript instead of frameworks
- **Reasoning**: Keep it lightweight and educational - no build process needed
- **Trade-off**: More manual DOM manipulation, but better for learning

**2. Real-time Physics Calculation**
- **Decision**: Recalculate physics on every object placement
- **Reasoning**: Immediate visual feedback helps users understand cause and effect
- **Trade-off**: Slightly more CPU usage, but negligible for this scale

**3. Dual Interaction Methods**
- **Decision**: Allow clicking both seesaw and white area
- **Reasoning**: More intuitive - users can click anywhere to drop objects
- **Trade-off**: More complex event handling, but better UX

**4. Visual Object Properties**
- **Decision**: Size and color based on weight
- **Reasoning**: Visual cues help users understand weight differences
- **Trade-off**: More complex rendering, but better learning experience

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

### What We Sacrificed
1. **Advanced Physics**: No momentum, friction, or complex dynamics
2. **Mobile Optimization**: Touch interactions could be better
3. **Accessibility**: Limited keyboard navigation and screen reader support
4. **Performance**: No object pooling for many objects

### Current Limitations
1. **Object Stacking**: Objects can overlap when placed close together
2. **Reset Functionality**: No undo/redo for individual objects
3. **Save System**: Only local storage, no cloud sync
4. **Physics Scope**: Only handles static balance, not dynamic motion

### Future Improvements
1. **Object Collision**: Prevent overlapping objects
2. **Undo System**: Step-by-step object removal
3. **Export/Import**: Save and share simulations
4. **Advanced Physics**: Add momentum and dynamic effects

## AI Assistance

### What Was AI-Assisted
- **Initial Physics Logic**: AI helped structure the torque calculation formulas
- **CSS Animation Keyframes**: AI suggested the drop animation structure
- **Event Handling**: AI assisted with the dual click detection logic
- **Debugging**: AI helped identify and fix the object positioning issues

### What Was Manual
- **Core Physics Understanding**: The fundamental torque concepts were manually implemented
- **UI Design**: Layout and styling decisions were manual
- **Testing and Iteration**: All testing and bug fixes were manual
- **Project Structure**: File organization and architecture were manual

### AI Collaboration Process
1. **Problem Definition**: I described the physics requirements
2. **Code Generation**: AI provided initial implementation
3. **Manual Review**: I tested and refined the code
4. **Iterative Improvement**: AI helped with specific bug fixes
5. **Final Polish**: Manual testing and optimization

## License

This project is open source and available under the MIT License.
