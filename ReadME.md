** JavaScript Functions **
Create a file called `functions.js` and complete the following exercises. Remember to test your code as you go!

**Question 1: Function Basics**

Write a JavaScript function named `calculateArea` that calculates and returns the area of a rectangle. The function should take two parameters: `length` and `width`. Test your function by calling it with different values.

**Question 2: Scope Exploration**

1. Declare a variable `globalVar` in the global scope and give it a value.
2. Inside a function, declare a variable `localVar` and give it a different value.
3. Attempt to access both `globalVar` and `localVar` within the function.
4. Write comments explaining your observations about variable scope.

**Question 3: Closures and Private Counters**

Create a function called `counter` that returns another function. The inner function should increment and return a counter variable each time it's called. Use closures to achieve this. Test your counter function by creating multiple counters and incrementing them separately.

**Question 4: Function Expressions**

Write a function expression named `calculate` that takes two parameters: `num1` and `num2`. The function should return an object with the following properties:
- `sum` - the sum of `num1` and `num2`.
- `difference` - the absolute difference between `num1` and `num2`.
- `product` - the product of `num1` and `num2`.
- `quotient` - the result of dividing `num1` by `num2`.

Question 5 is not required, but is a bonus challenge.

**Question 5: Callback Functions**

Create a function called `performOperation` that takes two numbers and a callback function as parameters. The `performOperation` function should call the callback function, passing the two numbers as arguments, and return the result.

Write three separate callback functions:
1. One that adds the two numbers.
2. One that subtracts the second number from the first.
3. One that multiplies the numbers.

