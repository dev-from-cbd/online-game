/* ----------------------------------- */
/*                                     */
/*  This JavaScript Code developed     */
/*  by Oleg Gribanov & ChatGPT :: 2023 */
/*                                     */
/* ----------------------------------- */

let xp = 0; /* 🇦🇺 This code contains both variable declaration and definition. The game starts with zero experience.
🇷🇺 Определяем переменную xp и присваиваем ей значение 0. Этот код содержит как объявление, так и определение переменной. Игра начинается с нулевым опытом. */
let health = 100; /* 🇦🇺 This code contains both variable declaration and definition. The game starts with health equal to one hundred points. 
🇷🇺 Определяем переменную health и присваиваем ей значение 100. Этот код содержит как объявление, так и определение переменной. Игра начинается с здоровьем равным ста баллам (очкам). */
let gold = 50; /* 🇦🇺 This code contains both variable declaration and definition. The game starts with a gold reserve equal to one hundred. 
🇷🇺 Определяем переменную gold и присваиваем ей значение 50. Этот код содержит как объявление, так и определение переменной. Игра начинается с запасом золота равным ста. */
let currentWeapon = 0; /* 🇦🇺 This code contains both variable declaration and definition. The game starts with the player having nothing in their arsenal yet.
🇷🇺 Определяем переменную currentWeapon и присваиваем ей значение 0. Этот код содержит как объявление, так и определение переменной. Игра начинается с того, что в арсенале игрока пока ничего нет. */
let fighting; /* 🇦🇺 Here is just a variable declaration. When declaring a variable without assigning a value to it, its default value will be undefined.
🇷🇺 Определяем переменную fighting, но не присваиваем ей значение. Здесь идет только объявление переменной. При объявлении переменной без присвоения значения ей, значение по умолчанию будет undefined. */
let monsterHealth; /* 🇦🇺 Here is just a variable declaration. When declaring a variable without assigning a value to it, its default value will be undefined.
🇷🇺 Определяем переменную monsterHealth, но не присваиваем ей значение. Здесь идет только объявление переменной. При объявлении переменной без присвоения значения ей, значение по умолчанию будет undefined. */
let inventory = [
  "stick",
]; /* 🇦🇺 We define the variable inventory and assign it an array with a single element "stick". Here we have both the definition of the variable and its initialization with the value of the array ["stick"]. The game starts with the player having a stick in their inventory.
🇷🇺 Определяем переменную inventory и присваиваем ей массив с одним элементом "stick". Здесь идет определение переменной и её инициализация значением массива ["stick"]. Игра начинается с того, что в инвентаре игрока есть палка. */

const button1 =
  document.querySelector(
    "#button1"
  ); /* 🇦🇺 Define a constant button1 and assign it the button element with an id of "button1". That is, a constant named button1 is created here that will reference the HTML element with an identifier of "button1".
🇷🇺 Определяем константу button1 и присваиваем ей элемент кнопки с id = "button1". То есть, здесь создаётся константа button1, которая будет ссылаться на элемент HTML-документа с идентификатором "button1". */
const button2 =
  document.querySelector(
    "#button2"
  ); /* 🇦🇺 Define a constant button2 and assign it the button element with an id of "button2". That is, a constant named button2 is created here that will reference the HTML element with an identifier of "button2".
🇷🇺 Определяем константу button2 и присваиваем ей элемент кнопки с id = "button2". То есть, здесь создаётся константа button2, которая будет ссылаться на элемент HTML-документа с идентификатором "button2". */
const button3 =
  document.querySelector(
    "#button3"
  ); /* 🇦🇺 Define a constant button3 and assign it the button element with an id of "button3". That is, a constant named button2 is created here that will reference the HTML element with an identifier of "button3".
🇷🇺 Определяем константу button3 и присваиваем ей элемент кнопки с id = "button3". То есть, здесь создаётся константа button3, которая будет ссылаться на элемент HTML-документа с идентификатором "button3". */

