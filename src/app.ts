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

/////////////////////////
//Motivation playlist showing after clicking on the title picture.

document.addEventListener("DOMContentLoaded", () => {
  const motivationImage: HTMLImageElement | null =
    document.querySelector(".titlepicture img");

  //array of playlist links
  const playlistLinks: string[] = [
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
      const randomIndexPlaylist: number = Math.floor(
        Math.random() * playlistLinks.length
      );
      //get random playlist link
      const randomPlaylistLink: string = playlistLinks[randomIndexPlaylist];
      //open the random playlist in a new tab
      window.open(randomPlaylistLink, "_blank");
    });
  }
});
