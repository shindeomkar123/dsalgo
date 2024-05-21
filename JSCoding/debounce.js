// function onChange() {
//   const input = document.getElementById("debounce");
//   console.log(input.value);
// }

function debounce(fn, timeout = 3000) {
  return (...args) => {
    clearTimeout(timer);
    var timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
}

function saveInput() {
  const input = document.getElementById("debounce");
  console.log(input.value);
}

const onChange = debounce(() => saveInput());
