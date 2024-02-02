  let a = 1;
  let b = 2;
  let c = 3;
  
  function onePlusAvg(x, y){ 
    return 1+(x+y)/2;
  }
   
  
  console.log(" one plus average of a and b is ", onePlusAvg(a,b)) //invoking function
  console.log(" one plus average of b and c is ", onePlusAvg(b,c))
  console.log(" one plus average of a and c is ", onePlusAvg(a,c))


  
//Arrow function

let m = 5;
let n = 10;

const sum = (p, q)=>{
    return p + q
}
console.log(" sum is ", sum(m,n))



//mnmjj

const arr = [2,3,4,5,7,8,20,30]

const Tsum = () => {
  return arr.reduce((acc, curr) => {
      return acc + curr
  },0)
};
console.log(Tsum(arr))


// print even number 



let z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenN = () => {
  return z.filter((item) => item%2===0)
}
let t = evenN()
console.log(t)