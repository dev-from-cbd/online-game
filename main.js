/* ----------------------------------- */
/*                                     */
/*  This JavaScript Code developed     */
/*  by Oleg Gribanov & ChatGPT :: 2023 */
/*                                     */
/* ----------------------------------- */

class Game {
  // Declare a class named "Game".

  constructor() {
    // Define the constructor method.

    this.title = document.getElementById("title"); // Get the HTML element with id "title" and assign it to "this.title".

    this.opt1 = document.getElementById("opt1"); // Get the HTML element with id "opt1" and assign it to "this.opt1".

    this.opt2 = document.getElementById("opt2"); // Get the HTML element with id "opt2" and assign it to "this.opt2".
  }

  updateTit(newTit) {
    // Define a method named "updateTit".

    this.title.innerHTML = newTit; // Set the "innerHTML" property of "this.title" to the value of "newTit".
  }
  hideOpts(options) {
    // Define a method named "hideOpts".

    options.forEach((opt) => (opt.style.display = "none")); // For each element in the "options" array, set its "style.display" property to "none".
  }
  addOpt(id, text) {
    // Define a method named "addOpt".

    const newOpt = document.createElement("button"); // Create a new "button" element and assign it to "newOpt".

    newOpt.id = id; // Set the "id" property of "newOpt" to the value of "id".

    newOpt.innerHTML = text; // Set the "innerHTML" property of "newOpt" to the value of "text".

    document.body.appendChild(newOpt); // Append "newOpt" as a child of the "body" element of the HTML document.

    return newOpt; // Return "newOpt".
  }

  start() {
    // Define a method named "start".

    this.opt1.addEventListener("click", () => {
      // Add a click event listener to "this.opt1".

      this.updateTit("Game over"); // Call the "updateTit" method with "Game over" as its argument.

      this.hideOpts([this.opt1, this.opt2]); // Call the "hideOpts" method with an array containing "this.opt1" and "this.opt2" as its argument.

      const restart = this.addOpt("restart", "Start Over"); // Call the "addOpt" method with "restart" and "Start Over" as its arguments and assign the returned value to "restart".

      restart.addEventListener("click", () => {
        // Add a click event listener to "restart".

        this.updateTit("Welcome to the game!"); // Call the "updateTit" method with "Welcome to the game!" as its argument.

        this.hideOpts([restart]); // Call the "hideOpts" method with an array containing "restart" as its argument.

        this.opt1.style.display = "inline-block"; // Set the "style.display" property of "this.opt1" to "inline-block".

        this.opt2.style.display = "inline-block"; // Set the "style.display" property of "this.opt2" to "inline-block".
      });
    });
    this.opt2.addEventListener("click", () => {
      // Add a click event listener to "this.opt2".

      this.updateTit("Go ahead"); // Call the "updateTit" method with "Go ahead" as its argument.

      this.hideOpts([this.opt1, this.opt2]); // Call the "hideOpts" method with an array containing "this.opt1" and "this.opt2" as its argument.

      const opt3 = this.addOpt("opt3", "Var 3"); // Call the "addOpt" method with "opt3" and "Var 3" as its arguments and assign the returned value to "opt3".

      const opt4 = this.addOpt("opt4", "Var 4"); // Call the "addOpt" method with "opt4" and "Var 4" as its arguments and assign the returned value to "opt4".

      opt3.addEventListener("click", () => {
        // Add a click event listener to "opt3".

        this.updateTit("Go ahead"); // Call the "updateTit" method with "Go ahead" as its argument.

        this.hideOpts([opt3, opt4]); // Call the "hideOpts" method with an array containing "opt3" and "opt4" as its argument.

        const opt5 = this.addOpt("opt5", "Var 5"); // Call the "addOpt" method with "opt5" and "Var 5" as its arguments and assign the returned value to "opt5".

        const opt6 = this.addOpt("opt6", "Var 6"); // Call the "addOpt" method with "opt6" and "Var 6" as its arguments and assign the returned value to "opt6".

        opt5.addEventListener("click", () => {
          // Add a click event listener to "opt5".

          this.updateTit("Game over"); // Call the "updateTit" method with "Game over" as its argument.

          this.hideOpts([opt5, opt6]); // Call the "hideOpts" method with an array containing "opt5" and "opt6" as its argument.

          const restart = this.addOpt("restart", "Start Over"); // Call the "addOpt" method with "restart" and "Start Over" as its arguments and assign the returned value to "restart".

          restart.addEventListener("click", () => {
            // Add a click event listener to "restart".

            this.updateTit("Welcome to the game!"); // Call the "updateTit" method with "Welcome to the game!" as its argument.

            this.hideOpts([restart]); // Call the "hideOpts" method with an array containing "restart" as its argument.

            this.opt1.style.display = "inline-block"; // Set the "style.display" property of "this.opt1" to "inline-block".

            this.opt2.style.display = "inline-block"; // Set the "style.display" property of "this.opt2" to "inline-block".
          });
        });

        opt6.addEventListener("click", () => {
          // Attach a click event listener to option 6

          this.updateTit("Win!"); //This line updates the title of the game to "Win!" when the player has successfully matched all the cards. This function is called in the gameWon method which is triggered when all cards have been matched. It notifies the player that they have won the game.

          this.hideOpts([opt5, opt6]); // Call the "hideOpts" method with an array containing "opt5" and "opt6" as its argument.

          const restart = this.addOpt("restart", "Start Over"); // Call the "addOpt" method with "restart" and "Start Over" as its arguments and assign the returned value to "restart".

          restart.addEventListener("click", () => {
            // Add a click event listener to "restart".

            this.updateTit("Welcome to the game!"); // Call the "updateTit" method with "Welcome to the game!" as its argument.

            this.hideOpts([restart]); // Call the "hideOpts" method with an array containing "restart" as its argument.

            this.opt1.style.display = "inline-block"; // Set the "style.display" property of "this.opt1" to "inline-block".

            this.opt2.style.display = "inline-block"; // Set the "style.display" property of "this.opt2" to "inline-block".
          });
        });
      });

      opt4.addEventListener("click", () => {
        // Add a click event listener to the HTML element with id "opt4".

        this.updateTit("Game over"); // Call the "updateTit" method with "Game over" as its argument.

        this.hideOpts([opt3, opt4]); // Call the "hideOpts" method with an array containing "opt3" and "opt4" as its argument.

        const restart = this.addOpt("restart", "Start Over"); // Call the "addOpt" method with "restart" and "Start Over" as its arguments and assign the returned value to "restart".

        restart.addEventListener("click", () => {
          // Add a click event listener to "restart".

          this.updateTit("Welcome to the game!"); // Call the "updateTit" method with "Welcome to the game!" as its argument.

          this.hideOpts([restart]); // Call the "hideOpts" method with an array containing "restart" as its argument.

          this.opt1.style.display = "inline-block"; // Set the "style.display" property of "this.opt1" to "inline-block".

          this.opt2.style.display = "inline-block"; // Set the "style.display" property of "this.opt2" to "inline-block".
        });
      });
    });
  }
}
const game = new Game(); // Create a new instance of the Game class and assign it to the variable 'game'

game.start(); // Call the 'start' method on the 'game' object to begin the game
