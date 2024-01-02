let a,b;
a = parseInt(promopt("Enter the number of rows in the triangle : "));
b = parseInt(prompt("Enter the number of columns in the triangle : "));
for(let i= 0; i<b; i++){
  for(let j = 0; j<i; j++){
    console.log("*");
  }
  console.log("\n");
}