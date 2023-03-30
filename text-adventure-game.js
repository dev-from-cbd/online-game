/* ----------------------------------- */
/*                                     */
/*  This JavaScript Code developed     */
/*  by Oleg Gribanov & ChatGPT :: 2023 */
/*                                     */
/* ----------------------------------- */

const textElement = document.getElementById("text"); // Получаем элемент с id="text"
const optionButtonsElement = document.getElementById("option-buttons"); // Получаем элемент с id="option-buttons"

let state = {}; // Объявляем переменную state и присваиваем ей пустой объект

function startGame() {
  // Объявляем функцию startGame
  state = {}; // Обнуляем state
  showTextNode(1); // Показываем текстовый блок с id=1
}

function reStart() {
  options: [
    {
      text: "Restart",
      nextText: -1,
    },
  ];
}

function showTextNode(textNodeIndex) {
  // Объявляем функцию showTextNode, которая принимает параметр textNodeIndex
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex); // Находим элемент textNode в массиве textNodes с помощью метода find() и фильтруем по id
  textElement.innerText = textNode.text; // Задаем текст элемента textElement равным textNode.text

  const imageElement = document.getElementById("game-image"); // Получаем элемент с id="game-image"
  imageElement.src = textNode.image; // Задаем атрибут src элемента imageElement равным textNode.image

  while (optionButtonsElement.firstChild) {
    // Если в элементе optionButtonsElement есть дочерние элементы, то ...
    optionButtonsElement.removeChild(optionButtonsElement.firstChild); // ... удаляем первый дочерний элемент из optionButtonsElement
  }

  textNode.options.forEach((option) => {
    // Для каждого элемента option в массиве textNode.options выполняем следующее
    if (showOption(option)) {
      // Если showOption(option) вернула true, то
      const button = document.createElement("button"); // Создаем элемент button
      button.innerText = option.text; // Задаем текст элемента button равным option.text
      button.classList.add("btn"); // Добавляем класс "btn" к элементу button
      button.addEventListener("click", () => selectOption(option)); // Добавляем слушатель клика на элемент button и вызываем функцию selectOption с параметром option при клике
      optionButtonsElement.appendChild(button); // Добавляем элемент button в конец optionButtonsElement
    }
  });
}

function showOption(option) {
  // Объявляем функцию showOption, которая принимает параметр option
  return option.requiredState == null || option.requiredState(state); // Если option.requiredState равно null, то вернуть true, иначе вернуть результат вызова option.requiredState со значением state
}

function selectOption(option) {
  // Объявляем функцию selectOption, которая принимает параметр option
  const nextTextNodeId = option.nextText; // Присваиваем переменной nextTextNodeId значение option.nextText
  if (nextTextNodeId <= 0) {
    // Если nextTextNodeId меньше или равно 0, то ...
    return startGame(); // ... вызываем функцию startGame и завершаем выполнение функции selectOption
  }
  state = Object.assign(state, option.setState); // Объединяем state и option.setState с помощью Object.assign() и присваиваем результат переменной state
  showTextNode(nextTextNodeId); // Показываем текстовый блок с id, указанным в nextTextNodeId
}

