function farenheitTocelcius(farenheit){
  var celcius = (farenheit - 32) * 5/9;
  return celcius;
}
var inputfarenheit = 64;
var resultcelcius = farenheitTocelcius(inputfarenheit);
console.log(resultcelcius);