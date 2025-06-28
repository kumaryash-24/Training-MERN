function endsWithCom(str) {
  let pattern = /\.com$/;
  return pattern.test(str);
}
console.log(endsWithCom("google.com"));      
console.log(endsWithCom("example.org"));    
console.log(endsWithCom("mywebsite.COM"));