const textNodes = [
  // Объявляем массив textNodes
  {
    id: 1,
    text: "Hi! You must choose the language of the game.",
    options: [
      {
        text: "🇦🇺 English Version",
        nextText: 2,
      },
      {
        text: "🇷🇺 Русская версия",
        nextText: 3,
      },
    ],
    image: "images/1.jpeg",
  },
  {
    id: 2,
    text: "Choose the location where the Apocalypse caught you.",
    options: [
      {
        text: "Office",
        nextText: 4,
      },
      {
        text: "Your home",
        nextText: 101,
      },
    ],
    image: "images/2.jpeg",
  },
  {
    id: 3,
    text: "Выбери локацию, где тебя застал Апокалипсис.",
    options: [
      {
        text: "Офис",
        nextText: 5,
      },
      {
        text: "Твой дом",
        nextText: 101,
      },
    ],
    image: "images/3.jpeg",
  },
  {
    id: 4,
    text: "You heard a noise outside the window and decided to see what was happening there. Horrified, you discovered that a zombie attack on living people had begun there! What will you do? Will you run to find out if your friends are among the crowd of zombies, or will you decide to escape by trying to find a safe path?!",
    options: [
      {
        text: "Run to find friends",
        nextText: 6,
      },
      {
        text: "You decide to save",
        nextText: 8,
      },
    ],
    image: "images/4.jpeg",
  },
  {
    id: 5,
    text: "Ты услышал за окном шум и решил поглядеть, что там творится. В ужасе ты обнаружил, что там началась атака зомби на живых людей! Что ты будешь делать? Побежишь выяснять, нет ли твоих друзей среди толпы зомби, либо же решишь спасаться, попробовав найти безопасный путь?!",
    options: [
      {
        text: "Бежать искать друзей среди зомби",
        nextText: 7,
      },
      {
        text: "Решишь спастись",
        nextText: 9,
      },
    ],
    image: "images/5.jpeg",
  },
  {
    id: 6,
    text: "You've been eaten by zombies!!",
    reStart,
    image: "images/6.jpeg",
  },
  {
    id: 7,
    text: "Тебя съели зомби!!",
    reStart,
    image: "images/7.jpeg",
  },
  {
    id: 8,
    text: "You decided to go home because your relatives are there. To protect them and save yourself, you start to think through the details. You tried to call home, but the cellular connection began to act up. Which way home to choose? Go on foot through the city blocks, or take the subway and then take the train from the station, because you live in the suburbs?!",
    options: [
      {
        text: "Walk on the streets",
        nextText: 10,
      },
      {
        text: "Take the subway",
        nextText: 12,
      },
    ],
    image: "images/8.jpeg",
  },
  {
    id: 9,
    text: "Ты решил направиться домой, так как там родные. Чтобы защитить их и спастись самому, ты начинаешь продумывать детали. Ты попробовал позвонить домой, но сотовая связь стала барахлить. Какой путь домой выбрать? Пойти пешком через городские кварталы, либо же поехать на метро и потом с вокзала на электричке, ведь ты живешь в пригороде?!",
    options: [
      {
        text: "Пойти пешком прямо по улицам",
        nextText: 11,
      },
      {
        text: "Поехать на метро",
        nextText: 13,
      },
    ],
    image: "images/9.jpeg",
  },
  {
    id: 10,
    text: "You've been eaten by zombies!!",
    reStart,
    image: "images/10.jpeg",
  },
  {
    id: 11,
    text: "Тебя съели зомби!!",
    reStart,
    image: "images/11.jpeg",
  },
  {
    id: 12,
    text: "You took the subway, but when you were already on the train, you realized that the driver was infected and that he was moving from the head car to the tail of the train. What will you do? Will you start fighting with the driver in the hope of strangling him, or will you run through all the subway cars to the tail of the train?!",
    options: [
      {
        text: "Fight the subway driver",
        nextText: 14,
      },
      {
        text: "Run in subway",
        nextText: 16,
      },
    ],
    image: "images/12.jpeg",
  },
  {
    id: 13,
    text: "Ты поехал на метро, но когда ты уже был в поезде, то понял, что машинист заражен, и что он двигается из головного вагона в хвост поезда. Что ты предпримешь? Начнешь бороться с машинистом в надежде задушить его, либо же побежишь через все вагоны метро в хвост поезда?!",
    options: [
      {
        text: "Бороться с машинистом",
        nextText: 15,
      },
      {
        text: "Бежать через вагоны",
        nextText: 17,
      },
    ],
    image: "images/13.jpeg",
  },
  {
    id: 14,
    text: "You've been eaten by zombies!!",
    reStart,
    image: "images/14.jpeg",
  },
  {
    id: 15,
    text: "Тебя съел машинист!!",
    reStart,
    image: "images/15.jpeg",
  },
  {
    id: 16, // Run in subway
    text: "When the train reached the penultimate station, you realized that the driver was already close. Trains have been running on their own for many years, and drivers were needed simply to control the train. Therefore, the train would have reached the final station, where you need it, but the driver was already approaching your car. What will you choose? Get out of the subway car and walk to the station on foot, or will you start fighting with the driver in the hope of strangling him?!",
    options: [
      {
        text: "Choke the driver",
        nextText: 18,
      },
      {
        text: "Get out of the subway car",
        nextText: 20,
      },
    ],
    image: "images/16.jpeg",
  },
  {
    id: 17, // Бежать через вагоны
    text: "Когда поезд доехал до предпоследней станции, ты понял, что машинист уже близко. Поезда уже много лет ездят самостоятельно, а машинисты были нужны просто для контроля поезда. Поэтому поезд бы доехал и до конечной станции, куда тебе и нужно, но машинист уже приближался к твоему вагону. Что ты выберешь? Выйти из вагона метро и пройти до вокзала пешком, либо же начнешь бороться с машинистом в надежде задушить его?!",
    options: [
      {
        text: "Душить машиниста",
        nextText: 19,
      },
      {
        text: "Выйти из вагона метро",
        nextText: 21,
      },
    ],
    image: "images/17.jpeg",
  },
  {
    id: 18, // Choke the driver
    text: "The driver ate you!!",
    reStart,
    image: "images/18.jpeg",
  },
  {
    id: 19, // Душить машиниста
    text: "Машинист задушил тебя",
    reStart,
    image: "images/19.jpeg",
  },
  {
    id: 20, // 🇦🇺 Get off the subway train
    text: "When you stepped onto the subway platform and saw the train with an infected driver speed off into the tunnel. There were no infected people at this station, but you couldn't stay here. You had to continue your journey home. But how would you get to the train station to catch the train to the suburb where your house is located?",
    options: [
      {
        text: "Make your way through the city blocks",
        nextText: 22,
      },
      {
        text: "Go through the tunnel",
        nextText: 24,
      },
    ],
    image: "images/20.jpeg",
  },
  {
    id: 21, // Выйти из вагона метро
    text: "Когда ты вышел на перрон станции метрополитена и увидел, как поезд с зараженным машинистом умчался в тоннель. Прямо на этой станции не было зараженных людей, но ты не мог оставаться здесь. Ты должен продолжить путь домой. Но как именно добраться до вокзала, чтобы сесть на электричку и добраться до пригорода, где находится твой дом?!",
    options: [
      {
        text: "Пойти через кварталы",
        nextText: 23,
      },
      {
        text: "Пойти через тоннель",
        nextText: 25,
      },
    ],
    image: "images/21.jpeg",
  },
  {
    id: 22, // 🇦🇺 ...
    text: "🇦🇺 ...",
    reStart,
    image: "images/22.jpeg",
  },
  {
    id: 23, // Пойти через кварталы
    text: "Тебя съели зомби!!",
    reStart,
    image: "images/23.jpeg",
  },
  {
    id: 24, // 🇦🇺 Go through the subway tunnel (id:24)
    text: "The option of going through the tunnel seemed crazy as you had never been there before, but it turned out to be a lifesaver! You successfully made your way to the train station, where you saw people panicking. They were running back and forth, but the trains were still running. You saw your train smoothly leaving the platform. What now?!",
    options: [
      {
        text: "Wait for something",
        nextText: 26,
      },
      {
        text: "Jump into the last carriage",
        nextText: 28,
      },
    ],
    image: "images/24.jpeg",
  },
  {
    id: 25, // Пойти через тоннель
    text: "Вариант с тоннелем казался сумасшедшим, так как ты никогда там ранее не был, но это оказалось спасительным! Ты успешно добрался до вокзала, где увидел панику. Люди бегали туда-сюда, но электрички еще ходили. Ты увидел свою электричку, плавно отходящую от перрона вокзала. Что теперь?!",
    options: [
      {
        text: "Ждать чего-то",
        nextText: 27,
      },
      {
        text: "Запрыгнуть в последний вагон",
        nextText: 29,
      },
    ],
    image: "images/25.jpeg",
  },
  {
    id: 26, // 🇦🇺 ...
    text: "🇦🇺 ...",
    reStart,
    image: "images/26.jpeg",
  },
  {
    id: 27, // Ждать чего-то
    text: "Ты умер.",
    reStart,
    image: "images/27.jpeg",
  },
  {
    id: 28, // Get on the last subway carriage
    text: "You managed to jump into the last car just in time. Your train slowly departed from the city. Outside the window, you saw some kind of fights going on. You already understood that something terrible was happening! The cell phone connection still didn't work, so you didn't know what was happening with your family. As you were traveling to your station, a fight broke out in the last car, and a fire started. You need to decide quickly whether to save yourself and run to the front of the train, or go to the back car and figure out who started the fire in the train.",
    options: [
      {
        text: "Stay in the tail of the train",
        nextText: 30,
      },
      {
        text: "Head towards the front of the train",
        nextText: 32,
      },
    ],
    image: "images/28.jpeg",
  },
  {
    id: 29, // Запрыгнуть в последний вагон
    text: "Тебе удалось запрыгнуть буквально в последний вагон. Твоя электричка медленно отъезжала от города. За окном ты видел какие-то непонятные драки. Ты уже понимал, что начинается какая-то жесть! Сотовая связь по-прежнему не работала, поэтому ты не знал, что с твоими родными. Когда ты ехал до своей станции, то в последнем тамбуре завязалась какая-то борьба и там начался пожар. Тебе нужно срочно что-то решать: спасаться и бежать в голову поезда, либо же пойти в задний тамбур и разобраться, кто устроил пожар в поезде.",
    options: [
      {
        text: "Остаться в хвосте электрички",
        nextText: 31,
      },
      {
        text: "Направиться в начало поезда",
        nextText: 33,
      },
    ],
    image: "images/29.jpeg",
  },
  {
    id: 30, // 🇦🇺 ...
    text: "🇦🇺 ...",
    reStart,
    image: "images/30.jpeg",
  },
  {
    id: 31, // Остаться в хвосте электрички
    text: "Так как поезд двигался, то пожар быстро распространялся, поэтому задний вагон быстро сгорел вместе с тобой и остальными пассажирами. Ты проиграл!",
    reStart,
    image: "images/31.jpeg",
  },
  {
    id: 32, // 🇦🇺 Run to the front of the commuter train
    text: "The option to transfer to the front of the suburban train by passing through all the suburban train carriages turned out to be a lifesaver. The back wagons were on fire, but the train was moving fast enough for you to safely reach your destination station while being in the head car and out of harm's way. But what should you do now?! Should you continue riding the train to some distant location or exit at your station?",
    options: [
      {
        text: "Hop on the commuter train",
        nextText: 34,
      },
      {
        text: "Exit at your station",
        nextText: 36,
      },
    ],
    image: "images/32.jpeg",
  },
  {
    id: 33, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "...",
        nextText: 35,
      },
      {
        text: "... (Текст кнопки №52)",
        nextText: 37,
      },
    ],
    image: "images/33.jpeg",
  },
  {
    id: 34, // 🇦🇺 ...
    text: "🇦🇺 ...",
    reStart,
    image: "images/34.jpeg",
  },
  {
    id: 35, // 🇷🇺 ...
    text: "🇷🇺 ...",
    reStart,
    image: "images/35.jpeg",
  },
  {
    id: 36, // 🇦🇺 ...
    text: "When you arrived at your station, you got off the train and walked home past the local supermarket. You knew you needed to stock up on food for a long time, as you would have to stay at home. But at the same time, you knew it was risky, as there could be zombies in the supermarket. What should you choose?!",
    options: [
      {
        text: "Go home without food",
        nextText: 38,
      },
      {
        text: "Go to the supermarket",
        nextText: 40,
      },
    ],
    image: "images/36.jpeg",
  },
  {
    id: 37, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №57)",
        nextText: 39,
      },
      {
        text: "... (Текст кнопки №58)",
        nextText: 41,
      },
    ],
    image: "images/37.jpeg",
  },
  {
    id: 38, // 🇦🇺 ...
    text: "🇦🇺 ...",
    reStart,
    image: "images/38.jpeg",
  },
  {
    id: 39, // 🇷🇺 ...
    text: "🇷🇺 ...",
    reStart,
    image: "images/39.jpeg",
  },
  {
    id: 40, // 🇦🇺 ...
    text: "To your surprise, there was no one in the store, everyone had run away somewhere. Moreover, it was clear that some of the food from the shelves had already disappeared. There were scattered flakes on the floor and spilled milk. You picked up non-perishable food: canned goods, oatmeal cookies, tea, grains, etc. You wanted to pay for everything, but the cash register was smashed and looted. In the place where the cashier should have been, you saw drops of blood. You headed home. Next to the store, you saw a huge jeep with open doors and the engine running. People were running somewhere in the distance. You realized that the car was abandoned, but it was not yours. You began to feel guilty. What will you choose?",
    options: [
      {
        text: "Make your way home by walking",
        nextText: 42,
      },
      {
        text: ".Use the car to get home",
        nextText: 44,
      },
    ],
    image: "images/40.jpeg",
  },
  {
    id: 41, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №63)",
        nextText: 43,
      },
      {
        text: "... (Текст кнопки №64)",
        nextText: 45,
      },
    ],
    image: "images/41.jpeg",
  },
  {
    id: 42, // 🇦🇺 ...
    text: "🇦🇺 ...",
    reStart,
    image: "images/42.jpeg",
  },
  {
    id: 43, // 🇷🇺 ...
    text: "🇷🇺 ...",
    reStart,
    image: "images/43.jpeg",
  },
  {
    id: 44, // Drive home by car
    text: "You made the right choice by taking the car, as walking home is no longer safe. Inside the car, you can be protected from bites! It's especially nice to be in the car with a large bag of food) When you arrived home, you heard screams inside. What will you do?",
    options: [
      {
        text: "Run back to the train station",
        nextText: 46,
      },
      {
        text: "Run into the house to save your family",
        nextText: 48,
      },
    ],
    image: "images/44.jpeg",
  },
  {
    id: 45, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №69)",
        nextText: 47,
      },
      {
        text: "... (Текст кнопки №70)",
        nextText: 49,
      },
    ],
    image: "images/45.jpeg",
  },
  {
    id: 46, // 🇦🇺 ...
    text: "🇦🇺 ...",
    reStart,
    image: "images/46.jpeg",
  },
  {
    id: 47, // 🇷🇺 ...
    text: "🇷🇺 ...",
    reStart,
    image: "images/47.jpeg",
  },
  {
    id: 48, // 🇦🇺 ...
    text: "🇦🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №73)",
        nextText: 50,
      },
      {
        text: "... (Текст кнопки №74)",
        nextText: 52,
      },
    ],
    image: "images/48.jpeg",
  },
  {
    id: 49, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №75)",
        nextText: 51,
      },
      {
        text: "... (Текст кнопки №76)",
        nextText: 53,
      },
    ],
    image: "images/49.jpeg",
  },
  {
    id: 50, // 🇦🇺 ...
    text: "🇦🇺 ... ",
    reStart,
    image: "images/50.jpeg",
  },
  {
    id: 51, // 🇷🇺 ...
    text: "🇷🇺 ... ",
    reStart,
    image: "images/51.jpeg",
  },
  {
    id: 52, // 🇦🇺 ...
    text: "🇦🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №79)",
        nextText: 54,
      },
      {
        text: "... (Текст кнопки №80)",
        nextText: 56,
      },
    ],
    image: "images/52.jpeg",
  },
  {
    id: 53, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №81)",
        nextText: 55,
      },
      {
        text: "... (Текст кнопки №82)",
        nextText: 57,
      },
    ],
    image: "images/53.jpeg",
  },
  {
    id: 54, // 🇦🇺 ...
    text: "🇦🇺 ... ",
    reStart,
    image: "images/54.jpeg",
  },
  {
    id: 55, // 🇷🇺 ...
    text: "🇷🇺 ... ",
    reStart,
    image: "images/55.jpeg",
  },
  {
    id: 56, // 🇦🇺 ...
    text: "🇦🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №85)",
        nextText: 58,
      },
      {
        text: "... (Текст кнопки №86)",
        nextText: 60,
      },
    ],
    image: "images/56.jpeg",
  },
  {
    id: 57, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №87)",
        nextText: 59,
      },
      {
        text: "... (Текст кнопки №88)",
        nextText: 61,
      },
    ],
    image: "images/57.jpeg",
  },
  {
    id: 58, // 🇦🇺 ...
    text: "🇦🇺 ... ",
    reStart,
    image: "images/58.jpeg",
  },
  {
    id: 59, // 🇷🇺 ...
    text: "🇷🇺 ... ",
    reStart,
    image: "images/59.jpeg",
  },
  {
    id: 60, // 🇦🇺 ...
    text: "🇦🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №91)",
        nextText: 18,
      },
      {
        text: "... (Текст кнопки №92)",
        nextText: 20,
      },
    ],
    image: "images/60.jpeg",
  },
  {
    id: 61, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №93)",
        nextText: 63,
      },
      {
        text: "... (Текст кнопки №94)",
        nextText: 65,
      },
    ],
    image: "images/61.jpeg",
  },
  {
    id: 62, // 🇦🇺 ...
    text: "🇦🇺 ... ",
    reStart,
    image: "images/62.jpeg",
  },
  {
    id: 63, // 🇷🇺 ...
    text: "🇷🇺 ... ",
    reStart,
    image: "images/63.jpeg",
  },
  {
    id: 64, // 🇦🇺 ...
    text: "🇦🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №97)",
        nextText: 66,
      },
      {
        text: "... (Текст кнопки №98)",
        nextText: 68,
      },
    ],
    image: "images/64.jpeg",
  },
  {
    id: 65, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №99)",
        nextText: 67,
      },
      {
        text: "... (Текст кнопки №100)",
        nextText: 69,
      },
    ],
    image: "images/65.jpeg",
  },
  {
    id: 66, // 🇦🇺 ...
    text: "🇦🇺 ... ",
    reStart,
    image: "images/66.jpeg",
  },
  {
    id: 67, // 🇷🇺 ...
    text: "🇷🇺 ... ",
    reStart,
    image: "images/67.jpeg",
  },
  {
    id: 68, // 🇦🇺 ...
    text: "🇦🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №103)",
        nextText: 70,
      },
      {
        text: "... (Текст кнопки №104)",
        nextText: 72,
      },
    ],
    image: "images/68.jpeg",
  },
  {
    id: 69, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №105)",
        nextText: 71,
      },
      {
        text: "... (Текст кнопки №106)",
        nextText: 73,
      },
    ],
    image: "images/69.jpeg",
  },
  {
    id: 70, // 🇦🇺 ...
    text: "🇦🇺 ...  ",
    reStart,
    image: "images/70.jpeg",
  },
  {
    id: 71, // 🇷🇺 ...
    text: "🇷🇺 ... ",
    reStart,
    image: "images/71.jpeg",
  },
  {
    id: 72, // 🇦🇺 ...
    text: "🇦🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №109)",
        nextText: 74,
      },
      {
        text: "... (Текст кнопки №110)",
        nextText: 76,
      },
    ],
    image: "images/72.jpeg",
  },
  {
    id: 73, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №111)",
        nextText: 75,
      },
      {
        text: "... (Текст кнопки №112)",
        nextText: 76,
      },
    ],
    image: "images/73.jpeg",
  },
  {
    id: 74, // 🇦🇺 ...
    text: "🇦🇺 ... ",
    reStart,
    image: "images/74.jpeg",
  },
  {
    id: 75, // 🇷🇺 ...
    text: "🇷🇺 ... ",
    reStart,
    image: "images/75.jpeg",
  },
  {
    id: 76, // 🇦🇺 ...
    text: "🇦🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №115)",
        nextText: 78,
      },
      {
        text: "... (Текст кнопки №116)",
        nextText: 80,
      },
    ],
    image: "images/76.jpeg",
  },
  {
    id: 77, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №117)",
        nextText: 79,
      },
      {
        text: "... (Текст кнопки №118)",
        nextText: 81,
      },
    ],
    image: "images/77.jpeg",
  },
  {
    id: 78, // 🇦🇺 ...
    text: "🇦🇺 ... ",
    reStart,
    image: "images/78.jpeg",
  },
  {
    id: 79, // 🇷🇺 ...
    text: "🇷🇺 ... ",
    reStart,
    image: "images/79.jpeg",
  },
  {
    id: 80, // 🇦🇺 ...
    text: "🇦🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №121)",
        nextText: 82,
      },
      {
        text: "... (Текст кнопки №122)",
        nextText: 84,
      },
    ],
    image: "images/80.jpeg",
  },
  {
    id: 81, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №123)",
        nextText: 83,
      },
      {
        text: "... (Текст кнопки №124)",
        nextText: 85,
      },
    ],
    image: "images/81.jpeg",
  },
  {
    id: 82, // 🇦🇺 ...
    text: "🇦🇺 ... ",
    reStart,
    image: "images/82.jpeg",
  },
  {
    id: 83, // 🇷🇺 ...
    text: "🇷🇺 ... ",
    reStart,
    image: "images/83.jpeg",
  },
  {
    id: 84, // 🇦🇺 ...
    text: "🇦🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №127)",
        nextText: 86,
      },
      {
        text: "... (Текст кнопки №128)",
        nextText: 66,
      },
    ],
    image: "images/84.jpeg",
  },
  {
    id: 85, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №129)",
        nextText: 87,
      },
      {
        text: "... (Текст кнопки №130)",
        nextText: 89,
      },
    ],
    image: "images/85.jpeg",
  },
  {
    id: 86, // 🇦🇺 ...
    text: "🇦🇺 ... ",
    reStart,
    image: "images/86.jpeg",
  },
  {
    id: 87, // 🇷🇺 ...
    text: "🇷🇺 ... ",
    reStart,
    image: "images/87.jpeg",
  },
  {
    id: 88, // 🇦🇺 ...
    text: "🇦🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №133)",
        nextText: 90,
      },
      {
        text: "... (Текст кнопки №134)",
        nextText: 92,
      },
    ],
    image: "images/88.jpeg",
  },
  {
    id: 89, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №135)",
        nextText: 91,
      },
      {
        text: "... (Текст кнопки №136)",
        nextText: 93,
      },
    ],
    image: "images/89.jpeg",
  },
  {
    id: 90, // 🇦🇺 ...
    text: "🇦🇺 ... ",
    reStart,
    image: "images/90.jpeg",
  },
  {
    id: 91, // 🇷🇺 ...
    text: "🇷🇺 ... ",
    reStart,
    image: "images/91.jpeg",
  },
  {
    id: 92, // 🇦🇺 ...
    text: "🇦🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №139)",
        nextText: 94,
      },
      {
        text: "... (Текст кнопки №140)",
        nextText: 96,
      },
    ],
    image: "images/92.jpeg",
  },
  {
    id: 93, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №141)",
        nextText: 95,
      },
      {
        text: "... (Текст кнопки №142)",
        nextText: 97,
      },
    ],
    image: "images/93.jpeg",
  },
  {
    id: 94, // 🇦🇺 ...
    text: "🇦🇺 ... ",
    reStart,
    image: "images/94.jpeg",
  },
  {
    id: 95, // 🇷🇺 ...
    text: "🇷🇺 ... ",
    reStart,
    image: "images/95.jpeg",
  },
  {
    id: 96, // 🇦🇺 ...
    text: "🇦🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №145)",
        nextText: 98,
      },
      {
        text: "... (Текст кнопки №146)",
        nextText: 100,
      },
    ],
    image: "images/96.jpeg",
  },
  {
    id: 97, // 🇷🇺 ...
    text: "🇷🇺 ...",
    options: [
      {
        text: "... (Текст кнопки №147)",
        nextText: 99,
      },
      {
        text: "... (Текст кнопки №148)",
        nextText: 101,
      },
    ],
    image: "images/97.jpeg",
  },
  {
    id: 98, // 🇦🇺 ...
    text: "🇦🇺 ... ",
    reStart,
    image: "images/98.jpeg",
  },
  {
    id: 99, // 🇷🇺 ...
    text: "🇷🇺 ... ",
    reStart,
    image: "images/99.jpeg",
  },
  {
    id: 100,
    text: "You won!",
    options: [
      {
        text: "Congratulations! Play Again!",
        nextText: -1,
      },
    ],
    image: "images/1.jpeg",
  },
  {
    id: 101,
    text: "Ты выиграл!",
    options: [
      {
        text: "Поздравляем! Начать заново?",
        nextText: -1,
      },
    ],
    image: "images/1.jpeg",
  },
];

startGame();
