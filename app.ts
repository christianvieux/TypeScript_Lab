const get_user_prompt = require("prompt-sync")();

const Difficulty = ["easy", "normal", "hard"] as const;
type DifficultyLevel = (typeof Difficulty)[number];

function getRandomNumber(minRange: number, maxRange: number): number {
  return Math.random() * (maxRange - minRange) + minRange;
}

function playGame(rounds: number = 3, difficulty: DifficultyLevel = "normal") {
  // game base settings/values
  let minRange: number = 0;
  let maxRange: number;
  let maxGuesses: number;
  let guessesLeft: number;
  // value tracking
  let currentRound = 0;

  // set values based on difficulty
  switch (difficulty) {
    case "easy":
      maxGuesses = 10;
      maxRange = 10;
      break;

    case "normal":
      maxGuesses = 7;
      maxRange = 30;
      break;
    case "hard":
      maxGuesses = 5;
      maxRange = 50;
      break;

    default:
      throw new Error(`Unknown difficulty level: ${difficulty}`);
  }

  guessesLeft = maxGuesses;

  // play some rounds
  while (true) {
    if (currentRound < rounds) {
      // As long as there are still rounds left, keep playing!
      const randomNumber = getRandomNumber(minRange, maxRange);
      console.log(
        `Guess number between ${minRange} - ${maxRange}. You have ${guessesLeft} guesses.`
      );

      let user_answer;
      while (guessesLeft > 0) {
        user_answer = get_user_prompt("Your answer: ");

        // Check for "hot" or "cold"
        let difference = Math.abs(user_answer - randomNumber);
        let feedback = "";

        if (difference === 0) {
          console.log("You got it correct!");
          break; // Correct answer, break out of the loop
        } else if (difference <= 2) {
          feedback = "Hot! You're very close!";
        } else if (difference <= 5) {
          feedback = "Warm! You're getting closer!";
        } else {
          feedback = "Cold! You're far from the correct answer.";
        }
         // Decrease guesses left and give feedback
        guessesLeft -= 1;
        console.log(`${feedback} You still have ${guessesLeft} guesses left.`);
      }

      if (guessesLeft <= 0) {
        return console.log("Sorry but you ran out of guesses :(");
      }

      currentRound++;
    } else {
      return console.log("Rounds over! Good job making it far!");
    }
  }
}

playGame();
