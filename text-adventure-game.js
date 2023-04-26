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
    id: 22, // Make your way through the city blocks
    text: "You've been eaten by zombies!!",
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
    id: 26, // Wait for something
    text: "You have died.",
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
    id: 30, // Stay in the tail of the train
    text: "As the train was moving, the fire quickly spread, so the rear carriage quickly burned down with you and the other passengers. You lost!",
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
    id: 33, // Направиться в начало поезда
    text: "Вариант с переходом в начало поезда, пройдя сквозь все вагоны электрички, оказался спасительным. Задние вагоны полыхали, но поезд двигался достаточно быстро, чтобы ты смог безопасно добраться до нужной станции, находясь в безопасности, так как ты уже был в головном вагоне поезда. Но что же тебе делать теперь?! Выйти на своей станции или уехать куда-то вдаль?!",
    options: [
      {
        text: "Поехать на электричке",
        nextText: 35,
      },
      {
        text: "Выйти на своей станции",
        nextText: 37,
      },
    ],
    image: "images/33.jpeg",
  },
  {
    id: 34, // Hop on the commuter train
    text: "A commuter train crashed into another commuter train!",
    reStart,
    image: "images/34.jpeg",
  },
  {
    id: 35, // Поехать на электричке
    text: "Электричка врезалась в другую электричку!",
    reStart,
    image: "images/35.jpeg",
  },
  {
    id: 36, // To get off at your station
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
    id: 37, // Выйти на своей станции
    text: "Когда ты доехал до своей станции, то вышел из поезда и пошел домой мимо местного супермаркета. Ты понимал, что тебе нужны припасы еды на долгое время, так как нужно будет отсидеться дома. Но при этом ты понимал, что это рисково, так как в супермаркете могли быть зомби. Что же тебе выбрать?!",
    options: [
      {
        text: "Пойти домой без еды",
        nextText: 39,
      },
      {
        text: "Пойти в супермаркет",
        nextText: 41,
      },
    ],
    image: "images/37.jpeg",
  },
  {
    id: 38, // Go home without food
    text: "You came back home and passed away from starvation.",
    reStart,
    image: "images/38.jpeg",
  },
  {
    id: 39, // Пойти домой без еды
    text: "Ты пришел домой и там умер от голода.",
    reStart,
    image: "images/39.jpeg",
  },
  {
    id: 40, // Go to the supermarket
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
    id: 41, // Пойти в супермаркет
    text: "К твоему удивлению, в магазине никого не было, все куда-то убежали. Причем, было понятно, что часть еды с полок уже куда-то пропала. На полу лежали рассыпанные хлопья и было разлито молоко. Ты набрал еды, которая не портится: консервы, овсянное печенье, чай, крупы и т.п.. Ты хотел заплатить за все это, но касса была разбита и разграблена. В том месте, где должен быть кассир, ты увидел капли крови. Ты направился домой. Рядом с магазином ты увидел огромный джип с открытыми дверями и включенным двигателем. Где-то вдалеке бежали люди. Ты понимал, что машина брошена, но она была не твоя. У тебя начались муки совести. Что ты выберешь?",
    options: [
      {
        text: "Пойти из супермаркета домой пешком",
        nextText: 43,
      },
      {
        text: "Поехать домой на машине",
        nextText: 45,
      },
    ],
    image: "images/41.jpeg",
  },
  {
    id: 42, // Make your way home by walking
    text: "You went home unprotected and were attacked by zombies who ate you!",
    reStart,
    image: "images/42.jpeg",
  },
  {
    id: 43, // Пойти из супермаркета домой пешком
    text: "Ты пошел домой, незащищенный ничем. На тебя напали зомби и съели!",
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
    id: 45, // Поехать домой на машине
    text: "Ты сделал правильный выбор, взяв машину, так как пешком идти уже небезопасно. Внутри машины ты можешь быть защищен от укусов! Особенно хорошо находится в авто с большой сумкой еды) Когда ты приехал домой, то ты услышал крики в доме. Что ты будешь делать?",
    options: [
      {
        text: "Убежишь обратно на вокзал",
        nextText: 47,
      },
      {
        text: "Побежишь в дом спасать родных",
        nextText: 49,
      },
    ],
    image: "images/45.jpeg",
  },
  {
    id: 46, // Run back to the train station
    text: "You were eaten by homeless people at the train station!",
    reStart,
    image: "images/46.jpeg",
  },
  {
    id: 47, // Убежишь обратно на вокзал
    text: "На вокзале тебя съели бомжи!",
    reStart,
    image: "images/47.jpeg",
  },
  {
    id: 48, // Run inside to rescue your loved ones
    text: "When you drove up to your home, you heard screams coming from the second floor. You ran inside and saved everyone! You had to kill some zombies :( What to do next?! Barricade yourself in the house or go outside to look for something?!",
    options: [
      {
        text: "Go look for adventure",
        nextText: 50,
      },
      {
        text: "Barricade yourself in the house",
        nextText: 52,
      },
    ],
    image: "images/48.jpeg",
  },
  {
    id: 49, // Побежишь в дом спасать родных
    text: "Когда ты подъехал на машине к своему дому, ты услышал крики, которые доносились со второго этажа. Ты забежал внутрь и всех спас! Тебе пришлось убить зомби( Что же делать дальше?! Забаррикадироваться в доме или пойти на улицу, чтобы поискать чего-то?!",
    options: [
      {
        text: "Пойти искать приключений",
        nextText: 51,
      },
      {
        text: "Забаррикадироваться в доме",
        nextText: 53,
      },
    ],
    image: "images/49.jpeg",
  },
  {
    id: 50, // Go look for adventure
    text: "You fell victim to crooks and thugs!",
    reStart,
    image: "images/50.jpeg",
  },
  {
    id: 51, // Пойти искать приключений
    text: "Тебя ограбили и убили жулики и воры!",
    reStart,
    image: "images/51.jpeg",
  },
  {
    id: 52, // Fortify the house by barricading the entrances
    text: "Hide in the house was a good idea! Within a day, all the nearby houses were deserted, but screams could be heard on the streets. You had food, water, electricity, and other supplies, but you knew that electricity and water supply would soon be cut off. Not only zombies but also marauder gangs appeared on the streets. You remembered that your neighbor had a good underground bunker that he paranoidly dug in case of a nuclear attack by Putin. So the bunker would come in handy if you need to hide from zombies and marauders. There is a system for collecting rainwater and solar panels with a generator. You can live inside for a long time without any problems. Or you could go with your whole family to the nearest military unit since it was announced on the radio that a refugee camp was being set up there. What will you choose?",
    options: [
      {
        text: "Make your way to the military unit",
        nextText: 54,
      },
      {
        text: ".Take shelter in the bunker",
        nextText: 56,
      },
    ],
    image: "images/52.jpeg",
  },
  {
    id: 53, // Забаррикадироваться в доме
    text: "Спрятаться в доме - это была хорошая идея! В течение суток все ближайшие дома опустели, но на улице были слышны крики. У вас была еда, вода, электричество и прочее. Но ты понимал, что электричество и водопровод скоро отключат. На улицах появились не только зомби, но и банды мародеров. Ты вспомнил, что у соседа был хороший подземный бункер, который он параноидально рыл на случай ядерной атаки Путина. Вот и бункер пригодился бы, если надо спрятаться от зомби и мародеров. Там есть система для сбора дождевой воды и солнечные батареи с генератором. Внутри можно жить очень долго без всяких проблем. Ну либо можно было бы пойти всей семьей в ближайшую военную часть, так как по радио объявили, что там делают лагерь беженцев. Что ты выберешь?",
    options: [
      {
        text: "Пробиваться к военной части",
        nextText: 55,
      },
      {
        text: "Спастись в бункере",
        nextText: 57,
      },
    ],
    image: "images/53.jpeg",
  },
  {
    id: 54, // Make your way to the military base
    text: "On the radio, they announced that the authorities had released all the inmates from the prisons and all the psychos from the mental hospitals, as it was the last humane step of humanity, otherwise they would have been eaten there. Some of the released quickly formed gangs. The most fierce were the groups that mixed together the prison scum, the insane psychos from the mental institutions, and the alcoholic freaks. These three social groups found a common language between themselves, so it was a golden time for them. These crooks and thugs killed you and your family!!",
    reStart,
    image: "images/54.jpeg",
  },
  {
    id: 55, // Пробиваться к военной части
    text: "По радио объявили, что власти выпустили на свободу всех зэков из тюрем и всех психов из сумасшедших домов, так как это был последний гуманный шаг человечества, иначе бы их там съели. Некоторые из освобожденных быстро сколотили себе банды. Особо ярыми были шайки, в которых смешались тюремные отморозки, сумасшедшие психи из психушек и фрики-алкоголики. Эти три социальные группы нашли общий язык между собой, поэтому для них наступила золотая пора. Эти жулики и воры убили тебя и твою семью!!",
    reStart,
    image: "images/55.jpeg",
  },
  {
    id: 56, // Take shelter in the bunker
    text: "You and your family had moved from your home to the neighbor's underground bunker. Unfortunately, the neighbor turned into a zombie. You saw his face in the window on the second floor of his house. You went into his bunker, and he looked at you sadly and growled. It was ironic to prepare so well for the end of the world and then die on the first day of the Apocalypse. You all felt sorry for the neighbor because, although he was grumpy, he was a good person at heart. He had some quirks, but they never bothered anyone. The neighbor was constantly digging the bunker in case of a nuclear attack by Putin. Now the bunker came in handy for people, but not for its creator, unfortunately. On the radio, they announced that the authorities had released all the prisoners from the prisons and all the psychos from the insane asylums, as it was the last humane act of humanity, otherwise they would have been eaten there. Some of the released quickly formed gangs. The most fanatical were the gangs in which the prison scum, crazy psychos from the asylums, and alcoholic freaks mixed. These three social groups found a common language with each other, so it was a golden time for them. Therefore, your family urgently needed to hide from the crowds of marauders and zombies. The bunker had a system for collecting rainwater and solar panels with a generator. And also, there was simply stocked drinking water in barrels and electricity in batteries. You could live here for a very long time without any problems. You could go to the nearest military unit where a refugee camp was made and later, after a few days. When you prepared dinner and ate with your family, you heard someone knock on the door. In general, the doors were quite well disguised, so it could only be someone who knew about the bunker, that is, someone from the neighbors or friends of the bunker's creator. You had an eye-hole and the ability to talk to the guest through a microphone. It turned out to be the internet friend of your neighbor, who flew in on his small plane from New Zealand, but after landing, he was bitten, so now he is infected and will soon turn into a zombie. What will you choose? Let the infected person in to cure him, or leave him to die on the street?!",
    options: [
      {
        text: "Let the infected person in",
        nextText: 58,
      },
      {
        text: "Leave the infected person outside the bunker",
        nextText: 60,
      },
    ],
    image: "images/56.jpeg",
  },
  {
    id: 57, // Спастись в бункере
    text: "Ты с семьей перешел из своего дома в подземный бункер соседа. К сожалению, сосед превратился в зомби. Вы видели его лицо в окне на втором этаже его дома. Вы заходили в его бункер, а он грустно смотрел на вас и рычал. Это была ирония: плотно готовиться к спасению в конце света, а потом умереть в первый день Апокалипсиса. Вам всем было жаль соседа, так как он хоть и был угрюмым, но в душе сосед был хорошим человеком. У него была странности, но это никогда никому не мешало. Сосед постоянно копал бункер на случай ядерной атаки Путина. Теперь бункер пригодился людям, но не самому создателю, к сожалению. По радио объявили, что власти выпустили на свободу всех зэков из тюрем и всех психов из сумасшедших домов, так как это был последний гуманный шаг человечества, иначе бы их там съели. Некоторые из освобожденных быстро сколотили себе банды. Особо ярыми были шайки, в которых смешались тюремные отморозки, сумасшедшие психи из психушек и фрики-алкоголики. Эти три социальные группы нашли общий язык между собой, поэтому для них наступила золотая пора. В связи с этим, твоей семье срочно нужно было спрятаться от толп мародеров и зомби. В бункере была система для сбора дождевой воды и солнечные батареи с генератором. А также там просто была припасена питьевая вода в бочках и электричество в аккумуляторах. Вы могли прожить здесь очень долго без каких-либо проблем. В ближайшую военную часть, где сделали лагерь беженцев. можно будет пойти и попозже, через несколько дней. Когда ты приготовил ужин и покушал с семьей, то услышал, что кто-то постучался в двери. Вообще, двери были довольно-таки хорошо замаскированы, так что это мог быть только тот, кто знал о бункере, то есть, кто-то из соседей или друзей создателя бункера. У вас был глазок и возможность говорить с гостем через микрофон. Выяснилось, что это был интернет-друг вашего соседа, который прилетел на своем небольшом самолете из Новой Зеландии, но после приземления его укусили, так что теперь он заражен и скоро обратится в зомби. Что ты выберешь? Впустить зараженного, чтобы вылечить, либо же оставить его умирать на улице?!",
    options: [
      {
        text: "Впустить зараженного",
        nextText: 59,
      },
      {
        text: "Оставить зараженного возле бункера",
        nextText: 61,
      },
    ],
    image: "images/57.jpeg",
  },
  {
    id: 58, // Let the infected person in
    text: "You let in the infected person, he turned into a zombie and ate all of you!",
    reStart,
    image: "images/58.jpeg",
  },
  {
    id: 59, // Впустить зараженного
    text: "Вы впустили зараженного, он обратился в зомби и съел вас всех!",
    reStart,
    image: "images/59.jpeg",
  },
  {
    id: 60, // Leave the infected person near the bunker
    text: "You made the right choice by not letting the infected person in. You saved yourself, while he couldn't survive since there is no cure after being bitten. Of course, it was very sad for all of you, but there was nothing you could do. You calculated the supplies you had. If there was only one person, the water and canned food would have lasted a long time, but since there were several of you, everything would run out quite quickly. Something had to be done. The situation was further complicated by the radio report about dangerous hungry animals roaming the streets. The thing is that volunteers all over the world decided to release the animals from the cages in zoos and circuses, otherwise they would have died of hunger there. Some of the volunteers even died freeing lions and tigers. In general, besides zombies and marauders, wild animals now roamed the streets too. It's understandable that this wasn't happening everywhere since there are not zoos and circuses in every city, and there haven't been any animal circuses in your country for a long time, but there were more zoos than anywhere else. Since supplies were very low, something had to be done. You had a radio through which you could all hear the invitation from the military to their base, but you couldn't call them or contact them in any way. The internet stopped working all over the world. Cell phone service no longer worked. You didn't have any old-fashioned landline phones that would work on simple telephone lines. But you knew there was a hunting store nearby that had everything for hunting and fishing. You could find a radio there. It's clear that the place no longer functioned as a store, but radios could still be there somewhere on the shelves. In general, you decided to organize the rescue in two steps: get to the radios, and then go to the military base if they are waiting for you there and if they explain how to get to them. You prepared the car for a long journey, packed provisions, a tent, and so on. The hunting store was within easy reach, so the first step of your journey would be short. You set off there at dawn. When you arrived at the store, you saw that it was half looted through the broken window. This is not surprising. When you approached the store to go inside, you heard noise inside. What will you do? Will you take the risk and go inside for the radios, or will you return to the bunker with your family?",
    options: [
      {
        text: "Return to the bunker",
        nextText: 62,
      },
      {
        text: "Go inside the store",
        nextText: 64,
      },
    ],
    image: "images/60.jpeg",
  },
  {
    id: 61, // Оставить зараженного возле бункера
    text: "Вы сделали правильный выбор, когда не впустили зараженного к себе. Вы спаслись, а он не смог выжить, так как после укуса уже нет вариантов, от этого нет лекарства. Конечно, вам всем было очень грустно от этого, но ничего не поделать. Вы подсчитали запасы, которые у вас имелись. Воды и еды в виде консервов хватило бы надолго, если бы тут был всего один человек. Но так как вас несколько, то все закончится довольно быстро. Нужно было что-то решать. Ситуация усложнялась тем, что по радио передали об опасных голодных животных, слоняющихся по улицам. Дело в том, что волонтеры по всему миру решили выпустить животных из клеток в зоопарках и цирках, иначе там их ждала голодная смерть. Часть волонтеров даже погибла, освобождая львов и тигров. В общем, на улицах помимо зомби и мародеров, теперь орудовали и дикие животные. Понятно, что это было не везде, так как зоопарки и цирки есть не в каждом городе, а цирков с животными в твоей стране вообще давно уже нет, но зато зоопарков было больше, чем где бы то ни было. Так как запасов оставалось очень мало, то нужно что-то решать. У тебя было радио, через которое вы все могли слышать приглашение военных из их части, но вы не могли позвонить им или как-то связаться. Интернет перестал работать по всей планете. Сотовая связь больше не работала. Старых проводных телефонов, которые бы работали по простым телефонным линиям у вас не было. Но ты знал, что недалеко был охотничий магазин, где было все для охоты и рыбалки. Там можно найти рацию. Понятно, что то место уже не функционировало, как магазин, однако ж, рации-то там могли остаться где-то на полках. В общем, ты решил организовать спасение в 2 шага: добраться до раций, а уж затем поехать в военную часть, если вас там ждут и если они объяснят, как именно до них доехать. Ты подготовил автомобиль к дальнему путешествию, сложил туда провизию, палатку и прочее. До охотнечьего магазина было рукой подать, поэтому первый шаг вашего путешествия будет коротким. Вы выехали туда на рассвете. Когда вы подъехали к магазину, то через разбитую витрину увидели, что он был наполовину разграблен. Это неудивительно. Когда ты подошел к магазину, чтобы зайти внутрь, то ты услышал шум внутри. Что ты будешь делать? Рискнешь и зайдешь внутрь за рациями, либо же вернешься с семьей обратно в бункер?",
    options: [
      {
        text: "Вернуться в бункер",
        nextText: 63,
      },
      {
        text: "Зайти внутрь магазина",
        nextText: 65,
      },
    ],
    image: "images/61.jpeg",
  },
  {
    id: 62, // Return to the bunker
    text: "You returned to the bunker and died there of hunger.",
    reStart,
    image: "images/62.jpeg",
  },
  {
    id: 63, // Вернуться в бункер
    text: "Вы вернулись в бункер и умерли там от голода.",
    reStart,
    image: "images/63.jpeg",
  },
  {
    id: 64, // Go inside the store
    text: "You did the right thing by daring to go inside the store, because there was nothing terrible there. There was a plump puppy that was running around looking for food. It was he who made the noise when he dropped cardboard promotional materials, running next to the trading shelves. You found packs of walkie-talkies, as well as a few other useful things like dynamos and portable solar panels that would be a nice addition to what you already had. You also grabbed a fat, furry puppy under your arm, which was already licking your cheek and ear. Your daughter in the back seat of the car was very happy about the replenishment, as puppies and kittens were not allowed to her even before the apocalypse. But now everything was possible! And when it came to a dog that could bark at strangers if trained, it worked out great! In general, everyone was happy, so we could move on. Fortunately, we managed to contact the military base through the radio, get permission from them to arrive, and also find out the coordinates with advice on the route. When you started to drive away from the store, you realized that zombies began to run towards you from all sides. What will you do? Will you go ahead, knocking down zombies, or will you wait until they peacefully disperse to their homes?",
    options: [
      {
        text: "Die",
        nextText: 66,
      },
      {
        text: "Go ahead",
        nextText: 68,
      },
    ],
    image: "images/64.jpeg",
  },
  {
    id: 65, // Зайти внутрь магазина
    text: "Ты правильно сделал, что отважился зайти внутрь магазина, так как там ничего страшного не было. Там был толстенький щенок, который бегал в поисках еды. Именно он и создавал шум, когда ронял картонные рекламные материалы, бегая рядом с торговыми полками. Ты нашел упаковки с рациями, а также еще несколько полезных вещей, типа динамо-машины и переносные солнечных панелей, которые были бы хорошим дополнением к тому, что у вас уже было. Также ты прихватил под мышку толстого мохнатого щенка, который уже лизал твою щеку и ухо. Твоя дочка на заднем сиденье автомобиля была очень рада пополнению, так как щенков и котят ей не позволяли даже до апокалипсиса. Но теперь можно было все! А когда это касалось собаки, которая могла бы гавкать на незнакомцев, если ее надрессировать, то вообще получалось превосходно! В общем, все были счастливы, поэтому можно было двигаться дальше. К счастью, через рацию удалось связаться с военной базой, получить от них разрешение на прибытие, а также узнать координаты с советами по маршруту. Когда вы начали отъезжать от магазина, то поняли, что со всех сторон к вам стали сбегаться зомби. Что ты будешь делать? Поедешь напролом, сбивая зомби, либо же подождешь, когда они мирно разойдутся по домам?",
    options: [
      {
        text: "Умереть",
        nextText: 67,
      },
      {
        text: "Ехать напролом",
        nextText: 69,
      },
    ],
    image: "images/65.jpeg",
  },
  {
    id: 66, // Die
    text: "You are dead.",
    reStart,
    image: "images/66.jpeg",
  },
  {
    id: 67, // Умереть
    text: "Вы умерли.",
    reStart,
    image: "images/67.jpeg",
  },
  {
    id: 68, // Go ahead
    text: "When you fought your way through the zombie horde, you ran off into the distance. The road was relatively long, but you periodically contacted the military base via radio and received updates on turns and other things. Some roads became impassable due to a huge accumulation of cars. When it all started a few days ago, people tried to escape by driving out of the cities. However, one zombie was enough to start a chain reaction of infection, as it bit one person, who turned into a zombie and began biting others. In general, many people had no chance. Such places now needed to be bypassed, as they were now impassable, but as you understand, not only because of the accumulation of abandoned cars. When there were only 10 kilometers left to the military base, you tried one last time to contact the military, who had already become your friend. But what horror you experienced when during the final session, you received a response from the military that zombies had entered the camp and that this radioman was already infected. He was bitten during one of the fights with the zombies. There was very little time left before he turned into a zombie, so the military said goodbye and wished you good luck. In the background, screams and gunfire could be heard. It was clear that the last battle was going on, but whoever won, you could no longer take any risks. What will you choose?! To stay right here, set up a tent and spend the night, or return to the bunker?",
    options: [
      {
        text: "Return to the bunker",
        nextText: 62,
      },
      {
        text: "Spend the night in a tent",
        nextText: 72,
      },
    ],
    image: "images/68.jpeg",
  },
  {
    id: 69, // Ехать напролом
    text: "Когда вы пробились через толпу зомби, то умчались вдаль. Дорога была относительно долгая, но периодически вы связывались по рации с военной базой и получали апдейты по поворотам и прочему. Некоторые дороги стали непроходимы из-за огромного скопления автомобилей. Когда все началось несколько дней назад, то люди пытались спастись, уезжая на машинах из городов. Однако ж, одного зомби хватало, чтобы начать цепную реакцию заражения, ведь он кусал одного, а тот обращался в зомби и начинал кусать других. В общем, у многих не было шансов. Такие места теперь нужно было объезжать, так как там теперь было не проехать, но как вы понимаете, не только из-за скопления брошенных машин. Когда до военной базы оставалось всего 10 километров, ты попытался последний раз выйти на связь с военным, который уже стал твоим другом, но каков же был твой ужас, так как во время финального сеансы ты получил ответ от военного, что в лагерь попали зомби и что этот радист уже заражен. Его укусили во время одной из драк с зомби. Оставалось очень мало времени до обращения в зомби, потому военный попращался и пожелал удачи. На заднем плане там были слышны крики и шум выстрелов. Было понятно, что идет последний бой, но в кто бы там не победил, тебе уже нельзя было рисковать. Что же тебе выбрать?! Пока что остаться прямо тут, поставить палатку и переночевать, либо же вернуться обратно в бункер?",
    options: [
      {
        text: "Вернуться в бункер",
        nextText: 63,
      },
      {
        text: "Переночевать в палатке",
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
    image: "images/100.jpeg",
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
    image: "images/101.jpeg",
  },
];

startGame();
