const pi = 3.14;

const calcTriangle = () => {
  let base = prompt("Enter The Value of Base");
  let height = prompt("Enter The Value of Height");
  document.getElementById("result").innerHTML =
    "Area of Triangle is: " + 0.5 * base * height;
};
const calcCircle = () => {
  let radius = prompt("Enter The Value of radius");

  document.getElementById("result").innerHTML =
    "Area of Circle is: " + pi * radius * radius;
};
const calcRectangle = () => {
  let length = prompt("Enter The Value of length");
  let breadth = prompt("Enter The Value of breadth");
  document.getElementById("result").innerHTML =
    "Area of Rectangle is: " + length * breadth;
};
