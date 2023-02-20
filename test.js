// Declare variables for title and options elements
const title = document.getElementById("title");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
// Function to update the text in the title element
const updateTit = (newTit) => (title.innerHTML = newTit);
// Function to hide a list of elements
const hideOpts = (options) =>
  options.forEach((opt) => (opt.style.display = "none"));
// Function to add a new option element to the body
const addOpt = (id, text) => {
  const newOpt = document.createElement("button");
  newOpt.id = id;
  newOpt.innerHTML = text;
  document.body.appendChild(newOpt);
  return newOpt;
};
// Event listener for clicking the first option
opt1.addEventListener("click", () => {
  // Update the title text to "Game over"
  updateTit("Game over");
  // Hide the first and second options
  hideOpts([opt1, opt2]);
  // Add a "Start Over" button
  const restart = addOpt("restart", "Start Over");
  // Event listener for clicking the "Start Over" button
  restart.addEventListener("click", () => {
    // Update the title text to "Welcome to the game!"
    updateTit("Welcome to the game!");
    // Hide the "Start Over" button
    hideOpts([restart]);
    // Show the first and second options again
    opt1.style.display = "inline-block";
    opt2.style.display = "inline-block";
  });
});
// Event listener for clicking the second option
opt2.addEventListener("click", () => {
  // Update the title text to "Go ahead"
  updateTit("Go ahead");
  // Hide the first and second options
  hideOpts([opt1, opt2]);
  // Add a third and fourth options
  const opt3 = addOpt("opt3", "Вар 3");
  const opt4 = addOpt("opt4", "Вар 4");
  // Event listener for clicking the third option
  opt3.addEventListener("click", () => {
    // Update the title text to "Go ahead"
    updateTit("Go ahead");
    // Hide the third and fourth options
    hideOpts([opt3, opt4]);
    // Add a fifth and sixth options
    const opt5 = addOpt("opt5", "Вар 5");
    const opt6 = addOpt("opt6", "Вар 6");
    // Event listener for clicking the fifth option
    opt5.addEventListener("click", () => {
      // Update the title text to "Game over"
      updateTit("Game over");
      // Hide the fifth and sixth options
      hideOpts([opt5, opt6]);
      // Add a "Start Over" button
      const restart = addOpt("restart", "Start Over");
      // Event listener for clicking the "Start Over" button
      restart.addEventListener("click", () => {
        // Update the title text to "Welcome to the game!"
        updateTit("Welcome to the game!");

        // Hide the options passed as arguments to the function
        hideOpts([restart]);

        // Show options 1 and 2 by setting the display property to "inline-block"
        opt1.style.display = "inline-block";
        opt2.style.display = "inline-block";
      });
    });

    // Attach a click event listener to option 6
    opt6.addEventListener("click", () => {
      // Update the title to "Win!"
      updateTit("Win!");

      // Hide options 5 and 6
      hideOpts([opt5, opt6]);

      // Add a new option with the text "Start Over" and ID "restart"
      const restart = addOpt("restart", "Start Over");

      // Attach a click event listener to the newly added "restart" option
      restart.addEventListener("click", () => {
        // Update the title to "Welcome to the game!"
        updateTit("Welcome to the game!");

        // Hide the "restart" option
        hideOpts([restart]);

        // Show options 1 and 2
        opt1.style.display = "inline-block";
        opt2.style.display = "inline-block";
      });
    });
  });

  // Attach a click event listener to option 4
  opt4.addEventListener("click", () => {
    // Update the title to "Game over"
    updateTit("Game over");

    // Hide options 3 and 4
    hideOpts([opt3, opt4]);

    // Add a new option with the text "Start Over" and ID "restart"
    const restart = addOpt("restart", "Start Over");

    // Attach a click event listener to the newly added "restart" option
    restart.addEventListener("click", () => {
      // Update the title to "Welcome to the game!"
      updateTit("Welcome to the game!");

      // Hide the "restart" option
      hideOpts([restart]);

      // Show options 1 and 2
      opt1.style.display = "inline-block";
      opt2.style.display = "inline-block";
    });
  });
});
