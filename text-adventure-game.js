/* ----------------------------------- */
/*                                     */
/*  This JavaScript Code developed     */
/*  by Oleg Gribanov & ChatGPT :: 2023 */
/*                                     */
/* ----------------------------------- */

const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerHTML = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    /* if (showOption(option)){
        const button = document.createElement("button");
        button.innerText = option.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectOption(option));
        optionButtonsElement.appendChild(button);
    } */
  });
}

function selectOption(option) {
  // 🇷🇺 В функции selectOption отсутствует блок кода, который изменяет state в соответствии с выбранной опцией. Необходимо добавить код, который изменяет state в соответствии с выбранной опцией.
  // 🇷🇺 Также в функции selectOption отсутствует блок кода, который вызывает функцию showTextNode для отображения следующего узла с текстом. Необходимо добавить код, который вызывает функцию showTextNode для отображения следующего узла с текстом.
}

const textNodes = [
  {
    id: 1,
    text: "You wake up",
    options: [
      {
        text: "Take goo",
        setState: {
          blueGoo: true,
        },
        nextText: 2,
      },
      {
        text: "Leave the goo",
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "...",
  },
];

startGame();
