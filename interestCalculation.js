//simple interest formulla function
function interestFormulla(principle,time,interest){
 //SI = (p * t * r) / 100;
 var simpleInterest = (principle * time * interest)/100;
 return simpleInterest;
}
var prinAmmount = 10000;
var year = 10;
var interestAmmount =.5;
var inputYourNumber = interestFormulla(prinAmmount,year,interestAmmount);
console.log(inputYourNumber);