import BG_THREAD from "./Worker.js?worker";
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const bg = new BG_THREAD();
bg.onmessage = (event) => {
  if (event.data.type === "doHeavyTask2") {
    h1.textContent = event.data.result;
  }
};
button.onclick = () => {
  bg.postMessage({
    type: "doHeavyTask2",
    interations: 5e1,
  });
};
