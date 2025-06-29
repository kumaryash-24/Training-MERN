function isValidEmail(email) {
  let pattern = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-z]{2,3}$/;
  return pattern.test(email);
}
console.log(isValidEmail("yash123@gmail.com")); 
console.log(isValidEmail("hello@.com"));         
console.log(isValidEmail("noemail.com"));             

   
     
