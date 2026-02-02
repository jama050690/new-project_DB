self.onmessage = (event) => {
  if (event.data.type === "doHeavyTask2") {
    self.postMessage({
      type: "doHeavyTask2",
      result: doHeavyTask2(event.data.interations),
    });
  }
};
function doHeavyTask(interations) {
  let sum = 0;
  for (let i = 0; i < interations; i++) {
    sum += i;
  }
  return sum;
}
function doHeavyTask2(interations) {
  let sum = 1;
  for (let i = 1; i < interations; i++) {
    sum *= i;
  }
  return sum;
}
