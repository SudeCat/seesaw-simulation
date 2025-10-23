# 🎯 Seesaw Physics Simulation

A realistic seesaw simulation built with vanilla JavaScript, HTML, and CSS. Experience physics in action as you drop objects and watch the seesaw tilt based on weight distribution and torque calculations.

![Seesaw Simulation](https://img.shields.io/badge/Physics-Simulation-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow) ![HTML5](https://img.shields.io/badge/HTML5-Latest-orange) ![CSS3](https://img.shields.io/badge/CSS3-Advanced-blue)

## ✨ Features

### 🎮 Interactive Physics
- **Real-time Physics**: Objects affect seesaw balance based on weight and distance from center
- **Torque Calculations**: Accurate physics simulation using weight × distance formulas
- **Visual Feedback**: See tilt angles and weight distributions in real-time

### 🎯 Multiple Interaction Methods
- **Direct Seesaw Click**: Click directly on the seesaw plank to place objects
- **Stage Area Click**: Click anywhere in the white stage area to drop objects from above
- **Smart Positioning**: Objects automatically go to the correct side based on click position

### 🎨 Visual Effects
- **Drop Animations**: Smooth falling animations when objects are dropped
- **Realistic Physics**: Objects stick to the seesaw surface
- **Dynamic Sizing**: Object size changes based on weight (heavier = bigger)
- **Color Coding**: Object colors change based on weight intensity

### 📊 Real-time Information
- **Weight Tracking**: Monitor left and right side weights
- **Tilt Angle**: See the current seesaw angle in degrees
- **Next Weight**: Preview the weight of the next object
- **Action Log**: Track all your interactions

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/seesaw-simulation.git
   cd seesaw-simulation
   ```

2. **Open in browser**
   ```bash
   # Option 1: Simple file opening
   open index.html
   
   # Option 2: Local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Start experimenting!**
   - Click on the seesaw or white area to drop objects
   - Watch the physics in action
   - Try to balance the seesaw!

## 🎮 How to Use

### Basic Controls
1. **Drop Objects**: Click anywhere on the seesaw or white stage area
2. **Reset**: Click the "Reset Seesaw" button to clear all objects
3. **Balance**: Try to get equal weights on both sides for a horizontal seesaw

### Physics Understanding
- **Equal Weights + Equal Distances = 0° Tilt** (Horizontal)
- **Different Distances = Different Torques = Tilt**
- **Heavier Objects = More Torque = More Tilt**

### Tips for Best Experience
- Place objects at similar distances from center for balanced seesaw
- Watch the console for detailed physics calculations
- Use the action log to track your experiments

## 🔧 Technical Details

### Physics Engine
- **Torque Calculation**: `Torque = Weight × Distance from Center`
- **Angle Calculation**: `Angle = (Right Torque - Left Torque) / Tilt Factor`
- **Real-time Updates**: Physics recalculated on every object placement

### Browser Compatibility
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Performance
- **Lightweight**: Pure vanilla JavaScript (no frameworks)
- **Fast Rendering**: Optimized CSS animations
- **Responsive**: Works on desktop and mobile devices

## 📁 Project Structure

```
seesaw-simulation/
├── index.html          # Main HTML structure
├── script.js           # Physics engine and interactions
├── styles.css          # Visual styling and animations
├── test.html           # Testing utilities
└── README.md           # This file
```

## 🎯 Key Components

### HTML Structure
- **Info Cards**: Display weights and angles
- **Seesaw Stage**: Interactive seesaw area
- **Action Log**: Track user interactions
- **Reset Button**: Clear simulation

### JavaScript Features
- **Physics Engine**: Real-time torque calculations
- **Event Handling**: Click detection and object creation
- **State Management**: Local storage for persistence
- **Animation System**: Smooth drop effects

### CSS Styling
- **Responsive Design**: Works on all screen sizes
- **Smooth Animations**: Professional drop effects
- **Visual Hierarchy**: Clear information display
- **Modern UI**: Clean, intuitive interface

## 🧪 Testing

### Manual Testing
1. **Equal Weights Test**: Place equal weights at equal distances
2. **Imbalance Test**: Create different weight distributions
3. **Reset Test**: Verify reset functionality works
4. **Animation Test**: Check drop animations are smooth

### Browser Console
- Open developer tools to see detailed physics calculations
- Monitor torque values and angle calculations
- Debug any issues with object placement

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Bug Reports
- Use GitHub Issues to report bugs
- Include browser version and steps to reproduce
- Attach screenshots if helpful

### Feature Requests
- Suggest new physics features
- Propose UI/UX improvements
- Request additional animations

### Code Contributions
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Physics concepts based on real-world torque calculations
- Inspired by educational physics simulations
- Built with modern web standards

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/seesaw-simulation/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/seesaw-simulation/discussions)
- **Email**: your.email@example.com

---

**Made with ❤️ for physics education and fun!**

*Star ⭐ this repository if you found it helpful!*
