import BG_THREAD from "./Worker.js?worker";
const button = document.querySelector(".button");
const h1 = document.querySelector("h1");
const button1 = document.querySelector(".button1");
const bg = new BG_THREAD();
bg.onmessage = (event) => {
  if (event.data.type === "doHeavyTask2" || event.data.type === "doHeavyTask") {
    h1.textContent = event.data.result;
  }
};

button.onclick = () => {
  bg.postMessage({
    type: "doHeavyTask2",
    iterations: 5e3,
  });
};
button1.onclick = () => {
  bg.postMessage({
    type: "doHeavyTask",
    iterations: 5e7,
  });
};
