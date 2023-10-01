"use strict";
//////////////////////////
//challenge modal
function losujChallenge() {
  const challenges = [
    "10 podciągnięć na gumie",
    "2 podciągnięcia na drążku",
    "3 razy wiszenie na drążku po minutę",
    "3 razy po 20 brazylijskich przysiadów",
    "2 razy deska po minutę",
  ];

  const randomIndex = Math.floor(Math.random() * challenges.length);
  const selectedChallenge = challenges[randomIndex];
  return selectedChallenge;
}

function challengeModal() {
  openModal();
}

function openModal() {
  const selectedChallenge = losujChallenge();
  const challengeTextElement = document.getElementById("challengeText");
  if (challengeTextElement) {
    challengeTextElement.textContent = selectedChallenge;
  }

  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

//////////////////////////
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Zostawiłeś puste pole!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  inputBox.value = "";
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();
