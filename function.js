//1.Functions Basic 

function calculateArea(legnth,width){
    console.log(legnth*width)
}
calculateArea(4,3)//12
calculateArea(34,80)//2720


//2.Scope Exploration
let globalvariable="woow the guru lectures are interesting";
function global(){
    const localvar="lets keep codding"
    console.log(globalvariable +" " + localvar) //woow the guru lectures are interesting lets keep codding      


}
global();
// console.log(globalvariable +" " + localvar)//error
//woow the guru lectures are interesting
//in the code above globalVariable is declared outside the function and it can be used anywhere
//The local variable can only be accesed inside the function hence when it accesed anywhere otside the function an error occurs


//3.closure and private counters
function setcounter(){
    let count=0;

    return function(){// an inner function is returned to increment the number
        console.log(++count);
    };
}
const counter=setcounter();
counter();
counter();
counter();//closure is used when an outer function returns an inner function
function setcounters(){
    let number=10;

    return function(){// an inner function is returned to increment the number
        console.log(++number);
    };
}
const counter1=setcounters();
counter1();
counter1();
counter1();

//**Question 4: Function Expressions**
const calculate = function(num1, num2) {
    return {
      sum: num1 + num2,
      difference: Math.abs(num1 - num2),
      product: num1 * num2,
      quotient: num2 !== 0 ? num1 / num2 : "Cannot divide by zero",
    };
  };
  
  const result1 = calculate(10, 5);
  console.log(result1);
  
  
  
  // Example usage:
  const result = calculate(10, 5);
  console.log(result);

 //callback functions
 function performOperations(num1, num2, calc) {
    return calc(num1, num2);
  }
  
  function add(num1, num2) {
    return num1 + num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  console.log(performOperations(4,6, add));
  console.log(performOperations(8,4 ,multiply));
  console.log(performOperations(8 ,6, subtract));


