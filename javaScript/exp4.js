const match1 = () => {
  let str1 = prompt("Enter The First String : ");
  let str2 = prompt("Enter The Second String: ");
  if (str1 === str2) {
    document.getElementById("res").innerHTML = "They Are Equal";
  } else {
    document.getElementById("res").innerHTML = "They Are NOT Equal";
  }
};

const match2 = () => {
  let str1 = prompt("Enter The First String : ");
  let str2 = prompt("Enter The Second String: ");
  let is = str1.match(str2);
  if (is) {
    document.getElementById("res").innerHTML = "They Are Equal";
  } else {
    document.getElementById("res").innerHTML = "They Are NOT Equal";
  }
};

const match3 = () => {
  let str1 = prompt("Enter The First String : ");
  let str2 = prompt("Enter The Second String: ");
  let is = str1.match(str2);
  if (is) {
    document.getElementById("res").innerHTML = "They Are Equal";
  } else {
    document.getElementById("res").innerHTML = "They Are NOT Equal";
  }
  console.log(is);
};

const match4 = () => {
  let str1 = prompt("Enter The First String : ");
  let str2 = prompt("Enter The Second String: ");
  let is = str1.localeCompare(str2);
  if (is === 0) {
    document.getElementById("res").innerHTML = "They Are Equal";
  } else {
    document.getElementById("res").innerHTML = "They Are NOT Equal";
  }
};
