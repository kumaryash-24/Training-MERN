function isValidDateFormat(dateStr) {
  let pattern = /^\d{2}-\d{2}-\d{4}$/;
  return pattern.test(dateStr);
}
console.log(isValidDateFormat("25-06-2025"));
console.log(isValidDateFormat("5-6-2025"));   
