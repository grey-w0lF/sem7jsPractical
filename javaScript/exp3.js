const getReverse = () => {
  let str = prompt("Enter The String : ");
  let tempstr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    tempstr = tempstr + str[i];
  }
  document.getElementById("res").innerHTML = tempstr;
  return tempstr;
};

const getReplaced = () => {
  let str = prompt("Enter The String : ");
  let char = prompt("Enter The Character You Want to replace:  ");
  let repchar = prompt("Enter The character You Want to replace with : ");
  let resStr = str.replaceAll(char, repchar);
  document.getElementById("res").innerHTML = resStr;
};

const getPalindrome = () => {
  let str = prompt("Enter The String : ");

  let tempstr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    tempstr = tempstr + str[i];
  }
  if (str === tempstr) {
    document.getElementById("res").innerHTML = "Yes it is A Palindrome String";
  } else {
    document.getElementById("res").innerHTML = "It is Not a Palindrome String";
  }
};
