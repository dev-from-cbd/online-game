const title = document.getElementById("title");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const updateTit = (newTit) => (title.innerHTML = newTit);
const hideOpts = (options) =>
  options.forEach((opt) => (opt.style.display = "none"));
const addOpt = (id, text) => {
  const newOpt = document.createElement("button");
  newOpt.id = id;
  newOpt.innerHTML = text;
  document.body.appendChild(newOpt);
  return newOpt;
};

opt1.addEventListener("click", () => {
  updateTit("Game over");
  hideOpts([opt1, opt2]);
  const restart = addOpt("restart", "Start Over");
  restart.addEventListener("click", () => {
    updateTit("Welcome to the game!");
    hideOpts([restart]);
    opt1.style.display = "inline-block";
    opt2.style.display = "inline-block";
  });
});

opt2.addEventListener("click", () => {
  updateTit("Go ahead");
  hideOpts([opt1, opt2]);
  const opt3 = addOpt("opt3", "Вар 3");
  const opt4 = addOpt("opt4", "Вар 4");

  opt3.addEventListener("click", () => {
    updateTit("Go ahead");
    hideOpts([opt3, opt4]);
    const opt5 = addOpt("opt5", "Вар 5");
    const opt6 = addOpt("opt6", "Вар 6");
    opt5.addEventListener("click", () => (title.innerHTML = "Game over"));
    opt6.addEventListener("click", () => (title.innerHTML = "Win!"));
  });
});
