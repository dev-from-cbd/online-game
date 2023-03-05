/* ----------------------------------- */
/*                                     */
/*  This JavaScript Code developed     */
/*  by Oleg Gribanov & ChatGPT :: 2023 */
/*                                     */
/* ----------------------------------- */

let xp = 0; // определяем переменную xp и присваиваем ей значение 0
let health = 100; // определяем переменную health и присваиваем ей значение 100
let gold = 50; // определяем переменную gold и присваиваем ей значение 50
let currentWeapon = 0; // определяем переменную currentWeapon и присваиваем ей значение 0
let fighting; // определяем переменную fighting, но не присваиваем ей значение
let monsterHealth; // определяем переменную monsterHealth, но не присваиваем ей значение
let inventory = ["stick"]; // определяем переменную inventory и присваиваем ей массив с одним элементом "stick"

const button1 = document.querySelector("#button1"); // определяем константу button1 и присваиваем ей элемент кнопки с id = "button1"
const button2 = document.querySelector("#button2"); // определяем константу button2 и присваиваем ей элемент кнопки с id = "button2"
const button3 = document.querySelector("#button3"); // определяем константу button3 и присваиваем ей элемент кнопки с id = "button3"
const text = document.querySelector("#text"); // определяем константу text и присваиваем ей элемент с id = "text"
const xpText = document.querySelector("#xpText"); // определяем константу xpText и присваиваем ей элемент с id = "xpText"
const healthText = document.querySelector("#healthText"); // определяем константу healthText и присваиваем ей элемент с id = "healthText"
const goldText = document.querySelector("#goldText"); // определяем константу goldText и присваиваем ей элемент с id = "goldText"
const monsterStats = document.querySelector("#monsterStats"); // определяем константу monsterStats и присваиваем ей элемент с id = "monsterStats"
const monsterNameText = document.querySelector("#monsterName"); // определяем константу monsterNameText и присваиваем ей элемент с id = "monsterName"
const monsterHealthText = document.querySelector("#monsterHealth"); // определяем константу monsterHealthText и присваиваем ей элемент с id = "monsterHealth"

const weapons = [
  // определяем массив weapons
  {
    name: "stick", // определяем свойство name первого объекта массива weapons и присваиваем ему значение "stick"
    power: 5, // определяем свойство power первого объекта массива weapons и присваиваем ему значение 5
  },
  {
    name: "dagger", // определяем свойство name второго объекта массива weapons и присваиваем ему значение "dagger"
    power: 30, // определяем свойство power второго объекта массива weapons и присваиваем ему значение 30
  },
  {
    name: "claw hammer", // определяем свойство name третьего объекта
    power: 50,
  },
  {
    name: "sword",
    power: 100,
  },
];

// Define the different monsters that the player can encounter, each with a name, level, and health.
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15,
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60,
  },
  {
    name: "dragon",
    level: 20,
    health: 300,
  },
];

// Define the different locations in the game, each with a name, text to display, and buttons with text and functions.
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight Zomby"],
    "button functions": [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store."',
  },
  {
    name: "store",
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store.",
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters.",
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster.",
  },
  {
    name: "kill monster",
    "button text": [
      "Go to town square",
      "Go to town square",
      "Go to town square",
    ],
    "button functions": [goTown, goTown, easterEgg],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. ☠️",
  },
  {
    name: "win",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You defeat the Zomby! YOU WIN THE GAME! 🎉",
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
  },
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  monsterStats.style.display = "none"; // Скрыть панель с информацией о монстре
  button1.innerText = location["button text"][0]; // Изменить текст на первой кнопке на текст, указанный в объекте location
  button2.innerText = location["button text"][1]; // Изменить текст на второй кнопке на текст, указанный в объекте location
  button3.innerText = location["button text"][2]; // Изменить текст на третьей кнопке на текст, указанный в объекте location
  button1.onclick = location["button functions"][0]; // Назначить функцию из массива button functions объекта location на первую кнопку
  button2.onclick = location["button functions"][1]; // Назначить функцию из массива button functions объекта location на вторую кнопку
  button3.onclick = location["button functions"][2]; // Назначить функцию из массива button functions объекта location на третью кнопку
  text.innerText = location.text; // Изменить текст в блоке text на текст, указанный в объекте location
}

function goTown() {
  update(locations[0]); // Изменить текущее местоположение на город
}

function goStore() {
  update(locations[1]); // Изменить текущее местоположение на магазин
}

function goCave() {
  update(locations[2]); // Изменить текущее местоположение на пещеру
}

function buyHealth() {
  if (gold >= 10) {
    // Если у игрока достаточно золота для покупки здоровья
    gold -= 10; // Убавить золото
    health += 10; // Увеличить здоровье
    goldText.innerText = gold; // Обновить текст в блоке goldText
    healthText.innerText = health; // Обновить текст в блоке healthText
  } else {
    // Если у игрока не достаточно золота для покупки здоровья
    text.innerText = "You do not have enough gold to buy health."; // Вывести сообщение в блок text
  }
}

