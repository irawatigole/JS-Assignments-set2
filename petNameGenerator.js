// Write a function, petNameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as that person's pet name! If the 3rd letter is a vowel, return the first 4 letters.

function petNameGenerator(a) {
    if (a.length==0) {
        return 'invalid input'
    }
  
if(a.charAt(2) =='a' || a.charAt(2) =='e' || a.charAt(2) =='i' || a.charAt(2) == 'o' || a.charAt(2) == 'u'){
 return (a.slice(0,4));
 } else {
         return(a.slice(0,3));
   }
}
console.log(petNameGenerator('Sachin'));
console.log(petNameGenerator('Elon'));
console.log(petNameGenerator(''));