const text =
  document.querySelector(
    "#text"
  ); /* 🇦🇺 This line of code declares a constant variable text and assigns it an HTML element that matches the CSS selector #text. This is done using the querySelector() method of the document object, which allows you to find the first element that matches the specified selector. It can be inferred that there is an element with id="text" on the web page, and this code allows you to get a reference to it.
🇷🇺 Определяем константу text и присваиваем ей элемент с id = "text". То есть, на данной строке кода объявляется константа text и присваивается ей HTML-элемент, соответствующий CSS-селектору #text. Для этого используется метод querySelector() объекта document, который позволяет найти первый элемент, удовлетворяющий указанному селектору. На веб-странице существует элемент с id="text", и данный код позволяет получить ссылку на него. */
const xpText =
  document.querySelector(
    "#xpText"
  ); /* 🇦🇺 This line of code declares a constant variable xpText and assigns it an HTML element that matches the CSS selector #xpText. This is done using the querySelector() method of the document object, which allows you to find the first element that matches the specified selector. It can be inferred that there is an element with id="xpText" on the web page, and this code allows you to get a reference to it.
🇷🇺 Определяем константу xpText и присваиваем ей элемент с id = "xpText". То есть, на данной строке кода объявляется константа xpText и присваивается ей HTML-элемент, соответствующий CSS-селектору #xpText. Для этого используется метод querySelector() объекта document, который позволяет найти первый элемент, удовлетворяющий указанному селектору. На веб-странице существует элемент с id="xpText", и данный код позволяет получить ссылку на него. */
const healthText =
  document.querySelector(
    "#healthText"
  ); /* 🇦🇺 This line of code declares a constant variable healthText and assigns it an HTML element that matches the CSS selector #healthText. This is done using the querySelector() method of the document object, which allows you to find the first element that matches the specified selector. It can be inferred that there is an element with id="healthText" on the web page, and this code allows you to get a reference to it.
🇷🇺 Определяем константу healthText и присваиваем ей элемент с id = "healthText". То есть, на данной строке кода объявляется константа healthText и присваивается ей HTML-элемент, соответствующий CSS-селектору #healthText. Для этого используется метод querySelector() объекта document, который позволяет найти первый элемент, удовлетворяющий указанному селектору. На веб-странице существует элемент с id="healthText", и данный код позволяет получить ссылку на него. */
const goldText =
  document.querySelector(
    "#goldText"
  ); /* 🇦🇺 This line of code declares a constant variable goldText and assigns it an HTML element that matches the CSS selector #goldText. This is done using the querySelector() method of the document object, which allows you to find the first element that matches the specified selector. It can be inferred that there is an element with id="goldText" on the web page, and this code allows you to get a reference to it.
🇷🇺 Определяем константу goldText и присваиваем ей элемент с id = "goldText". То есть, на данной строке кода объявляется константа goldText и присваивается ей HTML-элемент, соответствующий CSS-селектору #goldText. Для этого используется метод querySelector() объекта document, который позволяет найти первый элемент, удовлетворяющий указанному селектору. На веб-странице существует элемент с id="goldText", и данный код позволяет получить ссылку на него. */
const monsterStats = document.querySelector("#monsterStats"); // 🇦🇺 This line of code declares a constant variable monsterStats and assigns it an HTML element that matches the CSS selector #monsterStats. This is done using the querySelector() method of the document object, which allows you to find the first element that matches the specified selector. It can be inferred that there is an element with id="monsterStats" on the web page, and this code allows you to get a reference to it.
// 🇷🇺 Определяем константу monsterStats и присваиваем ей элемент с id = "monsterStats". То есть, на данной строке кода объявляется константа monsterStats и присваивается ей HTML-элемент, соответствующий CSS-селектору #monsterStats. Для этого используется метод querySelector() объекта document, который позволяет найти первый элемент, удовлетворяющий указанному селектору. На веб-странице существует элемент с id="monsterStats", и данный код позволяет получить ссылку на него.
const monsterNameText = document.querySelector("#monsterName"); // 🇦🇺 This line of code declares a constant variable monsterName and assigns it an HTML element that matches the CSS selector #monsterName. This is done using the querySelector() method of the document object, which allows you to find the first element that matches the specified selector. It can be inferred that there is an element with id="monsterName" on the web page, and this code allows you to get a reference to it.
// 🇷🇺 Определяем константу monsterName и присваиваем ей элемент с id = "monsterName". То есть, на данной строке кода объявляется константа monsterName и присваивается ей HTML-элемент, соответствующий CSS-селектору #monsterName. Для этого используется метод querySelector() объекта document, который позволяет найти первый элемент, удовлетворяющий указанному селектору. На веб-странице существует элемент с id="monsterName", и данный код позволяет получить ссылку на него.
const monsterHealthText = document.querySelector("#monsterHealth"); // 🇦🇺 This line of code declares a constant variable monsterHealth and assigns it an HTML element that matches the CSS selector #monsterHealth. This is done using the querySelector() method of the document object, which allows you to find the first element that matches the specified selector. It can be inferred that there is an element with id="monsterHealth" on the web page, and this code allows you to get a reference to it.
// 🇷🇺 Определяем константу monsterHealth и присваиваем ей элемент с id = "monsterHealth". То есть, на данной строке кода объявляется константа monsterHealth и присваивается ей HTML-элемент, соответствующий CSS-селектору #monsterHealth. Для этого используется метод querySelector() объекта document, который позволяет найти первый элемент, удовлетворяющий указанному селектору. На веб-странице существует элемент с id="monsterHealth", и данный код позволяет получить ссылку на него.

