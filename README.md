# Terminal Guessing Game (TypeScript Lab)

## About

This is a simple terminal guessing game I built using TypeScript for a General Assembly lab. The goal was to get hands-on with TypeScript—things like using types, writing functions, and understanding basic syntax. The game is all about guessing a random number within a certain range, and you get feedback on how close you are (hot, warm, or cold).

It's not fully polished yet, but the basics are there! I'll definitely come back to it and add more features later.

## Features

* 3 difficulty levels: easy, normal, and hard
* Limited guesses per round
* Feedback after each guess (hot, warm, cold)
* A set number of rounds to play

## Setup

### What you need

* Node.js
* npm (Node package manager)
* TypeScript

### How to get it running

1. Clone the repo:

   ```bash
   git clone https://github.com/christianvieux/TypeScript_Lab.git
   cd TypeScript_Lab
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Game

To play, just run this command:

```bash
npx ts-node app.ts
```

This will start the game with the default settings (3 rounds, normal difficulty). If you want to change the settings, you can tweak the `playGame()` function in `app.ts`.

## How It Works

* You’ll be asked to guess a number within a range.
* You have a limited number of guesses depending on the difficulty level.
* After each guess, you’ll get feedback on how close you are (hot = very close, warm = getting closer, cold = far away).
* The game ends when you guess the number or run out of guesses.

## What's Next

* Plan to add more features like more rounds, better error handling, or even bonus modes.
* I want to refactor the code to make it cleaner and use more TypeScript features like classes and interfaces.
* Maybe try the stretch goal of rebuilding a CRM with TypeScript and MySQL...

## Notes

* Right now, it’s a simple version—there’s more to add later.
* This project was mainly to get used to TypeScript, and I’ll definitely be coming back to improve it.