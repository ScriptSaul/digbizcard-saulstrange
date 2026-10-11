# Digital Business Card

A personalized digital business card built with **React, Vite, JavaScript, and CSS** as part of my frontend development journey.

This project marks my introduction to React and explores how reusable components can be used to create a clean, organized user interface.

## Features

- Personalized profile section with a photo, name, and developer title
- Email and LinkedIn contact buttons with icons
- About and Interests sections
- Social media links with SVG icons
- Custom dark-themed design
- Component-based structure using React

## Built With

- **React** — Component-based user interface
- **JavaScript (JSX)** — Component structure and markup
- **Vite** — Development server and build tooling
- **CSS3** — Layout, styling, and visual customization
- **Git & GitHub** — Version control and project hosting

## Project Structure

```text
src/
├── assets/
│   └── images/
├── components/
│   ├── About.jsx
│   ├── Footer.jsx
│   ├── Info.jsx
│   └── Interests.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

Each React component is responsible for a specific section of the business card, keeping the application organized and easier to maintain.

## What I Learned

This project provided hands-on experience with several fundamental React concepts:

- Creating and exporting functional components
- Importing and composing components within a React application
- Understanding JSX syntax and its differences from HTML
- Importing and displaying local image and SVG assets
- Organizing a React project into reusable components
- Working with Vite's development environment
- Applying CSS to a component-based interface
- Using Git and GitHub to track and publish a project

I also gained a better understanding of file paths, asset organization, and debugging import errors in a React/Vite environment.

## Running Locally

Clone the repository:

```bash
git clone https://github.com/ScriptSaul/digbizcard-saulstrange.git
```

Navigate into the project directory:

```bash
cd digbizcard-saulstrange
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Future Improvements

A possible future enhancement is implementing a light/dark theme toggle using React's `useState` hook to explore state-driven UI updates.

## About This Project

This project was created as a learning exercise while progressing through the Scrimba Frontend Developer Career Path.

The goal was not simply to reproduce a design, but to become comfortable with React's component-based architecture, personalize the interface, and strengthen my understanding of the development workflow.

---

**Created by ScriptSaul**  
*Learning, building, and improving one project at a time.*