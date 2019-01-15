// Write the function (iPush) which is a replica of the behavior of JavaScript's array push method. 

// iPush should accept the array to operate on as an argument and return the same array with the added element.

// iPush will receive two arguments: the array, and a single value to the added to the end of the array.

// Do not use the built in  push() method in your function!


var a=[];
function iPush (a,b){
    if (b=0) {
    return a;
    }
 
a[a.length] = b;
return a;
if (b=''){
    return [a.length];
}
}
console.log(iPush([1,2,3],4));
console.log(iPush([],4));
console.log(iPush([1,2,3],));