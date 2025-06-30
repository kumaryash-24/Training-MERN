function startsWithHello(str) {
  let pattern = /^Hello/; 
//  for case sensitive we will use  let pattern = /^hello/i; 
  return pattern.test(str);
}
console.log(startsWithHello("Hello world"));   
console.log(startsWithHello("Hi Hello there")); 
console.log(startsWithHello("Hello123"));
  




    
