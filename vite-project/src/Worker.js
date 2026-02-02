self.onmessage = (event) => {
  if (event.data.type === "doHeavyTask2") {
    self.postMessage({
      type: "doHeavyTask2",
      result: doHeavyTask2(event.data.iterations),
    });
  } else if (event.data.type === "doHeavyTask") {
    self.postMessage({
      type: "doHeavyTask",
      result: doHeavyTask(event.data.iterations),
    });
  }
};
function doHeavyTask(iterations) {
  let sum = 0;
  for (let i = 0; i < iterations; i++) {
    sum += i;
  }
  return sum;
}
function doHeavyTask2(iterations) {
  let sum = 1;
  for (let i = 1; i < iterations; i++) {
    sum *= i;
  }
  return sum;
}
