
// Write a function that accepts and array of numbers and returns and array of arrays. The first array in the return array should include all the even numbers from the argument array. The second array in the return array should include all odd numbers.

  function evenOdd(a){
      let even =[], odd=[], result=[];
      for(let i=0; i<a.length; i++){
          if (a[i] % 2 ==  0){
              even.push(a[i])
          } else {
              odd.push(a[i])
          }
      }
      result.push(even, odd)
      return result;
  }

  console.log(evenOdd([1,2,3,4,5,6]));
  console.log(evenOdd([1,3,5,7]));
  console.log(evenOdd([2,4,6,8]));
