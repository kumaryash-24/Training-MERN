function isAnagram(str1, str2) {
  let a = str1.toLowerCase().split("").sort().join("");
  let b = str2.toLowerCase().split("").sort().join("");

  return a === b;
}
console.log(isAnagram("listen", "silent"));  
console.log(isAnagram("hello", "world")); 

