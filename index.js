let count = 0;

function increment() {
  count += 1;
  document.getElementById("count").textContent = count;
}

function save() {
  let countstr = count + "-";

  document.getElementById("save-el").textContent += countstr;
  count.textContent = 0;
  count = 0;
}
console.log("lets connect");
