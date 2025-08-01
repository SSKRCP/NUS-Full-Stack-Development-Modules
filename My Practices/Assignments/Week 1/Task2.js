/*
    Below code declares a variable called 'num' and assigns a value to it.
    Then it checks if the value assigned is a valid number or not. 
    If not a valid number, it logs the message that the number is not valid.
    If it is a valid number, then it tries to divide (using modulo) it with 2. 
    If the remainder is zero, then it prints 'Even' to the console. Else it prints 'Odd' to the console.
*/

//** Declare a variable 'num'. */
var num = 24;

//*** Check if variable 'num' is a valid number */
if(isNaN(num)){
     console.log("It is not a valid number!");
}
else{
    //*** Check if the number is even or odd number. */
    if(num % 2 === 0){
    //*** If fully divisible by 2, then it s an even no */
        console.log("Even");
    }
    else{
    //*** Odd number */
        console.log("Odd");
    }
}
