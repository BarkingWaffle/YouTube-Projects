const input = document.getElementById("input");
const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value;
  const reverse = reverseString(value);
  
  if (value === reverse) {
    alert("P A L I N D R O M E")
  } else {
    alert("N O T")
  }

  input.value = ""
}