"use strict";

//////////////////////////
// Challenge modal

function losujChallenge(): string {
  const challenges: string[] = [
    "10 podciągnięć na gumie",
    "2 podciągnięcia na drążku",
    "3 razy wiszenie na drążku po minutę",
    "3 razy po 20 brazylijskich przysiadów",
    "2 razy deska po minutę",
  ];

  const randomIndex: number = Math.floor(Math.random() * challenges.length);
  const selectedChallenge: string = challenges[randomIndex];
  return selectedChallenge;
}

function challengeModal(): void {
  openModal();
}

function openModal(): void {
  const selectedChallenge: string = losujChallenge();
  const challengeTextElement: HTMLElement | null =
    document.getElementById("challengeText");
  if (challengeTextElement) {
    challengeTextElement.textContent = selectedChallenge;
  }

  const modalElement: HTMLElement | null = document.getElementById("modal");
  if (modalElement) {
    modalElement.style.display = "block";
  }
}

function closeModal(): void {
  const modalElement: HTMLElement | null = document.getElementById("modal");
  if (modalElement) {
    modalElement.style.display = "none";
  }
}

//////////////////////////
//To do list
const inputBox: HTMLInputElement | null = document.getElementById(
  "input-box"
) as HTMLInputElement | null;
const listContainer: HTMLElement | null =
  document.getElementById("list-container");

function addTask(): void {
  if (inputBox && inputBox.value === "") {
    alert("Zostawiłeś puste pole!");
  } else if (inputBox) {
    let li: HTMLLIElement = document.createElement("li");
    li.innerHTML = inputBox.value;
    if (listContainer) {
      listContainer.appendChild(li);
    }
    let span: HTMLSpanElement = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  if (inputBox) {
    inputBox.value = "";
  }
}

if (listContainer) {
  listContainer.addEventListener(
    "click",
    function (e: MouseEvent) {
      if (e.target instanceof HTMLLIElement) {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target instanceof HTMLSpanElement) {
        if (e.target.parentElement) {
          e.target.parentElement.remove();
        }
        saveData();
      }
    },
    false
  );
}

function saveData(): void {
  if (listContainer) {
    localStorage.setItem("data", listContainer.innerHTML);
  }
}

function showTasks(): void {
  if (listContainer) {
    listContainer.innerHTML = localStorage.getItem("data") || "";
  }
}

showTasks();
