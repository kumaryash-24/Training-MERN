function isValidPostalCode(code) {
  let pattern = /^\d{5}$/;
  return pattern.test(code);
}
console.log(isValidPostalCode("12345"));  
console.log(isValidPostalCode("1234"));   
console.log(isValidPostalCode("123456"));
console.log(isValidPostalCode("12a45"));