// Функция buyWeapon отвечает за покупку оружия. Если у игрока достаточно золота для покупки, он получает новое оружие и оно добавляется в его инвентарь. Если нет, то выводится сообщение об ошибке.
function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    // Если у игрока не самое мощное оружие
    if (gold >= 30) {
      // Если у игрока достаточно золота для покупки оружия
      gold -= 30; // Убавить золото
      currentWeapon++; // Переключиться на следующее оружие
      goldText.innerText = gold; // Обновить текст в блоке goldText
      let newWeapon = weapons[currentWeapon].name; // Запомнить название нового оружия

      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

// Функция sellWeapon отвечает за продажу оружия. Если у игрока есть более одного оружия в инвентаре, то он продает текущее оружие и получает 15 золота. В противном случае выводится сообщение об ошибке.

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

// Функции fightSlime, fightBeast и fightDragon используются для выбора монстра, против которого будет сражаться игрок.

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

// Функция goFight выполняется при выборе монстра, инициализирует здоровье и статистику монстра, а также отображает это в интерфейсе.

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterNameText.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

// Функция attack выполняет атаку на выбранного монстра. Если атака успешна, то здоровье игрока уменьшается на уровень атаки монстра. Затем выполняется атака на монстра, и его здоровье уменьшается на значение силы оружия игрока и случайное число между 1 и уровнем игрока. Если здоровье игрока или монстра меньше или равно 0, то вызывается соответствующая функция, либо игрок побеждает монстра и переходит к следующей локации.

function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText +=
    " You attack it with your " + weapons[currentWeapon].name + ".";

  if (isMonsterHit()) {
    health -= getMonsterAttackValue(monsters[fighting].level);
  } else {
    text.innerText += " You miss.";
  }

  monsterHealth -=
    weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    fighting === 2 ? winGame() : defeatMonster();
  }

  if (Math.random() <= 0.1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }
}

// Объявление функции getMonsterAttackValue, которая принимает аргумент level и вычисляет значение атаки монстра на основе его уровня
function getMonsterAttackValue(level) {
  // Вычисление значения удара монстра, исходя из уровня и случайного числа
  let hit = level * 5 - Math.floor(Math.random() * xp);
  // Вывод в консоль значения удара
  console.log(hit);
  // Возврат значения удара
  return hit;
}

// Объявление функции isMonsterHit, которая возвращает true или false в зависимости от того, попадет ли монстр по игроку
function isMonsterHit() {
  // Монстр попадет по игроку с вероятностью 80% (если Math.random() > 0.2) или если у игрока осталось меньше 20 очков здоровья
  return Math.random() > 0.2 || health < 20;
}

// Объявление функции dodge, которая обновляет текст игры, сообщая, что игрок увернулся от атаки монстра
function dodge() {
  // Обновление текста в элементе с id "text"
  text.innerText =
    "You dodge the attack from the " + monsters[fighting].name + ".";
}

// Объявление функции defeatMonster, которая обновляет количество золота и опыта игрока после убийства монстра, а также вызывает функцию update для обновления местоположения игрока
function defeatMonster() {
  // Увеличение количества золота игрока на значение, зависящее от уровня убитого монстра
  gold += Math.floor(monsters[fighting].level * 6.7);
  // Увеличение количества опыта игрока на уровень убитого монстра
  xp += monsters[fighting].level;
  // Обновление текста в элементе с id "goldText" с новым количеством золота
  goldText.innerText = gold;
  // Обновление текста в элементе с id "xpText" с новым количеством опыта
  xpText.innerText = xp;
  // Обновление местоположения игрока, вызывая функцию update с новым местоположением
  update(locations[4]);
}

// Объявление функции lose, которая вызывает функцию update с местоположением, соответствующим проигрышу
function lose() {
  // Обновление местоположения игрока, вызывая функцию update с новым местоположением
  update(locations[5]);
}

// Объявление функции winGame, которая вызывает функцию update с местоположением, соответствующим победе в игре
function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0; // Reset experience points to 0
  health = 100; // Reset health to 100
  gold = 50; // Reset gold to 50
  currentWeapon = 0; // Reset current weapon to 0
  inventory = ["stick"]; // Reset inventory to contain only a stick
  goldText.innerText = gold; // Update the gold text element to display the current value of gold
  healthText.innerText = health; // Update the health text element to display the current value of health
  xpText.innerText = xp; // Update the experience points text element to display the current value of xp
  goTown(); // Call the goTown() function to navigate to the town location
}

function easterEgg() {
  update(locations[7]); // Call the update() function with the location at index 7 to display an Easter egg
}

function pickTwo() {
  pick(2); // Call the pick() function with the argument 2 to play the "Pick Two" game
}

function pickEight() {
  pick(8); // Call the pick() function with the argument 8 to play the "Pick Eight" game
}

function pick(guess) {
  let numbers = []; // Initialize an empty array to hold the random numbers
  while (numbers.length < 10) {
    // Generate 10 random numbers between 0 and 10
    numbers.push(Math.floor(Math.random() * 11));
  }

  text.innerText = "You picked " + guess + ". Here are the random numbers:\n"; // Update the text element to display the user's guess and the random numbers

  for (let i = 0; i < 10; i++) {
    // Loop through the random numbers and add them to the text element
    text.innerText += numbers[i] + "\n";
  }

  if (numbers.indexOf(guess) !== -1) {
    // If the user's guess is in the array of random numbers
    text.innerText += "Right! You win 20 gold!"; // Update the text element to indicate the user won and award 20 gold
    gold += 20;
    goldText.innerText = gold; // Update the gold text element to display the new value of gold
  } else {
    // If the user's guess is not in the array of random numbers
    text.innerText += "Wrong! You lose 10 health!"; // Update the text element to indicate the user lost and subtract 10 from health
    health -= 10;
    healthText.innerText = health; // Update the health text element to display the new value of health
    if (health <= 0) {
      // If health is less than or equal to 0, the user has lost the game
      lose(); // Call the lose() function to end the game
    }
  }
}
