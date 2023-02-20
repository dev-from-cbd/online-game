// Get the game container element from the HTML document
const gameContainer = document.getElementById("gameContainer");

// Function that displays the location selection options (Work or Park) to the user
const displayLocationSelection = () => {
  // Set the HTML content of the game container element to display the location selection options
  gameContainer.innerHTML = `
    <h2>Select a location:</h2>
    <button id="workButton">Work</button>
    <button id="parkButton">Park</button>
  `;

  // Get references to the work and park buttons
  const workButton = document.getElementById("workButton");
  const parkButton = document.getElementById("parkButton");

  // Add click event listeners to the work and park buttons
  workButton.addEventListener("click", () => displayWorkChoice());
  parkButton.addEventListener("click", () => displayParkChoice());
};

// Function that displays the work choice options to the user
const displayWorkChoice = () => {
  // Set the HTML content of the game container element to display the work choice options
  gameContainer.innerHTML = `
    <h2>You're at work:</h2>
    <p>You see zombies through the window.</p>
    <button id="runAwayButton">Run away</button>
    <button id="checkFriendsButton">Check for friends and relatives</button>
  `;

  // Get references to the run away and check friends buttons
  const runAwayButton = document.getElementById("runAwayButton");
  const checkFriendsButton = document.getElementById("checkFriendsButton");

  // Add click event listeners to the run away and check friends buttons
  runAwayButton.addEventListener("click", () => displaySurvival());
  checkFriendsButton.addEventListener("click", () => displayGameOver());
};

// Function that displays the park choice options to the user
const displayParkChoice = () => {
  // Set the HTML content of the game container element to display the park choice options
  gameContainer.innerHTML = `
      <h2>You're at the park:</h2>
      <p>You see zombies in the distance.</p>
      <button id="runAwayButton">Run away</button>
      <button id="checkFriendsButton">Check for friends and relatives</button>
    `;

  // Get references to the run away and check friends buttons
  const runAwayButton = document.getElementById("runAwayButton");
  const checkFriendsButton = document.getElementById("checkFriendsButton");

  // Add click event listeners to the run away and check friends buttons
  runAwayButton.addEventListener("click", () => displaySurvival());
  checkFriendsButton.addEventListener("click", () => displayGameOver());
  setTimeout(() => {
    displayParkChoiceTwo();
  }, 3000);
};

const displayParkChoiceTwo = () => {
  // Set the HTML content of the game container element to display the park choice options
  gameContainer.innerHTML = `
      <h2>You're at the park:</h2>
      <p>You see zombies in the distance.</p>
      <button id="runAwayButton">Run away</button>
      <button id="checkFriendsButton">Check for friends and relatives</button>
      <button id="approachZombiesButton">Approach the zombies</button>
    `;

  // Get references to the run away, check friends, and approach zombies buttons
  const runAwayButton = document.getElementById("runAwayButton");
  const checkFriendsButton = document.getElementById("checkFriendsButton");
  const approachZombiesButton = document.getElementById(
    "approachZombiesButton"
  );

  // Add click event listeners to the buttons
  runAwayButton.addEventListener("click", () => displaySurvival());
  checkFriendsButton.addEventListener("click", () => displayGameOver());
  approachZombiesButton.addEventListener("click", () => displayGameOver());
};

// Function that displays the survival message to the user
const displaySurvival = () => {
  // Set the HTML content of the game container element to display the survival message
  gameContainer.innerHTML = `
    <h2>You survived!</h2>
    <p>Congratulations, you managed to escape from the zombies and survive!</p>
  `;
};

// Function that displays the game over message to the user
const displayGameOver = () => {
  // Set the HTML content of the game container element to display the game over message
  gameContainer.innerHTML = `
      <h2>Game Over</h2>
      <p>You tried to check for friends and relatives among the zombies and were unsuccessful. Better luck next time!</p>
      <button id="playAgainButton">Play Again</button>
    `;

  // Get a reference to the play again button
  const playAgainButton = document.getElementById("playAgainButton");

  // Add a click event listener to the play again button
  playAgainButton.addEventListener("click", () => displayLocationSelection());
};

displayLocationSelection();
