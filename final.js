/* ----------------------------------- */
/*                                     */
/*  This JavaScript Code developed     */
/*  by Oleg Gribanov & ChatGPT :: 2023 */
/*                                     */
/* ----------------------------------- */

let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = "stick";
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goStore() {
  button1.innerText = "butt1";
  button2.innerText = "butt2";
  button3.innerText = "butt3";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = "text inner";
}

function goCave() {
  console.log("go to the cave");
}

function fightDragon() {
  console.log("fight the Dragon");
}

function buyHealth() {
  console.log("buy some Health");
}

function buyWeapon() {
  console.log("buy some Weapon");
}

function goTown() {
  console.log("go Town");
}
