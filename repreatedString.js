const string = 'aba'
//expected output of first 10 to be 7


function repeatedString(s, n) {
    if(s=='a'){
        return n;
    }
    let currentIndex=0;
    let letters=0;
    let array = s.split('')
    for(let i=0; i < n; i ++){

       
        if(currentIndex==array.length){
            currentIndex=0;
        }
        if(array[currentIndex]=='a'){
            letters++;
        }
        currentIndex++;
    }
    return letters;

}

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

console.log(repeatedString(string,10))