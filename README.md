# TET 4.0 – BEHIND THE ABUNDANCE

## Project Overview

This is a digital magazine project designed to explore the meaning of Tet in the 4.0 era, applying the philosophical framework of **Material – Consciousness** from Marxist-Leninist philosophy.

## Usage Guide

### File Structure
```bash
project/
├── assets/
│   ├── images/
│   │   ├── qr.jpg        # QR code image
│   │   ├── story1.png   # Story image 1
│   │   ├── story2.png   # Story image 2
│   │   └── story3.png   # Story image 3
│   └── videos/
│       └── ...mp4     # Your video file
├── css/
│   └── style.css       # Main stylesheet (Tet theme & animations)
├── js/
│   └── script.js      # JavaScript interactions & effects
├── .gitattributes
├── .gitignore
├── LICENSE
├── README.md
└── index.html         # Main entry point
```

### Setup Steps

1. Add the video  
   - Create a `videos/` folder in the same directory as the HTML, CSS, and JS files  
   - Place your video inside and name it `...mp4`  
   - Or change the path in `index.html` (line 211)

2. Add QR Code (optional)  
   - The QR code is generated automatically from the website URL  
   - You can customize it by editing the `generateQRCode()` function in `script.js`

3. Run the website  
   - Open `index.html` in a browser  
   - Or deploy it using GitHub Pages, Netlify, or Vercel

## Features

### Fireworks Interaction
- Click the "Light Fireworks" button  
- The fuse burns for 2 seconds  
- Fireworks launch and explode with particle effects  
- The video opens automatically after the explosion

### Video Player
- Auto-plays after the fireworks effect  
- Shows a custom ending screen when the video finishes  
- Can be closed at any time

### QR Code Sharing
- Click "QR Code" in the navigation bar  
- A QR code is generated for easy sharing  
- Others can scan to open the website on mobile

### GitHub Integration
- Click "GitHub" to open the repository link  
- One-click copy feature  
- Direct access to the repo

### Tet Theme Design
- Traditional red and gold color scheme  
- Lantern swing animation  
- Falling peach blossom effects  
- Parallax cloud movement  
- Custom fonts (Philosopher + Crimson Text)

### Easter Eggs
- Konami Code: ↑↑↓↓←→←→BA to unlock a hidden feature  
- Console Message: Open Developer Tools to see a special message

## Customization

### Edit Content
- Open `index.html`  
- Locate the relevant sections  
- Edit text inside `<p>`, `<h3>`, `<h4>`, etc.

### Add Animations
- Animations are defined in `style.css`  
- You can create new animations and trigger them in `script.js`

## Responsive Design

Optimized for:
- Desktop (1920px+)  
- Laptop (1366px+)  
- Tablet (768px+)  
- Mobile (480px+)

## Troubleshooting

### Video not playing
- Check the video file path  
- Make sure the video format is MP4  
- Use H.264 codec for best compatibility

### QR Code not showing
- Check internet connection (QR API required)  
- Or replace it with a static QR image

### Animation lag
- Reduce the number of particles in the fireworks effect  
- Disable some parallax effects on low-end devices

## Browser Support
- Chrome 90+  
- Firefox 88+  
- Safari 14+  
- Edge 90+

## License

This project is licensed under the MIT License.

## Credits

### Fonts
- Philosopher — Jovanny Lemonad  
- Crimson Text — Sebastian Kosch  

### Libraries
- No external libraries (Pure HTML, CSS, JavaScript)

### Inspiration
- Vietnamese Tet traditions  
- Modern web design aesthetics  
- Material Design principles

---

Made by BaoTQ – lystuw25 | 2026
