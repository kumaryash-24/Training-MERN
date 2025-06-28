function isValidPassword(password) {
  let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
  return pattern.test(password);
}
console.log(isValidPassword("Hello123"));  
console.log(isValidPassword("hello"));      
console.log(isValidPassword("HELLO"));      
console.log(isValidPassword("123456"));     
