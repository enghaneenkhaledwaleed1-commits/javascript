function titleCase(str){
  let words = str.toLowerCase().split(" ");
  let result = [];
  for(let i=0; i<words.length; i++){
    let word=words[i];
    let newWord=word[0].toUpperCase()+word.slice(1);
    result.push(newWord);
  }
 return result.join(" ");
};
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));