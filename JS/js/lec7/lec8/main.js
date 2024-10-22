 //  Hoisting -- working of js behind(in v8 engine)
// let a = 10;

// let ans = fun();

// console.log(ans);

// function fun(){
//     let a = 15;
//     console.log(a);
//     return "hii";
// }

let a = 10;
let b;
let ans = fun(a,b)
b= 20;
function fun(a,b){
    let sum = a+b;
    return sum;
}