function customMap(arr, func) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }

  return newArr;
}

console.log(customMap([1, 2, 3], function(x) {
  return x * 2;
}));
