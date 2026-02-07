let step = 0;

const container = document.querySelector(".container");
const textEl = document.getElementById("text");

const texts = [
  "Some comfort was given.",
  "Some comfort was returned.",
  "And somewhere in between,<br>we both felt held."
];

function showText(content) {
  textEl.classList.remove("show");
  setTimeout(() => {
    textEl.innerHTML = content;
    textEl.classList.add("show");
  }, 300);
}

function nextStep() {
  if (step === 0) {
    showText(texts[0]);
    step++;
  } else if (step === 1) {
    container.classList.add("step-1");
    showText(texts[1]);
    step++;
  } else if (step === 2) {
    container.classList.add("step-2");
    showText(texts[2]);
    step++;
  }
}

// initial
showText(texts[0]);
