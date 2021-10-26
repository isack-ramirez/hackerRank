//Link to challenge
//https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

const testMatrix=[

-9, -9, -9,   1,  1,  1, 
 0, -9,  0,   4,  3,  2,
-9, -9, -9,   1,  2,  3,

 0,  0,  8,   6,  6,  0,
 0,  0,  0,  -2,  0,  0,
 0,  0,  1,   2,  4,  0

]

let rowIsOdd = false;
let count = 0;
let h1=[];
let quadrant = 0;

for(let i=0; i <36; i++){

   

    if(i == 0 ||i == 1 ||i== 2 ||i== 6 ||i== 7 ||i== 8 ||i== 12 ||i== 13 ||i== 14){
        console.log('pop')
        h1.push(testMatrix[i]);
    }
    else if(i == 3 ||i == 4 ||i== 5 ||i== 9 ||i== 10 ||i== 11 ||i== 15 ||i== 16 ||i== 17){
        h2.push(testMatrix[i]);
      
    }else if(i == 18 ||i == 19 ||i== 20 ||i== 24 ||i== 25 ||i== 26 ||i== 30 ||i== 31 ||i== 32){
        h3.push(testMatrix[i])

    }else if(i == 21 ||i == 22 ||i== 23 ||i== 27 ||i== 28 ||i== 29 ||i== 33 ||i== 34 ||i== 35){
        h4.push(testMatrix[i])

    }

    hourGlassAdd(h1);
    hourGlassAdd(h2);
    hourGlassAdd(h3);
    hourGlassAdd(h4);

    if(h1 > h2 && h1 > h3 && h1 > h4){
        return h1;
    }else if(h2 > h1 && h2 > h3 && h2 > h4){
        return h2;
    }else if(h3 > h1 && h3 > h2 && h3 > h4){
        return h3;
    }else if(h4 > h1 && h4 > h2 && h4 > h3){
        return h3;
    }





    

}

function hourGlassAdd(h){
    let row1= (h[0]+h[1]+h[2]);
    let row2= h[4];
    let row3= (h[6]+ h[7] + h[8])

    return (row1+row2+row3);
}
