let num = prompt("Enter The Number");
let div = document.getElementById("result");
for (let i = 1; i <= 10; i++) {
  const node = document.createElement("p");
  node.innerHTML = `${num} * ${i} = ${num * i}`;
  div.appendChild(node);
}
