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
    text: "You must choose the location where you were when the Apocalypse began.",
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
        text: "Run to find friends among the zombies",
        nextText: 6,
      },
      {
        text: "You decide to save yourself",
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
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
    image: "images/6.jpeg",
  },
  {
    id: 7,
    text: "Тебя съели зомби!!",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
    image: "images/7.jpeg",
  },
  {
    id: 8,
    text: "You decided to go home because your relatives are there. To protect them and save yourself, you start to think through the details. You tried to call home, but the cellular connection began to act up. Which way home to choose? Go on foot through the city blocks, or take the subway and then take the train from the station, because you live in the suburbs?!",
    options: [
      {
        text: "Walk straight through the streets",
        nextText: 10,
      },
      {
        text: "You decide to save yourself",
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
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
    image: "images/10.jpeg",
  },
  {
    id: 11,
    text: "Тебя съели зомби!!",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
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
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
    image: "images/14.jpeg",
  },
  {
    id: 15,
    text: "Тебя съел машинист!!",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
    image: "images/15.jpeg",
  },
  {
    id: 16, // 🇦🇺 Run in subway (id:16)
    text: "When the train reached the penultimate station, you realized that the driver was already close. Trains have been running on their own for many years, and drivers were needed simply to control the train. Therefore, the train would have reached the final station, where you need it, but the driver was already approaching your car. What will you choose? Get out of the subway car and walk to the station on foot, or will you start fighting with the driver in the hope of strangling him?!",
    options: [
      {
        text: "Get out of the subway car",
        nextText: 18,
      },
      {
        text: "Choke the driver",
        nextText: 20,
      },
    ],
    image: "images/16.jpeg",
  },
  {
    id: 17, // 🇷🇺 ... (id:17)
    text: "🇷🇺 ... (17-й блок)",
    options: [
      {
        text: "... (Текст кнопки №27)",
        nextText: 19,
      },
      {
        text: "... (Текст кнопки №28)",
        nextText: 21,
      },
    ],
    image: "images/17.jpeg", // Ссылка на 17-ю картинку
  },
  {
    id: 18, // 🇦🇺 Choke the driver (id:18)
    text: "The driver ate you!!",
    options: [
      {
        text: "Restart (Текст кнопки №29)",
        nextText: -1,
      },
    ],
    image: "images/18.jpeg",
  },
  {
    id: 19, // 🇷🇺 ... (id:19)
    text: "🇷🇺 ... (19-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №30)",
        nextText: -1,
      },
    ],
    image: "images/19.jpeg", // Ссылка на 19-ю картинку
  },
  {
    id: 20, // 🇦🇺 ... (id:20)
    text: "🇦🇺 ... (20-й блок)",
    options: [
      {
        text: "... (Текст кнопки №31)",
        nextText: 22,
      },
      {
        text: "... (Текст кнопки №32)",
        nextText: 24,
      },
    ],
    image: "images/20.jpeg", // Ссылка на 20-ю картинку
  },
  {
    id: 21, // 🇷🇺 ... (id:21)
    text: "🇷🇺 ... (21-й блок)",
    options: [
      {
        text: "... (Текст кнопки №33)",
        nextText: 23,
      },
      {
        text: "... (Текст кнопки №34)",
        nextText: 25,
      },
    ],
    image: "21.jpeg", // Ссылка на 21-ю картинку
  },
  {
    id: 22, // 🇦🇺 ... (id:22)
    text: "🇦🇺 ... (22-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №35)",
        nextText: -1,
      },
    ],
    image: "22.jpeg", // Ссылка на 22-ю картинку
  },
  {
    id: 23, // 🇷🇺 ... (id:23)
    text: "🇷🇺 ... (23-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №36)",
        nextText: -1,
      },
    ],
    image: "23.jpeg", // Ссылка на 23-ю картинку
  },
  {
    id: 24, // 🇦🇺 ... (id:24)
    text: "🇦🇺 ... (24-й блок)",
    options: [
      {
        text: "... (Текст кнопки №37)",
        nextText: 26,
      },
      {
        text: "... (Текст кнопки №38)",
        nextText: 28,
      },
    ],
    image: "24.jpeg", // Ссылка на 24-ю картинку
  },
  {
    id: 25, // 🇷🇺 ... (id:25)
    text: "🇷🇺 ... (25-й блок)",
    options: [
      {
        text: "... (Текст кнопки №39)",
        nextText: 27,
      },
      {
        text: "... (Текст кнопки №40)",
        nextText: 29,
      },
    ],
    image: "25.jpeg", // Ссылка на 25-ю картинку
  },
  {
    id: 26, // 🇦🇺 ... (id:26)
    text: "🇦🇺 ... (26-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №41)",
        nextText: -1,
      },
    ],
    image: "26.jpeg", // Ссылка на 26-ю картинку
  },
  {
    id: 27, // 🇷🇺 ... (id:27)
    text: "🇷🇺 ... (27-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №42)",
        nextText: -1,
      },
    ],
    image: "27.jpeg", // Ссылка на 27-ю картинку
  },
  {
    id: 28, // 🇦🇺 ... (id:28)
    text: "🇦🇺 ... (28-й блок)",
    options: [
      {
        text: "... (Текст кнопки №43)",
        nextText: 30,
      },
      {
        text: "... (Текст кнопки №44)",
        nextText: 32,
      },
    ],
    image: "28.jpeg", // Ссылка на 28-ю картинку
  },
  {
    id: 29, // 🇷🇺 ... (id:29)
    text: "🇷🇺 ... (29-й блок)",
    options: [
      {
        text: "... (Текст кнопки №45)",
        nextText: 31,
      },
      {
        text: "... (Текст кнопки №46)",
        nextText: 33,
      },
    ],
    image: "29.jpeg", // Ссылка на 29-ю картинку
  },
  {
    id: 30, // 🇦🇺 ... (id:30)
    text: "🇦🇺 ... (30-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №47)",
        nextText: -1,
      },
    ],
    image: "30.jpeg", // Ссылка на 30-ю картинку
  },
  {
    id: 31, // 🇷🇺 ... (id:31)
    text: "🇷🇺 ... (31-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №48)",
        nextText: -1,
      },
    ],
    image: "31.jpeg", // Ссылка на 31-ю картинку
  },
  {
    id: 32, // 🇦🇺 ... (id:32)
    text: "🇦🇺 ... (32-й блок)",
    options: [
      {
        text: "... (Текст кнопки №49)",
        nextText: 34,
      },
      {
        text: "... (Текст кнопки №50)",
        nextText: 36,
      },
    ],
    image: "32.jpeg", // Ссылка на 32-ю картинку
  },
  {
    id: 33, // 🇷🇺 ... (id:33)
    text: "🇷🇺 ... (33-й блок)",
    options: [
      {
        text: "... (Текст кнопки №51)",
        nextText: 35,
      },
      {
        text: "... (Текст кнопки №52)",
        nextText: 37,
      },
    ],
    image: "33.jpeg", // Ссылка на 33-ю картинку
  },
  {
    id: 34, // 🇦🇺 ... (id:34)
    text: "🇦🇺 ... (34-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №53)",
        nextText: -1,
      },
    ],
    image: "34.jpeg", // Ссылка на 34-ю картинку
  },
  {
    id: 35, // 🇷🇺 ... (id:35)
    text: "🇷🇺 ... (35-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №54)",
        nextText: -1,
      },
    ],
    image: "35.jpeg", // Ссылка на 35-ю картинку
  },
  {
    id: 36, // 🇦🇺 ... (id:36)
    text: "🇦🇺 ... (36-й блок)",
    options: [
      {
        text: "... (Текст кнопки №55)",
        nextText: 38,
      },
      {
        text: "... (Текст кнопки №56)",
        nextText: 40,
      },
    ],
    image: "36.jpeg", // Ссылка на 36-ю картинку
  },
  {
    id: 37, // 🇷🇺 ... (id:37)
    text: "🇷🇺 ... (37-й блок)",
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
    image: "37.jpeg", // Ссылка на 37-ю картинку
  },
  {
    id: 38, // 🇦🇺 ... (id:38)
    text: "🇦🇺 ... (38-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №59)",
        nextText: -1,
      },
    ],
    image: "38.jpeg", // Ссылка на 38-ю картинку
  },
  {
    id: 39, // 🇷🇺 ... (id:39)
    text: "🇷🇺 ... (39-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №60)",
        nextText: -1,
      },
    ],
    image: "39.jpeg", // Ссылка на 39-ю картинку
  },
  {
    id: 40, // 🇦🇺 ... (id:40)
    text: "🇦🇺 ... (40-й блок)",
    options: [
      {
        text: "... (Текст кнопки №61)",
        nextText: 42,
      },
      {
        text: "... (Текст кнопки №62)",
        nextText: 44,
      },
    ],
    image: "40.jpeg", // Ссылка на 40-ю картинку
  },
  {
    id: 41, // 🇷🇺 ... (id:41)
    text: "🇷🇺 ... (41-й блок)",
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
    image: "41.jpeg", // Ссылка на 41-ю картинку
  },
  {
    id: 42, // 🇦🇺 ... (id:42)
    text: "🇦🇺 ... (42-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №65)",
        nextText: -1,
      },
    ],
    image: "42.jpeg", // Ссылка на 42-ю картинку
  },
  {
    id: 43, // 🇷🇺 ... (id:43)
    text: "🇷🇺 ... (43-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №66)",
        nextText: -1,
      },
    ],
    image: "43.jpeg", // Ссылка на 43-ю картинку
  },
  {
    id: 44, // 🇦🇺 ... (id:44)
    text: "🇦🇺 ... (44-й блок)",
    options: [
      {
        text: "... (Текст кнопки №67)",
        nextText: 46,
      },
      {
        text: "... (Текст кнопки №68)",
        nextText: 48,
      },
    ],
    image: "44.jpeg", // Ссылка на 44-ю картинку
  },
  {
    id: 45, // 🇷🇺 ... (id:45)
    text: "🇷🇺 ... (45-й блок)",
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
    image: "45.jpeg", // Ссылка на 45-ю картинку
  },
  {
    id: 46, // 🇦🇺 ... (id:46)
    text: "🇦🇺 ... (46-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №71)",
        nextText: -1,
      },
    ],
    image: "46.jpeg", // Ссылка на 46-ю картинку
  },
  {
    id: 47, // 🇷🇺 ... (id:47)
    text: "🇷🇺 ... (47-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №72)",
        nextText: -1,
      },
    ],
    image: "47.jpeg", // Ссылка на 47-ю картинку
  },
  {
    id: 48, // 🇦🇺 ... (id:48)
    text: "🇦🇺 ... (48-й блок)",
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
    image: "48.jpeg", // Ссылка на 48-ю картинку
  },
  {
    id: 49, // 🇷🇺 ... (id:49)
    text: "🇷🇺 ... (49-й блок)",
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
    image: "49.jpeg", // Ссылка на 49-ю картинку
  },
  {
    id: 50, // 🇦🇺 ... (id:50)
    text: "🇦🇺 ... (50-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №77)",
        nextText: -1,
      },
    ],
    image: "50.jpeg", // Ссылка на 50-ю картинку
  },
  {
    id: 51, // 🇷🇺 ... (id:51)
    text: "🇷🇺 ... (51-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №78)",
        nextText: -1,
      },
    ],
    image: "51.jpeg", // Ссылка на 51-ю картинку
  },
  {
    id: 52, // 🇦🇺 ... (id:52)
    text: "🇦🇺 ... (52-й блок)",
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
    image: "52.jpeg", // Ссылка на 52-ю картинку
  },
  {
    id: 53, // 🇷🇺 ... (id:53)
    text: "🇷🇺 ... (53-й блок)",
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
    image: "53.jpeg", // Ссылка на 53-ю картинку
  },
  {
    id: 54, // 🇦🇺 ... (id:54)
    text: "🇦🇺 ... (54-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №83)",
        nextText: -1,
      },
    ],
    image: "54.jpeg", // Ссылка на 54-ю картинку
  },
  {
    id: 55, // 🇷🇺 ... (id:55)
    text: "🇷🇺 ... (55-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №84)",
        nextText: -1,
      },
    ],
    image: "55.jpeg", // Ссылка на 55-ю картинку
  },
  {
    id: 56, // 🇦🇺 ... (id:56)
    text: "🇦🇺 ... (56-й блок)",
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
    image: "56.jpeg", // Ссылка на 56-ю картинку
  },
  {
    id: 57, // 🇷🇺 ... (id:57)
    text: "🇷🇺 ... (57-й блок)",
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
    image: "57.jpeg", // Ссылка на 57-ю картинку
  },
  {
    id: 58, // 🇦🇺 ... (id:58)
    text: "🇦🇺 ... (58-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №89)",
        nextText: -1,
      },
    ],
    image: "58.jpeg", // Ссылка на 58-ю картинку
  },
  {
    id: 59, // 🇷🇺 ... (id:59)
    text: "🇷🇺 ... (59-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №90)",
        nextText: -1,
      },
    ],
    image: "59.jpeg", // Ссылка на 59-ю картинку
  },
  {
    id: 60, // 🇦🇺 ... (id:60)
    text: "🇦🇺 ... (60-й блок)",
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
    image: "60.jpeg", // Ссылка на 60-ю картинку
  },
  {
    id: 61, // 🇷🇺 ... (id:61)
    text: "🇷🇺 ... (61-й блок)",
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
    image: "61.jpeg", // Ссылка на 61-ю картинку
  },
  {
    id: 62, // 🇦🇺 ... (id:62)
    text: "🇦🇺 ... (62-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №95)",
        nextText: -1,
      },
    ],
    image: "62.jpeg", // Ссылка на 62-ю картинку
  },
  {
    id: 63, // 🇷🇺 ... (id:63)
    text: "🇷🇺 ... (63-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №96)",
        nextText: -1,
      },
    ],
    image: "63.jpeg", // Ссылка на 63-ю картинку
  },
  {
    id: 64, // 🇦🇺 ... (id:64)
    text: "🇦🇺 ... (64-й блок)",
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
    image: "64.jpeg", // Ссылка на 64-ю картинку
  },
  {
    id: 65, // 🇷🇺 ... (id:65)
    text: "🇷🇺 ... (65-й блок)",
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
    image: "65.jpeg", // Ссылка на 65-ю картинку
  },
  {
    id: 66, // 🇦🇺 ... (id:66)
    text: "🇦🇺 ... (66-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №101)",
        nextText: -1,
      },
    ],
    image: "66.jpeg", // Ссылка на 66-ю картинку
  },
  {
    id: 67, // 🇷🇺 ... (id:67)
    text: "🇷🇺 ... (67-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №102)",
        nextText: -1,
      },
    ],
    image: "67.jpeg", // Ссылка на 19-ю картинку
  },
  {
    id: 68, // 🇦🇺 ... (id:68)
    text: "🇦🇺 ... (68-й блок)",
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
    image: "68.jpeg", // Ссылка на 68-ю картинку
  },
  {
    id: 69, // 🇷🇺 ... (id:69)
    text: "🇷🇺 ... (69-й блок)",
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
    image: "69.jpeg", // Ссылка на 69-ю картинку
  },
  {
    id: 70, // 🇦🇺 ... (id:70)
    text: "🇦🇺 ... (70-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №107)",
        nextText: -1,
      },
    ],
    image: "70.jpeg", // Ссылка на 70-ю картинку
  },
  {
    id: 71, // 🇷🇺 ... (id:71)
    text: "🇷🇺 ... (71-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №108)",
        nextText: -1,
      },
    ],
    image: "71.jpeg", // Ссылка на 71-ю картинку
  },
  {
    id: 72, // 🇦🇺 ... (id:72)
    text: "🇦🇺 ... (72-й блок)",
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
    image: "72.jpeg", // Ссылка на 72-ю картинку
  },
  {
    id: 73, // 🇷🇺 ... (id:73)
    text: "🇷🇺 ... (73-й блок)",
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
    image: "73.jpeg", // Ссылка на 73-ю картинку
  },
  {
    id: 74, // 🇦🇺 ... (id:74)
    text: "🇦🇺 ... (74-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №113)",
        nextText: -1,
      },
    ],
    image: "74.jpeg", // Ссылка на 74-ю картинку
  },
  {
    id: 75, // 🇷🇺 ... (id:75)
    text: "🇷🇺 ... (75-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №114)",
        nextText: -1,
      },
    ],
    image: "75.jpeg", // Ссылка на 19-ю картинку
  },
  {
    id: 76, // 🇦🇺 ... (id:76)
    text: "🇦🇺 ... (76-й блок)",
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
    image: "76.jpeg", // Ссылка на 76-ю картинку
  },
  {
    id: 77, // 🇷🇺 ... (id:77)
    text: "🇷🇺 ... (77-й блок)",
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
    image: "77.jpeg", // Ссылка на 77-ю картинку
  },
  {
    id: 78, // 🇦🇺 ... (id:78)
    text: "🇦🇺 ... (78-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №119)",
        nextText: -1,
      },
    ],
    image: "78.jpeg", // Ссылка на 78-ю картинку
  },
  {
    id: 79, // 🇷🇺 ... (id:79)
    text: "🇷🇺 ... (79-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №120)",
        nextText: -1,
      },
    ],
    image: "79.jpeg", // Ссылка на 79-ю картинку
  },
  {
    id: 80, // 🇦🇺 ... (id:80)
    text: "🇦🇺 ... (80-й блок)",
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
    image: "80.jpeg", // Ссылка на 80-ю картинку
  },
  {
    id: 81, // 🇷🇺 ... (id:81)
    text: "🇷🇺 ... (81-й блок)",
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
    image: "81.jpeg", // Ссылка на 81-ю картинку
  },
  {
    id: 82, // 🇦🇺 ... (id:82)
    text: "🇦🇺 ... (82-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №125)",
        nextText: -1,
      },
    ],
    image: "82.jpeg", // Ссылка на 82-ю картинку
  },
  {
    id: 83, // 🇷🇺 ... (id:83)
    text: "🇷🇺 ... (83-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №126)",
        nextText: -1,
      },
    ],
    image: "83.jpeg", // Ссылка на 83-ю картинку
  },
  {
    id: 84, // 🇦🇺 ... (id:84)
    text: "🇦🇺 ... (84-й блок)",
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
    image: "84.jpeg", // Ссылка на 84-ю картинку
  },
  {
    id: 85, // 🇷🇺 ... (id:85)
    text: "🇷🇺 ... (85-й блок)",
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
    image: "85.jpeg", // Ссылка на 85-ю картинку
  },
  {
    id: 86, // 🇦🇺 ... (id:86)
    text: "🇦🇺 ... (86-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №131)",
        nextText: -1,
      },
    ],
    image: "86.jpeg", // Ссылка на 86-ю картинку
  },
  {
    id: 87, // 🇷🇺 ... (id:87)
    text: "🇷🇺 ... (87-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №132)",
        nextText: -1,
      },
    ],
    image: "87.jpeg", // Ссылка на 87-ю картинку
  },
  {
    id: 88, // 🇦🇺 ... (id:88)
    text: "🇦🇺 ... (88-й блок)",
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
    image: "88.jpeg", // Ссылка на 88-ю картинку
  },
  {
    id: 89, // 🇷🇺 ... (id:89)
    text: "🇷🇺 ... (89-й блок)",
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
    image: "89.jpeg", // Ссылка на 89-ю картинку
  },
  {
    id: 90, // 🇦🇺 ... (id:90)
    text: "🇦🇺 ... (90-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №137)",
        nextText: -1,
      },
    ],
    image: "90.jpeg", // Ссылка на 90-ю картинку
  },
  {
    id: 91, // 🇷🇺 ... (id:91)
    text: "🇷🇺 ... (91-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №138)",
        nextText: -1,
      },
    ],
    image: "91.jpeg", // Ссылка на 91-ю картинку
  },
  {
    id: 92, // 🇦🇺 ... (id:92)
    text: "🇦🇺 ... (92-й блок)",
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
    image: "92.jpeg", // Ссылка на 92-ю картинку
  },
  {
    id: 93, // 🇷🇺 ... (id:93)
    text: "🇷🇺 ... (93-й блок)",
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
    image: "93.jpeg", // Ссылка на 93-ю картинку
  },
  {
    id: 94, // 🇦🇺 ... (id:94)
    text: "🇦🇺 ... (94-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №143)",
        nextText: -1,
      },
    ],
    image: "94.jpeg", // Ссылка на 94-ю картинку
  },
  {
    id: 95, // 🇷🇺 ... (id:95)
    text: "🇷🇺 ... (95-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №144)",
        nextText: -1,
      },
    ],
    image: "95.jpeg", // Ссылка на 95-ю картинку
  },
  {
    id: 96, // 🇦🇺 ... (id:96)
    text: "🇦🇺 ... (96-й блок)",
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
    image: "96.jpeg", // Ссылка на 96-ю картинку
  },
  {
    id: 97, // 🇷🇺 ... (id:97)
    text: "🇷🇺 ... (97-й блок)",
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
    image: "97.jpeg", // Ссылка на 97-ю картинку
  },
  {
    id: 98, // 🇦🇺 ... (id:98)
    text: "🇦🇺 ... (98-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №149)",
        nextText: -1,
      },
    ],
    image: "98.jpeg", // Ссылка на 98-ю картинку
  },
  {
    id: 99, // 🇷🇺 ... (id:99)
    text: "🇷🇺 ... (99-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №150)",
        nextText: -1,
      },
    ],
    image: "99.jpeg", // Ссылка на 99-ю картинку
  },

  /*
  {
    id: 31,
    text: "You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there. Вы бросили свою банку слизи в монстра, и он взорвался. Когда пыль осела, вы увидели, что чудовище уничтожено. Увидев свою победу, вы решаете объявить этот замок своим и прожить там остаток своих дней. (11-й блок)",
    options: [
      {
        text: "Congratulations. Play Again. (Текст кнопки №19)",
        nextText: -1,
      },
    ],
  }, 
  */
];

startGame();
