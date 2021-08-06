import colors from "./colors.js";

const refs = {
  startBtnRef: document.querySelector('[data-action="start"]'),
  stopBtnRef: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};

let timerId = null;

refs.startBtnRef.addEventListener("click", onStartBtnClick);
refs.stopBtnRef.addEventListener("click", onStopBtnClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartBtnClick() {
  runColorSwich();
  // refs.startBtnRef.setAttribute("disabled", true);
  refs.startBtnRef.disabled = true;
}

function onStopBtnClick() {
  stopColorSwich();
  //   refs.startBtnRef.removeAttribute("disabled");
  refs.startBtnRef.disabled = false;
}

function runColorSwich() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}

function stopColorSwich() {
  clearInterval(timerId);
  //   refs.body.style.backgroundColor = null;
}