const weapons = [
  // 🇦🇺 This code creates an array called weapons, which contains objects that describe weapons and their properties (name and power). Each object has two properties: name and power.
  // 🇷🇺 Определяем массив weapons. То есть, здесь создаётся массив weapons, содержащий объекты, каждый из которых описывает оружие и его свойства (название и сила). Каждый объект будет иметь 2 свойства: name и power.
  {
    name: "stick", // 🇦🇺 Defining the name property of the first object in the weapons array and assigning it a value of "stick".
    // 🇷🇺 Определяем свойство name первого объекта массива weapons и присваиваем ему значение "stick".
    power: 5, // 🇦🇺 This code represents an object that contains two properties: "name" and "power". The "name" property has a value of "stick", and the "power" property has a value of 5. This can be interpreted as defining a weapon with the name "stick" and an attack power of 5.
    // 🇷🇺 Определяем свойство power первого объекта массива weapons и присваиваем ему значение 5. То есть, данная часть кода представляет собой объект, который содержит два свойства: "name" и "power". Свойство "name" имеет значение "stick", а свойство "power" имеет значение 5. Это можно интерпретировать как определение оружия с именем "stick" и силой атаки равной 5.
  },
  {
    name: "dagger", // 🇦🇺 Defining the name property of the 2nd object in the weapons array and assigning it a value of "dagger".
    // 🇷🇺 Определяем свойство name второго объекта массива weapons и присваиваем ему значение "dagger". Dagger - это кинжал.
    power: 30, // 🇦🇺 Defining a weapon with an attack power of 30.
    // 🇷🇺 Определяем свойство power второго объекта массива weapons и присваиваем ему значение 30. То есть, свойство "name" имеет значение "dagger", а свойство "power" имеет значение 30. Это можно интерпретировать как определение оружия с именем "dagger" и силой атаки равной 30.
  },
  {
    name: "claw hammer", // 🇦🇺 Defining the name property of the 3rd object in the weapons array and assigning it a value of "claw hammer".
    // 🇷🇺 Определяем свойство name второго объекта массива weapons и присваиваем ему значение "claw hammer". Claw hammer - это молоток-гвоздодер.
    power: 50, // 🇦🇺 Defining a weapon with an attack power of 50.
    // 🇷🇺 Определяем свойство power 3го объекта массива weapons и присваиваем ему значение 50. То есть, свойство "name" имеет значение "claw hammer", а свойство "power" имеет значение 50. Это можно интерпретировать как определение оружия с именем "claw hammer" и силой атаки равной 50.
  },
  {
    name: "sword", // 🇦🇺 Defining the name property of the 4th object in the weapons array and assigning it a value of "sword".
    // 🇷🇺 Определяем свойство name второго объекта массива weapons и присваиваем ему значение "sword". Sword - это меч.
    power: 100, // 🇦🇺 Defining  a weapon with an attack power of 100.
    // 🇷🇺 Определяем свойство power 4го объекта массива weapons и присваиваем ему значение 100. То есть, свойство "name" имеет значение "sword", а свойство "power" имеет значение 100. Это можно интерпретировать как определение оружия с именем "sword" и силой атаки равной 100.
  },
];

// 🇦🇺 Define the different monsters that the player can encounter, each with a name, level, and health.
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
    name: "Zomby",
    level: 20,
    health: 300,
  },
];

// 🇦🇺 Define the different locations in the game, each with a name, text to display, and buttons with text and functions.
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

