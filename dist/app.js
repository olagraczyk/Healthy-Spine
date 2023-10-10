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
        "2 minuty pracy nad oddechem w pochyle",
        "Po 10 wykroków na nogę",
        "Zwiększanie mobilności tułowia poprzez spokojne skręty przez 1 minutę",
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
/////////////////////////
//Motivation playlist showing after clicking on the title picture.
document.addEventListener("DOMContentLoaded", () => {
    const motivationImage = document.querySelector(".titlepicture img");
    //array of playlist links
    const playlistLinks = [
        "https://youtu.be/7BdAKfsjZ6U?si=yT6zTLFaJkGYFgIR",
        "https://www.youtube.com/watch?v=NN1f066QTMU&list=PLTmaZB7buLof_gKcWklWApTfBmpu2YMl_",
        "https://www.youtube.com/watch?v=gGOpElxqlQw",
        "https://www.youtube.com/live/A7ns0sRLXDc?si=ql1s2E62ZWaVp77R",
        "https://www.youtube.com/watch?v=gtdjggvaqsg&list=PLlYKDqBVDxX2m_ZPY2hJbN3EXiDUxuQpk",
        "https://www.youtube.com/watch?v=MoN9ql6Yymw&list=PLVRMW2AX3_4-ya9wfeRPE1IPUfYpwBTmT&index=2",
        "https://www.youtube.com/watch?v=2DiP0mMeaT8&list=RDEMu1xWH1tb60B92F4R9UVNoA&start_radio=1",
        "https://www.youtube.com/watch?v=5Iwy_xeJi7c&list=PLGWRY4CXixYw7vv9YHribRQJUPJCYdjst",
        "https://www.youtube.com/watch?v=K1b8AhIsSYQ&list=RDQMlkTuki6Ox28&start_radio=1",
        "https://www.youtube.com/watch?v=i328ITR9bII",
    ];
    if (motivationImage) {
        motivationImage.addEventListener("click", () => {
            //generate random index to select a random playlist link
            const randomIndexPlaylist = Math.floor(Math.random() * playlistLinks.length);
            //get random playlist link
            const randomPlaylistLink = playlistLinks[randomIndexPlaylist];
            //open the random playlist in a new tab
            window.open(randomPlaylistLink, "_blank");
        });
    }
});
