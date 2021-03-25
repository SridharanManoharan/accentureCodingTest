let arr = [1, 2, 3, 4];

//Print the elements of arr in the console
console.log(arr.toString());

let arr2 = arr.map((elem) => elem * 2);
//Create a new array arr2 with the values of arr doubled i.e [2,4,6,8]
console.log(arr2.toString());

let arr3 = arr.filter((elem) => elem % 2 === 0);
//Create a new array arr3 containing only values from arr which are even i.e. [2,4]
console.log(arr3.toString());
