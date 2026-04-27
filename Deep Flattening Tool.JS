function steamrollArray(arr){
 let result = [];

 function flatten(current){
   for(let i=0; i<current.length; i++){
     let value = current[i];
     if(Array.isArray(value)){
       flatten(value);

     }else{
       result.push(value);
     }
   }
 }
 flatten(arr);
 return result;
};


console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));

