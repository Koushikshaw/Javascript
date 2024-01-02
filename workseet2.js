//Defination of Object :   
let marks ={
    subham : 90,
    rohan : 80,
    ravi: 60,
  }
  //Problem number 1 :
  //Using for loop
  for(let a = 0;a<Object.keys(marks).length;a++){
    console.log("The marks of "+Object.keys(marks)[a]+" is "+marks[Object.keys(marks)[a]]);
  }
  
  //Problem number 2 :
  // Using for in loop
  for(let key in marks){
    console.log("The marks of "+key+" is "+marks[key]);
  }
  
  //Problem number 3 :
  //Print try again until the user enters the correct number
  let a = 5;
  a = Number.parseInt(a);
  console.log("Enter the correct number")
  let b = prompt("Enter the correct number : ")
  while (true) {
    let b = prompt("Enter the correct number : ")
    b = Number.parseInt(b);
    if(a==b){
      break;
    }
    console.log("Try Again !!");
    
  }
  console.log("You have Entered the correct number !!");
  
  //Problem number 4 :
  //Write a programm to find out the mean of 5 numbers
  
  //Methood 1 : General Approach
  console.log("\t\tMean Calculative Programm\t\t\n")
  a = parseInt(prompt("Enter the value of First number : "));
  b = parseInt(prompt("Enter the value of Second Number : "));
  let c = parseInt(prompt("Enter the value of third number : "));
  let d = parseInt(prompt("Enter the value of Fourth Number : "));
  let e = parseInt(prompt("Enter the value of fifth number : "));
  let sum = (a+b+c+d+e);
  console.log("The sum of all the numbers you entered is : ",sum);
  let mean = sum/5;
  console.log("The mean of The five numbers you entered is : "+mean);
  
  //Methood 2 : Function Approach
  const mean1=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
  }
  console.log(mean1(a,b,c,d,e));