/*function doubleIt (num){
   return num*2;
}
const doubleIt = function myfunc (num){
   return num*2
 }

const doubleIt = num => num*2;
const add = (x , y) => x + y;
const give5 = () => 50;
const result2 = give5();

 const result = add (50, 70);
console.log(result2);*/

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result3 = doMath(20, 5);
console.log(result3);
