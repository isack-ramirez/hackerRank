const string = "aba";
//expected output of first 10 to be 7

function repeatedString(s, n) {
  let array1 = s.split("");
  let letters2= 0;
  let letters1 = 0;
  for(let i = 0 ; i < array1.length; i++){
     
    if(array1[i]=='a'){
        letters1++;
    }
  }
  console.log(n % array1.length)
  let array2 = array1.slice(0,(n % array1.length));
  console.log(array2)

  for(let i = 0 ; i < array2.length; i++){
    if(array2[i]=='a'){
        letters2++;
    }
  }


  return ((letters1 * Math.floor(n / array1.length))+ letters2);
}

// if(s=='a'){
//     return n;
// }
// let currentIndex=0;
// let letters=0;
// let array = s.split('')
// for(let i=0; i < n; i ++){

//     if(currentIndex==array.length){
//         currentIndex=0;
//     }
//     if(array[currentIndex]=='a'){
//         letters++;
//     }
//     currentIndex++;
// }
// return letters;

// if(s=='a'){
//     return n;
// }
// let letters=0;
// let repeated=[0];
// const converted= s.split('')
// const repeats = (Math.ceil(n/converted.length));
// for(let i = 0; i < repeats; i++){
//     repeated.push(...converted);
// }
// console.log(repeated);
// let final = repeated.slice(0,n+1)

// final.forEach((letter =>{

//     if(letter=='a'){
//         letters++;
//     }

// }))
// return letters;

console.log(repeatedString(string, 10));
