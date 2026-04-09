function getAverage(scores){
  let sum=0;
  for(let i=0; i<scores.length; i++){
    sum += scores[i];
  }
return sum/scores.length ; 
};

function getGrade(score){
  if (score === 100){
    return "A+";
  } else if (score >= 90){
    return "A"
  } else if (score >= 80){
    return "B"
  }else if (score >= 70){
    return "C"
  }else if (score >= 60){
    return "D"
  }else {
    return "F"
  }
};

function hasPassingGrade(score){
  let grade = getGrade(score);
  return grade !== "F";
};

function studentMsg(scores,studentScore){
  let average = getAverage(scores);
  let grade = getGrade(studentScore);
  let passed = hasPassingGrade(studentScore);
  if (passed){
      return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));
console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));

