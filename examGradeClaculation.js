function examGradeClaculation(inputnumber){
 if(inputnumber>= 80){
     var getGrade = "A+";
     return getGrade;
     return inputnumber;
    
 }else if(inputnumber>= 60){
    var getGrade = "A";
    return getGrade;
 }
 else if(inputnumber>= 50){
    var getGrade = "A-";
     return getGrade;
 }
 else if(inputnumber>= 40){
    var getGrade = "B";
    return getGrade;
 }
 else if(inputnumber>= 33){
    var getGrade = "C";
    return getGrade;
  }else{
    var getGrade = "no grade you got Failed";
    return getGrade;
 }

}
var yourNumber = 32;
var gradePoint = examGradeClaculation(yourNumber);
console.log("your grade is ", gradePoint ,"your number is ", yourNumber);