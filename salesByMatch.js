
testCase=[10, 20 ,20 ,10 ,10 ,30 ,50 ,10 ,20]
//expected output = 3

function sockMerchant( ar) {
    // Write your code here
   let pairs=0;
   let socks ={}
   
   ar.forEach((sock =>{
       if(!socks[sock]){
           socks[sock]=0;
       }
       socks[sock]+=1;
       
       if(!(socks[sock]%2)){
           console.log(!(socks[sock]%2))
           pairs+=1;
       }
   }))
   console.log(socks)
   return pairs;
   
   
}

console.log('\n'+ sockMerchant(testCase));