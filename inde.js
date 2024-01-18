function sum (num1, num2, FnToCall)  {
  let result = num1 + num2;
  FnToCall(result);   
}
function displayresult(data){
    console.log("sum of two integer"+data);
}  
function displaypassive(data){
    console.log("sum of three integer"+data);
}
const ans = sum (1,3,FnToCall);