// 🇦🇺 Initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  /* 🇦🇺 Iit is a generic function. The function takes a single parameter location, which is an object containing various properties like button text, button functions, and text. The function updates the text and functions of three buttons and a text block based on the values specified in the location object. The function is not specific to any particular task or application, and can be used in a generic way to update buttons and text based on the properties of an object passed as a parameter.
  🇷🇺 Это обобщённая функция. Она принимает единственный параметр location, который является объектом, содержащим различные свойства, такие как текст кнопки, функции кнопок и текст. Функция обновляет текст и функции трёх кнопок и блока текста на основе значений, указанных в объекте location. Функция не привязана к какой-либо конкретной задаче или приложению и может использоваться обобщённым способом для обновления кнопок и текста на основе свойств объекта, переданного в качестве параметра. */
  monsterStats.style.display = "none"; /* 🇦🇺 Hide monster information panel.
  🇷🇺 Скрыть панель с информацией о монстре. */
  button1.innerText =
    location[
      "button text"
    ][0]; /* 🇦🇺 Change the text on the first button to the text specified in the location object.
  🇷🇺 Изменить текст на первой кнопке на текст, указанный в объекте location. */
  button2.innerText =
    location[
      "button text"
    ][1]; /* 🇦🇺 Change the text on the 2nd button to the text specified in the location object.
  🇷🇺 Изменить текст на второй кнопке на текст, указанный в объекте location. */
  button3.innerText =
    location[
      "button text"
    ][2]; /* 🇦🇺 Change the text on the 3rd button to the text specified in the location object.
  🇷🇺 Изменить текст на 3ей кнопке на текст, указанный в объекте location. */
  button1.onclick =
    location[
      "button functions"
    ][0]; /* 🇦🇺 Assign the function from the button functions array of the location object to the first button.
  🇷🇺 Назначить функцию из массива button functions объекта location на первую кнопку. */
  button2.onclick =
    location[
      "button functions"
    ][1]; /* 🇦🇺 Assign the function from the button functions array of the location object to the 2nd button.
  🇷🇺 Назначить функцию из массива button functions объекта location на 2ую кнопку. */
  button3.onclick =
    location[
      "button functions"
    ][2]; /* 🇦🇺 Assign the function from the button functions array of the location object to the 3rd button.
  🇷🇺 Назначить функцию из массива button functions объекта location на 3ью кнопку. */
  text.innerText =
    location.text; /* 🇦🇺 Change the text in the "text" block to the text specified in the "location" object.
🇷🇺 Изменить текст в блоке text на текст, указанный в объекте location. */
}

function goTown() {
  /* 🇦🇺 This function is not generic. It is specifically related to going to the town and calls the update function with locations[0] object, which likely contains information about the town location, and updates the interface elements on the page corresponding to the new location.
🇷🇺 Эта функция не является общей. Она явно связана с переходом в город и вызывает функцию update с передачей объекта locations[0], который, вероятно, содержит информацию о местоположении города, и вызывает обновление элементов интерфейса на странице, соответствующих новому местоположению. */
  update(locations[0]); /* 🇦🇺 Change the current location to the town.
🇷🇺 Изменить текущее местоположение на город. */
}

function goStore() {
  update(locations[1]); /* 🇦🇺 Change the current location to "Store".
  🇷🇺 Изменить текущее местоположение на "Магазин". */
}

function goCave() {
  update(locations[2]); /* 🇦🇺 Change the current location to "Cave".
🇷🇺 Изменить текущее местоположение на "Пещеру". */
}

function buyHealth() {
  /* 🇦🇺 This is not a generic function. It is just a JavaScript function that checks if the player has enough gold to buy health, and depending on that either updates the amount of gold and health, or displays a message about insufficient gold.
  🇷🇺 Это не generic functions. Это просто функция на языке JavaScript, которая проверяет, достаточно ли у игрока золота для покупки здоровья, и в зависимости от этого либо обновляет количество золота и здоровья, либо выводит сообщение о недостаточности золота. */
  if (gold >= 10) {
    /* 🇦🇺 If the player has enough gold to buy health.
  🇷🇺 Если у игрока достаточно золота для покупки здоровья. */
    gold -= 10; /* 🇦🇺 Reduce gold.
  🇷🇺 Убавить золото. */
    health += 10; /* 🇦🇺 Reduce gold.
  🇷🇺 Увеличить здоровье. */
    goldText.innerText = gold; /* 🇦🇺 Update the text in the goldText block.
  🇷🇺 Обновить текст в блоке goldText. */
    healthText.innerText =
      health; /* 🇦🇺 Update the text in the healthText block.
  🇷🇺 Обновить текст в блоке healthText. */
  } else {
    /* 🇦🇺 If the player does not have enough gold to buy health. 
  🇷🇺 Если у игрока не достаточно золота для покупки здоровья. */
    text.innerText =
      "You do not have enough gold to buy health."; /* 🇦🇺 Display a message in the text block.
  🇷🇺 Вывести сообщение в блок text. */
  }
}

