var prompt = require('prompt-sync')(); 

/*** Prompt the user to key-in a number and strore user input in a variable. */
var inputNumber = prompt('Enter a Number : ');
var result='';

 /*** Check if user inputted a valid number */   
if(isNaN(inputNumber)){
    console.log('You have entered an invalid number!');
}
else{

    inputNumber=Number(inputNumber);

    /*** Check if the nuber is positive/ negative/ zero. */
    if(inputNumber == 0){
        result='Zero';
    }
    else if(inputNumber < 0){
        result = 'Negative';
    }
    else{
        result='Positive';
    }

    /*** Display appropriate message. */
    switch(result.toLowerCase()){
        case 'negative':
            console.log("You have entered a negative number.");
            break;
        case 'positive':
            console.log("You have entered a positive number.");
            break;
        case 'zero':
            console.log("You have entered a zero.");
            break;
        default:
            console.log("Oops! You did not enter a valid number."); 
    }
}
           
 
