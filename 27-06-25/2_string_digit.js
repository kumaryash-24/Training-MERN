function isOnlyDigits(str) {
  let pattern = /^\d+$/;
  return pattern.test(str);
}
console.log(isOnlyDigits("12345"));   
console.log(isOnlyDigits("123a5"));    
