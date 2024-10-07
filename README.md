# Portfolio Website

This repository contains the files for a **Personal Portfolio Website** that includes interactive features, dark/light mode functionality, and responsive design.

## Features

- **Dark/Light Mode Toggle**: Users can switch between dark and light themes smoothly using a button in the navigation bar.
- **Interactive Animations**: Buttons, circles, and other elements feature smooth transitions and mouseover effects.
- **Responsive Navigation Bar**: A fixed navigation bar with responsive styling ensures smooth user navigation across devices.
- **Mail and CV Access**: Users can directly send an email or download your CV by clicking the respective icons/buttons.

## File Overview

### `dark.js`
This JavaScript file handles the dark/light mode toggle. When a user clicks the dark mode button, the script dynamically changes background colors, font colors, and images across the website.

- **Dark Mode**: Changes the color scheme to darker tones, and replaces certain images with darker versions for a cohesive look.
- **Light Mode**: Reverts to lighter tones and updates images accordingly.
- **Hover Effects**: Additional hover functionality on certain elements like buttons and links that change colors during mouseover events.

### `index.css`
This is the main stylesheet for the website. It sets global styles, including custom fonts, colors, and button designs.

- **Custom Fonts**: The file uses several custom fonts for the different sections of the website.
- **Gradients and Transitions**: Buttons and backgrounds have gradients and smooth transitions for a polished look.
- **Responsiveness**: It ensures that the website is responsive, fitting different screen sizes and adjusting the layout as needed.

### `index.js`
This JavaScript file provides additional interactivity:

- **Button Animations**: Hover effects expand circles around buttons to give them a dynamic, animated feel.
- **Hire Me Button**: Clicking the "Hire Me" button triggers an animation that expands or collapses the display.
- **Mail and CV**: Clicking on the mail icon redirects users to their email application, while the CV button opens your resume in a new tab.

### `index1.css`
This CSS file styles a secondary part of the website, focusing on a simple layout with a container and boxes.

- **Flexbox Layout**: Centers content both horizontally and vertically.
- **Scroll Behavior**: Smooth scrolling and alignment of boxes inside a container.

### `index1.html`
A basic HTML structure that displays a set of boxes within a container. This section demonstrates the smooth scroll behavior and flexbox layout defined in `index1.css`.

### `navbar.css`
This file styles the navigation bar, which remains fixed at the top of the page.

- **Fixed Navbar**: Ensures the navbar stays at the top while users scroll.
- **Dark Mode Button**: Includes styles for the dark mode toggle button, which changes its appearance based on the selected theme.
- **Hover Effects**: Adds color transitions for links in the navigation bar when hovered over.

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url
