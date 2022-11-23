const getTable = () => {
  let num = prompt("Enter The Number: ");
  let resDiv = document.getElementById("res");
  for (let i = 1; i <= 10; i++) {
    const para = document.createElement("P");
    let temp = (resDiv.appendChild(para).innerHTML = `${num} * ${i} = ${
      num * i
    }`);
  }
};
