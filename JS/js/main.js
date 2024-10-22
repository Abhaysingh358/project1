// // Declaration
console.log("hello");
// var a;
// console.log(a);
// // initialization
// var b= 4;
// var b = 5;
// // difference between var , let and const


// // let s= 1;
// //  let a =2;  not allowed the same  variable to another value it is invalid but we can do it in "var"
//  console.log(b);
// const c= 'g'; // now it is constant it caan't be changed
// // console.log(Math,floor(Math.random())*10);

// console.log(Math.ceil(Math.random()*10));
// // console.log(Math.round(Math.random()*(end-start))+start);  
// // random number in range 14 to 8
// console.log(Math.round(Math.random()*(14-8))+8);





// // // Array --> Data structures
// // const arr = [1 , 2,3 , "hii" , true , ["hii2" , false]];

// // console.log(arr[0]); // access val at particular index
// // console.log(arr);

// // const delVal  = arr.pop();
// // console.log(delVal); //delete last val from array

// // console.log(arr);
// // arr.push(delVal);

// // console.log(arr);



// // To push element at oth index
// arr.unshift("This is pushed");
// console.log(arr);

// const fisrtVal = arr.shift();

// // splice tells that how many elemnts you have to delete or push , delete element at a particular index
// // arr.splice(3,1);
// arr.splice(1,3);
// console.log(arr);

//  arr.splice(1,0,"2")
// arr.splice(1,0,"2","3",4,false);
//  console.log(arr);

// distructive methods -- changes in original objects or in variable by using any methods called destructive methods . we did above all destructive methods which change the original variable value


// array lec 3 :Non-destructive methods ---> don't change tthe original variable and returns a new updated value.
const a = [1,2,3,4,5,6,7,8,9,10,11]
const newArr = a.slice(2,7);
console.log(a);
console.log(newArr);

const isExist = a.includes(17);
console.log(isExist);

const strOfA = a.join("/")
console.log(strOfA);

const str  = "this is a string";
let arrOfstr = str.split(" ");
console.log(arrOfstr);

const reverseA = a.reverse();
console.log(reverseA);

const sorted = a.sort();
console.log(sorted);



