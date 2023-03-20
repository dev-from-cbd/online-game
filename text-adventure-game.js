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
    id: 1, // Start (id:1)
    text: "Hi! You must choose the language of the game. (Первый блок)",
    options: [
      {
        text: "🇦🇺 English Version (Текст кнопки №1)",
        nextText: 2,
      },
      {
        text: "🇷🇺 Русская версия (Текст кнопки №2)",
        nextText: 3,
      },
    ],
  },
  {
    id: 2, // 🇦🇺 English Version (id:2)
    text: "🇦🇺 You must choose the location where you were when the Apocalypse began. (2-й блок)",
    options: [
      {
        text: "Office (Текст кнопки №3)",
        nextText: 4,
      },
      {
        text: "Your home (Текст кнопки №4)",
        nextText: 60,
      },
    ],
  },
  {
    id: 3, // 🇷🇺 Русская версия (id:3)
    text: "🇷🇺 Выбери локацию, где тебя застал Апокалипсис. (3-й блок)",
    options: [
      {
        text: "Рабочий офис (Текст кнопки №5)",
        nextText: 5,
      },
      {
        text: "Твой дом (Текст кнопки №6)",
        nextText: 70,
      },
    ],
  },
  {
    id: 4, // Office (id:4)
    text: "🇦🇺 You heard a noise outside the window and decided to see what was happening there. Horrified, you discovered that a zombie attack on living people had begun there! What will you do? Will you run to find out if your friends are among the crowd of zombies, or will you decide to escape by trying to find a safe path?! (4-й блок)",
    options: [
      {
        text: "Run to find friends among the zombies (Текст кнопки №7)",
        nextText: 6,
      },
      {
        text: "You decide to save yourself (Текст кнопки №8)",
        nextText: 8,
      },
    ],
  },
  {
    id: 5, // Офис (id:5)
    text: "🇷🇺 Ты услышал за окном шум и решил поглядеть, что там творится. В ужасе ты обнаружил, что там началась атака зомби на живых людей! Что ты будешь делать? Побежишь выяснять, нет ли твоих друзей среди толпы зомби, либо же решишь спасаться, попробовав найти безопасный путь?! (5-й блок)",
    options: [
      {
        text: "Бежать искать друзей среди зомби (Текст кнопки №9)",
        nextText: 7,
      },
      {
        text: "Решишь спастись (Текст кнопки №10)",
        nextText: 9,
      },
    ],
  },
  {
    id: 6, // Run to find friends (id:6)
    text: "🇦🇺 You've been eaten by zombies!! (6-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №11)",
        nextText: -1,
      },
    ],
  },
  {
    id: 7, // Бежать искать друзей (id:7)
    text: "🇷🇺 Тебя съели зомби!! 7-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №12)",
        nextText: -1,
      },
    ],
  },
  {
    id: 8, // You decide to save (id:8)
    text: "🇦🇺 You decided to go home because your relatives are there. To protect them and save yourself, you start to think through the details. You tried to call home, but the cellular connection began to act up. Which way home to choose? Go on foot through the city blocks, or take the subway and then take the train from the station, because you live in the suburbs?! (8-й блок)",
    options: [
      {
        text: "Walk straight through the streets (Текст кнопки №13)",
        nextText: 10,
      },
      {
        text: "You decide to save yourself (Текст кнопки №14)",
        nextText: 12,
      },
    ],
  },
  {
    id: 9, // Решишь спастись (id:9)
    text: "🇷🇺 Ты решил направиться домой, так как там родные. Чтобы защитить их и спастись самому, ты начинаешь продумывать детали. Ты попробовал позвонить домой, но сотовая связь стала барахлить. Какой путь домой выбрать? Пойти пешком через городские кварталы, либо же поехать на метро и потом с вокзала на электричке, ведь ты живешь в пригороде?! (9-й блок)",
    options: [
      {
        text: "Пойти пешком прямо по улицам (Текст кнопки №15)",
        nextText: 11,
      },
      {
        text: "Поехать на метро (Текст кнопки №16)",
        nextText: 13,
      },
    ],
  },
  {
    id: 10, // Walk on the streets (id:10)
    text: "🇦🇺 You've been eaten by zombies!! (10-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №17)",
        nextText: -1,
      },
    ],
  },
  {
    id: 11, // Пойти пешком прямо по улицам (id:11)
    text: "🇷🇺 Тебя съели зомби!! 11-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №18)",
        nextText: -1,
      },
    ],
  },
  {
    id: 12,
    text: "🇦🇺 ... (12-й блок)",
    options: [
      {
        text: "Walk straight through the streets (Текст кнопки №19)",
        nextText: 10,
      },
      {
        text: "You decide to save yourself (Текст кнопки №20)",
        nextText: 12,
      },
    ],
  },
  {
    id: 24,
    text: "You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep. Вы так устали, что засыпаете, исследуя замок, и во сне вас убивает какой-то ужасный монстр. (24-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №21)",
        nextText: -1,
      },
    ],
  },

  {
    id: 25,
    text: "Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell. Не имея денег на покупку комнаты, вы вламываетесь в ближайшую гостиницу и засыпаете. После нескольких часов сна хозяин гостиницы находит вас и приказывает городской страже запереть в камере. (5-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №22)",
        nextText: -1,
      },
    ],
  },
  {
    id: 26,
    text: "You wake up well rested and full of energy ready to explore the nearby castle. Вы просыпаетесь хорошо отдохнувшими и полными энергии, готовыми исследовать близлежащий замок. (6-й блок)",
    options: [
      {
        text: "Explore the castle. Исследуйте замок. (Текст кнопки №23)",
        nextText: 7,
      },
    ],
  },
  {
    id: 27,
    text: "While exploring the castle you come across a horrible monster in your path. Исследуя замок, вы встречаете на своем пути ужасного монстра. (7-й блок)",
    options: [
      {
        text: "Try to run. Попробуйте убежать. (Текст кнопки №24)",
        nextText: 8,
      },
      {
        text: "Attack it with your sword. Атакуйте его своим мечом. (Текст кнопки №13)",
        requiredState: (currentState) => currentState.sword,
        nextText: 9,
      },
      {
        text: "Hide behind your shield. Спрячьтесь за своим щитом. (Текст кнопки №14)",
        requiredState: (currentState) => currentState.shield,
        nextText: 10,
      },
      {
        text: "Throw the blue goo at it. Бросьте в него синюю слизь. (Текст кнопки №15)",
        requiredState: (currentState) => currentState.englishVersion,
        nextText: 11,
      },
    ],
  },
  {
    id: 28,
    text: "Your attempts to run are in vain and the monster easily catches. Ваши попытки бежать тщетны, и монстр легко догоняет. (8-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №16)",
        nextText: -1,
      },
    ],
  },
  {
    id: 29,
    text: "You foolishly thought this monster could be slain with a single sword. Вы по глупости думали, что этого монстра можно убить одним мечом. (9-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №17)",
        nextText: -1,
      },
    ],
  },
  {
    id: 30,
    text: "The monster laughed as you hide behind your shield and ate you. Монстр засмеялся, когда ты спрятался за своим щитом и съел тебя. (10-й блок)",
    options: [
      {
        text: "Restart (Текст кнопки №18)",
        nextText: -1,
      },
    ],
  },
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
];

startGame();
