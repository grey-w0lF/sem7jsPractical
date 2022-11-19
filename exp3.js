let str = prompt("Enter The String");

function reverseStr(str) {
  var revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
  }
  return revStr;
}
let result = reverseStr(str);
console.log(result);

if (result === str) {
  console.log("Yes it is Palinfrome");
} else {
  console.log("Not An Palindrome String");
}

let res = str.replace("o", "-");
console.log(res);
let element = (document.getElementById("palindrome").innerHTML = result);
