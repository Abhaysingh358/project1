// let arr = [1,2,3,4,5,6,7,8];
// const square = (x)=>{
//     return x*x;
// }

// function MapOverview(arr,cb){
//     let ans =[];
//     for(let ele of arr){
//         ans.push(cb(ele));
//     }
//     return ans;
// }


// let squareArr = MapOverview(arr,square);
// let sqArr = arr.map(squarer);
// console.log(sqArr);
// let cubeArr=arr.map((ele)=>{
//     return ele**3;
// })
// console.log(cubeArr);


// // Filter ->returns a new filtered array

// function helper(x){
//     return x%2;
// }

// function filteroverview(arr,cb){
//     let ans = [];
//     for(let ele of arr){
//         if(cb(ele)){
//             ans.push(ele);
//         }
//     }
//     return ans;
// }
// console.log(filteroverview(arr,helper));


// let oddArr = arr.filter((ele)=>{
//     return ele%2;
// })

// let evenArr = arr.filter((ele)=>{
//     return !ele%2;
// })

// arr = [1,2,3,4,5,6,7,8]

// let total = arr.reduce((ele , accum)=>{
//     return accum+ele
// },0)


let cart = [
    {name:"apple", price:10,quantity:2},
    {name:"banana", price:5,quantity:3},
    {name:"orange", price:7,quantity:1}
];

let carttotal = cart.reduce((accum , product)=>{
    return accum + (product.price * product.quantity);
},0)

console.log(carttotal);

let product = cart.find((ele)=>{
    return ele.name === "apple"
}
)
console.log(product);

// increasing order decreasing order

cart = [
    {name:"apple", price:10,quantity:2},
    {name:"banana", price:5,quantity:3},
    {name:"orange", price:7,quantity:1}
];


let decorder = cart.sort((a,b)=>{
    return b.price - a.price;
})

let incorder = cart.sort((a,b)=>{
    return a.price - b.price;
})
