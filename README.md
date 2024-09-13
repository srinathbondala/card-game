# Memory Card Game

A memory card game built with React and TypeScript. The goal is to find and match pairs of cards. The game ends when all pairs have been matched. Players can track their score and the highest score achieved.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)

## Overview

The Memory Card Game is a classic game where players need to match pairs of cards. This version is built using React and TypeScript and features:

- Dynamic card shuffling.
- Scoring system.
- Highest score tracking.
- User interface built with Material-UI.

## Features

- **Card Matching**: Flip cards to find matching pairs.
- **Scoring System**: Decrease score for successful matches and increase score for incorrect attempts.
- **Highest Score Tracking**: Save and display the highest score achieved.
- **Responsive Design**: Works well on both desktop and mobile devices.

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/srinathbondala/card-game.git
2. **Navigate to the project directory**:

    ```bash
    cd your-repository
3. **Install dependencies**:

    ```bash
    npm install 
4. **Run the development server:**

   ```bash
   npm run dev

## Usage
- Start the Game: The game will display a grid of face-down cards. Click on a card to flip it and reveal its value.
- Find Matches: Click on another card to try and find a matching pair. If the cards match, they will stay face up. If they don't match, they will flip back over.
- Track Score: Your score will be updated based on successful matches and incorrect attempts.
- View Highest Score: The highest score achieved during gameplay will be displayed and saved.
