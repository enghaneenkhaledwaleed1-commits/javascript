function sumFibs(num){
 let a=0; 
 let b=1;
 let sum=0;
 while (b <= num){
 if(b%2 !==0){
sum += b;
 }
 let next = a + b;
 a=b;
 b=next;
 }
 return sum;
};
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
console.log(sumFibs(7025));
