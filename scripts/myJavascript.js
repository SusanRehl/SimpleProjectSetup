var prime = [2, 3, 5, 7, 11];    //creates array with first 5 prime numbers

function findPrime(number) {
  for (var i = 0; i< number.length; i++) {
    //console.log(number[i]);
    if(number[i] % 2 === 0) {     //selects  2
      number[i] = 'P';
    } else if(number[i] === 11) {    // selects 11
      number[i] = "E";
    } else if(number[i] === number[3] - number[2] + 1) {  //selects 3
      number[i] = 'R';
    } else if(number[i] === 7) {   //selects 7
      number[i] = 'M';
    } else
      number[i] = 'I';   //assigns I to 5
  }
  console.log(number.join(""));   // joins the elements of the array without commas
}
findPrime(prime);
// console.log(prime);

function clicked() {
  console.log('Button Clicked');
}
