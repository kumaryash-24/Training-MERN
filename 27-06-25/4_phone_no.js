function isValidIndianMobile(number) {
  let pattern = /^[6-9]\d{9}$/;
  return pattern.test(number);
}
console.log(isValidIndianMobile("9876543210")); 
console.log(isValidIndianMobile("1234567890"));
console.log(isValidIndianMobile("987654321")); 
console.log(isValidIndianMobile("98765432101")); 


