// object--> Structre to store more related variable
// key :value and key is unique for an object
// Sysntax : {key:value , key:value}
// Access a single key value from object.
// 1.obj.name --> kuchbhi
// 2.obj["studing"]-->true

const obj = {
    name:'kuchbhi',
    age:24,
    studing:false,
    arr:[1,2,3,4,5]
}

// // console.log([1,2,3,4,5,6,7,8]);
// console.log(obj);

// // create new key value in a obj.
// // obj.newkey="This is new keyvalue"
// // obj["newkey"]="This is new key value"
// console.log(obj.age);
// console.log(obj.arr);
// console.log(obj.arr[2]);
// obj["college"] = "GLA"
// // obj.college = "GLA";

// console.log(obj);

// obj.name = "this is changed";
// // console.log(obj);

// ---------------------------------LOOPS----------------------------------
// for loop--->
let arr = [1,2,3,4,5,6,7,8,9];
// let i =0;
// while (i<arr.length){
//     console.log(arr[i])
//     i++;
// }
// [1,2,3,4,5,6,7,8,9]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// "for of" loops 
// [1,2,3,4,5,6,7,8,9]
// for(const item of arr){
//     console.log(item);
// }


// "for in loop"
// for(const item in arr){
//     // typeof(item)
//     console.log(item , "->" , arr[item]);
// }

// for(let key in obj){
//     console.log(key, "->" , obj[key]);
// }

// ---------------------------complex objects and arrays------------------------------------
// #object inside object and more changing. or array inside object and vice-versa.

const complexObj = {
    membership:{
        name:"Mega",
        price:20000,
        devices:[
            {
                deviceName:"Iphone 12",
                ipAddress:"122.68.32.4"
            }
        ]
    }
}

// lec 22 monday 14/10/2024
// ***********operators*************************
// 1.assignment 
// 2.arithmatic (+,-,/,*,<,>,<=,>=)
// 3.logical operators (&,|| )