function buyWeapon() {
  /* 🇦🇺 Function buyWeapon is responsible for buying weapons. If the player has enough gold to buy a weapon, they receive a new one, and it is added to their inventory. If not, an error message is displayed.
This is not a generic function. It is just a JavaScript function that is responsible for buying weapons. If the player has enough gold to buy a weapon, they receive a new one, and it is added to their inventory. If not, an error message is displayed.
🇷🇺 Функция buyWeapon отвечает за покупку оружия. Если у игрока достаточно золота для покупки, он получает новое оружие и оно добавляется в его инвентарь. Если нет, то выводится сообщение об ошибке.
Это не generic functions. Это просто функция на языке JavaScript, которая отвечает за покупку оружия. Если у игрока достаточно золота для покупки, он получает новое оружие и оно добавляется в его инвентарь. Если нет, то выводится сообщение об ошибке. */
  if (currentWeapon < weapons.length - 1) {
    /* 🇦🇺 If the player does not have the most powerful weapon.
🇷🇺 Если у игрока не самое мощное оружие. */
    if (gold >= 30) {
      /* 🇦🇺 If the player has enough gold to buy a weapon.
🇷🇺 Если у игрока достаточно золота для покупки оружия. */
      gold -= 30; /* 🇦🇺 Decrease gold.
🇷🇺 Убавить золото. */
      currentWeapon++; /* 🇦🇺 Switch to the next weapon.
🇷🇺 Переключиться на следующее оружие. */
      goldText.innerText = gold; /* 🇦🇺 Update the text in the goldText block.
🇷🇺 Обновить текст в блоке goldText. */
      let newWeapon =
        weapons[currentWeapon].name; /* 🇦🇺 Remember the name of the new weapon.
🇷🇺 Запомнить название нового оружия. */
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

function sellWeapon() {
  /* 🇦🇺 Function sellWeapon is responsible for selling weapons. If the player has more than one weapon in their inventory, they can sell their current weapon and receive 15 gold. Otherwise, an error message is displayed.
This is not a generic function. It is a specific function named 'sellWeapon' that is responsible for selling weapons in a game.
🇷🇺 Функция sellWeapon отвечает за продажу оружия. Если у игрока есть более одного оружия в инвентаре, то он продает текущее оружие и получает 15 золота. В противном случае выводится сообщение об ошибке. 
Это не общая функция. Это конкретная функция с именем 'sellWeapon', которая отвечает за продажу оружия в игре. */
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

function fightSlime() {
  /* 🇦🇺 The function fightSlime is used to select the monster that the player will fight against.
🇷🇺 Функция fightSlime используется для выбора монстра, против которого будет сражаться игрок. */
  fighting = 0;
  goFight();
}

function fightBeast() {
  /* 🇦🇺 The function fightBeast is used to select the monster that the player will fight against.
🇷🇺 Функция fightBeast используется для выбора монстра, против которого будет сражаться игрок. */
  fighting = 1;
  goFight();
}

function fightDragon() {
  /* 🇦🇺 The function fightDragon is used to select the monster that the player will fight against.
🇷🇺 Функция fightDragon используется для выбора монстра, против которого будет сражаться игрок. */
  fighting = 2;
  goFight();
}

function goFight() {
  /* 🇦🇺 The function goFight is executed when a monster is selected, initializes the health and statistics of the monster, and displays it in the interface.
🇷🇺 Функция goFight выполняется при выборе монстра, инициализирует здоровье и статистику монстра, а также отображает это в интерфейсе. */
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterNameText.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  /* 🇦🇺 The function "attack" performs an attack on the selected monster. If the attack is successful, the player's health is reduced by the monster's attack level. Then an attack is made on the monster, and its health is reduced by the value of the player's weapon strength plus a random number between 1 and the player's level. If the player's or the monster's health is less than or equal to 0, the corresponding function is called or the player defeats the monster and moves on to the next location.
  There are no generic functions in this code. The 'attack' function is a specific function that performs an attack on the selected monster in a game.
🇷🇺 Функция attack выполняет атаку на выбранного монстра. Если атака успешна, то здоровье игрока уменьшается на уровень атаки монстра. Затем выполняется атака на монстра, и его здоровье уменьшается на значение силы оружия игрока и случайное число между 1 и уровнем игрока. Если здоровье игрока или монстра меньше или равно 0, то вызывается соответствующая функция, либо игрок побеждает монстра и переходит к следующей локации. 
В этом коде нет общих функций. Функция 'attack' является конкретной функцией, которая выполняет атаку на выбранного монстра в игре. */
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

function getMonsterAttackValue(level) {
  /* 🇦🇺 Function declaration of getMonsterAttackValue, which takes the argument 'level' and calculates the attack value of the monster based on its level.
The getMonsterAttackValue function is generic because it can be used in different parts of the program where it is necessary to calculate the attack value of the monster based on its level.
🇷🇺 Объявление функции getMonsterAttackValue, которая принимает аргумент level и вычисляет значение атаки монстра на основе его уровня. 
Функция getMonsterAttackValue является общей (generic), так как она может быть использована в разных частях программы, где нужно вычислить значение атаки монстра на основе его уровня. */

  let hit = level * 5 - Math.floor(Math.random() * xp);
  /* 🇦🇺 Calculating the monster's attack value based on its level and a random number.
🇷🇺 Вычисление значения удара монстра, исходя из уровня и случайного числа. */

  console.log(hit);
  /* 🇦🇺 Console log the value of the attack.
🇷🇺 Вывод в консоль значения удара. */

  return hit;
  /* 🇦🇺 Returning the value of the attack.
🇷🇺 Возврат значения удара. */
}

function isMonsterHit() {
  /* 🇦🇺 Declaring the function isMonsterHit, which returns true or false depending on whether the monster hits the player.
The given function is not a generic one as it performs a specific task - determining whether the monster hits the player, and cannot be used in other parts of the program where different tasks need to be performed.
🇷🇺 Объявление функции isMonsterHit, которая возвращает true или false в зависимости от того, попадет ли монстр по игроку. 
Данная функция не является общей (generic), так как она выполняет конкретную задачу - определение того, попадает ли монстр по игроку, и не может быть использована в других частях программы, где требуется выполнение других задач. */

  return Math.random() > 0.2 || health < 20;
  /* 🇦🇺 Declaring the function isMonsterHit, which returns true or false depending on whether the monster hits the player.
🇷🇺 Монстр попадет по игроку с вероятностью 80% (если Math.random() > 0.2) или если у игрока осталось меньше 20 очков здоровья. */
}

function dodge() {
  /* 🇦🇺 Declaration of the function "dodge", which updates the game text, indicating that the player dodged the monster's attack.
This function is not generic because it performs a specific task - updating the game text, indicating that the player dodged the monster's attack, and cannot be used in other parts of the program where different tasks need to be performed.
🇷🇺 Объявление функции dodge, которая обновляет текст игры, сообщая, что игрок увернулся от атаки монстра. 
Данная функция не является общей (generic), так как она выполняет конкретную задачу - обновление текста игры, сообщая, что игрок увернулся от атаки монстра, и не может быть использована в других частях программы, где требуется выполнение других задач. */

  text.innerText =
    "You dodge the attack from the " + monsters[fighting].name + ".";
  /* 🇦🇺 Updating text in the element with id 'text'.
🇷🇺 Обновление текста в элементе с id "text". */
}

function defeatMonster() {
  /* 🇦🇺 Declaring the function defeatMonster, which updates the player's gold and experience points after defeating a monster, and also calls the update function to update the player's location.
  This is not a generic function as it performs specific tasks related to updating the player's gold and experience points after defeating a monster and updating the player's location.
🇷🇺 Объявление функции defeatMonster, которая обновляет количество золота и опыта игрока после убийства монстра, а также вызывает функцию update для обновления местоположения игрока. 
Эта функция не является обобщенной, поскольку выполняет конкретные задачи, связанные с обновлением количества золота и опыта игрока после убийства монстра и обновлением местоположения игрока. */

  gold += Math.floor(
    monsters[fighting].level * 6.7
  ); /* 🇦🇺 Increasing the player's gold by a value dependent on the level of the defeated monster.
🇷🇺 Увеличение количества золота игрока на значение, зависящее от уровня убитого монстра. */

  xp +=
    monsters[fighting]
      .level; /* 🇦🇺 Increasing the player's experience by the level of the defeated monster.
🇷🇺 Увеличение количества опыта игрока на уровень убитого монстра. */

  goldText.innerText =
    gold; /* 🇦🇺 Updating the text in the element with id "goldText" with the new amount of gold.
🇷🇺 Обновление текста в элементе с id "goldText" с новым количеством золота. */

  xpText.innerText =
    xp; /* 🇦🇺 Updating the text in the element with id "xpText" with the new amount of experience.
🇷🇺 Обновление текста в элементе с id "xpText" с новым количеством опыта. */

  update(
    locations[4]
  ); /* 🇦🇺 Updating player's location by calling the update function with a new location.
🇷🇺 Обновление местоположения игрока, вызывая функцию update с новым местоположением. */
}

function lose() {
  /* 🇦🇺 Declaration of the function lose, which calls the update function with the location corresponding to the player's loss.
  This is a generic function as it performs common tasks such as updating the player's location using the update function with specific locations depending on whether the player won or lost.
🇷🇺 Объявление функции lose, которая вызывает функцию update с местоположением, соответствующим проигрышу.
Это общая функция, поскольку они выполняет общие задачи, такие как обновление местоположения игрока, используя функцию update с определенными местоположениями в зависимости от того, выиграл ли игрок или проиграл. */

  update(locations[5]);
  /* 🇦🇺 Updating the player's location by calling the update function with a new location.
🇷🇺 Обновление местоположения игрока, вызывая функцию update с новым местоположением. */
}

function winGame() {
  /* 🇦🇺 Declaring the function winGame, which calls the update function with the location corresponding to winning the game.
🇷🇺 Объявление функции winGame, которая вызывает функцию update с местоположением, соответствующим победе в игре. */
  update(locations[6]);
}

function restart() {
  xp = 0; // 🇦🇺 Reset experience points to 0
  health = 100; // 🇦🇺 Reset health to 100
  gold = 50; // 🇦🇺 Reset gold to 50
  currentWeapon = 0; // 🇦🇺 Reset current weapon to 0
  inventory = ["stick"]; // 🇦🇺 Reset inventory to contain only a stick
  goldText.innerText = gold; // 🇦🇺 Update the gold text element to display the current value of gold
  healthText.innerText = health; // 🇦🇺 Update the health text element to display the current value of health
  xpText.innerText = xp; // 🇦🇺 Update the experience points text element to display the current value of xp
  goTown(); // 🇦🇺 Call the goTown() function to navigate to the town location
}

function easterEgg() {
  update(locations[7]); // 🇦🇺 Call the update() function with the location at index 7 to display an Easter egg
}

function pickTwo() {
  pick(2); // 🇦🇺 Call the pick() function with the argument 2 to play the "Pick Two" game
}

function pickEight() {
  pick(8); // 🇦🇺 Call the pick() function with the argument 8 to play the "Pick Eight" game
}

function pick(guess) {
  let numbers = []; // 🇦🇺 Initialize an empty array to hold the random numbers
  while (numbers.length < 10) {
    // 🇦🇺 Generate 10 random numbers between 0 and 10
    numbers.push(Math.floor(Math.random() * 11));
  }

  text.innerText = "You picked " + guess + ". Here are the random numbers:\n"; // 🇦🇺 Update the text element to display the user's guess and the random numbers

  for (let i = 0; i < 10; i++) {
    // 🇦🇺 Loop through the random numbers and add them to the text element
    text.innerText += numbers[i] + "\n";
  }

  if (numbers.indexOf(guess) !== -1) {
    // 🇦🇺 If the user's guess is in the array of random numbers
    text.innerText += "Right! You win 20 gold!"; // 🇦🇺 Update the text element to indicate the user won and award 20 gold
    gold += 20;
    goldText.innerText = gold; // 🇦🇺 Update the gold text element to display the new value of gold
  } else {
    // 🇦🇺 If the user's guess is not in the array of random numbers
    text.innerText += "Wrong! You lose 10 health!"; // 🇦🇺 Update the text element to indicate the user lost and subtract 10 from health
    health -= 10;
    healthText.innerText = health; // 🇦🇺 Update the health text element to display the new value of health
    if (health <= 0) {
      // 🇦🇺 If health is less than or equal to 0, the user has lost the game
      lose(); // 🇦🇺 Call the lose() function to end the game
    }
  }
}
