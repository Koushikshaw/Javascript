//Worksheet 2 Javscript 
//Q 1: 
let a = prompt("Enter your age");
if(a>=10 && a<=20){
  console.log("True")
}
else{
  console.log("false")
}
//Q 2 :
let b = prompt("Enter the sequence number to a day :");
switch(b){
  case '1':
    console.log("Monday");
    break;
  case '2':
    console.log("Tuesday");
    break;
  case '3':
    console.log("Wednusday");
    break;
  case '4':
    console.log("Thursday");
    break;
  case '5':
    console.log("Friday");
    break;
  case '6':
    console.log("Saturday");
    break
  case '7':
    console.log("Sunday");
    break;
  default:
    console.log("Invalid choice")
}
//Q 3: Wether a nuber is divisbalw with 2 or 3
let c = prompt("Enter the number which you want to test");
c = parseInt(c);
console.log(typeof c);
if(c===2){
  console.log("true");
}
if((c%2)==0 && (c%3)==0){
  console.log("The number is divisable by 2 and 3");
}
if((c%3)==0){
  console.log("The number is divisable by 3");
}
//Q 4 : Either 2 OR 3
if((c%2)==0 || (c%3)==0){
  console.log("The number is divisable by either 2 or 3");
}
