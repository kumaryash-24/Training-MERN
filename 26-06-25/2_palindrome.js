function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("yash"));  
console.log(isPalindrome("nitin sir"));
