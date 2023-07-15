"use strict";

const darkModeToggle = document.getElementById("switch");

function toggleDarkMode() {
  const body = document.body;
  const otherElements = document.querySelectorAll(
    ".heading-container, .heading, .dark-mode-text, .grid-item, .ov-grid-item"
  );

  if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
    otherElements.forEach((element) => element.classList.add("dark-mode"));
  } else {
    body.classList.remove("dark-mode");
    otherElements.forEach((element) => element.classList.remove("dark-mode"));
  }
}

darkModeToggle.addEventListener("change", toggleDarkMode);
