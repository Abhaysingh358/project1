// // logical operator
// let b =20;
// let c = "20";

// if(b==c){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// if(b===c){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// let a =10;

// if(a==="10"){
//     console.log(true);
// }
// else{
//     console.log(false);
// }



// if(a=="10" && a==="10" && a==100/10 && 1000/10){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// // when value is  null ,  undefine , 0 if we convert it in boolean we get false value

// if(a=="10" || a==="10" || a==100/10 && a==1000/10){
//     console.log(true);
// }
// else{
//     console.log(false);
// }


// if((a=="10" || a==="10" ) && ( a==100/10 && a==1000/10)){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// // prompt helps to take  immediate input , and we get the answer in string form
// let userAns = prompt("What is your age");
// console.log(typeof(userAns),userAns);


// // how to convert string to in a number
// let str = "1000";
// let numb = parseInt(str);
// console.log(typeof(numb),numb);


// let str1 = "1000s2avhdaj";
// let numb1 = parseInt(str);
// console.log(typeof(numb1),numb1);

// let str2 = "a1000s2avhdaj";
// let numb2 = parseInt(str);
// console.log(typeof(numb2),numb2);


// // number to string
// let d =100;
// let conv = d.toString();
// console.log(conv);

// let dd = d.toFixed(2);
// console.log(dd);
// console.log(typeof(dd));


// ***********************************************************************lab*************************************************************************

// const num = prompt("enetr a number");

// //take the number by prompt
// // Q check a number is +ve or -ve or zero or string
// const result = isNaN(num)? "string" : num<0 ? "-VE" : num>=0? "+VE" : "zero";
// console.log(result);



const arr = [3,"4",5,"6",7,"8",9,10,11,"12"]; 
// Q generate a random number number b/w 3 to 12 and check
// what is type of that nu,ber in array
let r = Math.round(Math.random()*(12-3))+3;
console.log(r);
for(let a of arr){
    (a==r) && console.log(typeof(a));
}



{
    let d = 10;
    var t = 20
}
console.log(t);
// scopes
// 1.global -- a variable define directly in file
// 2.block--- variable 

let e;
console.log(e);

function fun(){
    let d = 10;
    console.log(10);
}


