let base = prompt("Enter Base");
let height = prompt("Enter Height");

function getTriangleArea(base, height) {
  return 0.5 * base * height;
}

result = getTriangleArea(base, height);
let element = (document.getElementById("result").innerHTML = result);
console.log(element);
