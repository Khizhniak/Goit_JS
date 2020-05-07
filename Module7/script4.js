const refs = {
  counter: document.querySelector("#counter"),
  value: document.querySelector("#value")
};

let counterValue = 0;

const increment = (e) => {
  e.preventDefault()
  counterValue -= 1;
  refs.value.textContent = `${counterValue}`;
};

const decrement = (e) => {
  e.preventDefault()
  counterValue += 1;
  refs.value.textContent = `${counterValue}`;
};

refs.counter.firstElementChild.addEventListener(
  "click",
  increment
);
refs.counter.lastElementChild.addEventListener(
  "click",
  decrement
);