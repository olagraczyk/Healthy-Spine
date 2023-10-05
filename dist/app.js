"use strict";
//////////////////////////
// Challenge modal
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
    const modalElement = document.getElementById("modal");
    if (modalElement) {
        modalElement.style.display = "block";
    }
}
function closeModal() {
    const modalElement = document.getElementById("modal");
    if (modalElement) {
        modalElement.style.display = "none";
    }
}
//////////////////////////
//To do list
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox && inputBox.value === "") {
        alert("Zostawiłeś puste pole!");
    }
    else if (inputBox) {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        if (listContainer) {
            listContainer.appendChild(li);
        }
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    if (inputBox) {
        inputBox.value = "";
    }
}
if (listContainer) {
    listContainer.addEventListener("click", function (e) {
        if (e.target instanceof HTMLLIElement) {
            e.target.classList.toggle("checked");
            saveData();
        }
        else if (e.target instanceof HTMLSpanElement) {
            if (e.target.parentElement) {
                e.target.parentElement.remove();
            }
            saveData();
        }
    }, false);
}
function saveData() {
    if (listContainer) {
        localStorage.setItem("data", listContainer.innerHTML);
    }
}
function showTasks() {
    if (listContainer) {
        listContainer.innerHTML = localStorage.getItem("data") || "";
    }
}
showTasks();
