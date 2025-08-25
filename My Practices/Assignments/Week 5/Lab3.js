const prompt = require('prompt-sync')();

//displayTimesTable();
//displayPower();
//displaySumOfMultiples();
getNoOfDigits();

function displayTimesTable(){
    console.log('Exercise 1 : Times Table');
    var input = prompt('Enter a positive integer for Times Table : ');

    if(isNaN(input) || input < 0){
        console.log('Error! The programe expects a positive integer for Times Table')
    }
    else{
        for (var i=1; i<=10;i++){
            console.log(input * i);
        }
    }
}

function displayPower(){
    console.log('Exercise 2 : The Power of Numbers');
    var base = prompt('Enter a positive integer as base : ');
    var exp = prompt('Enter a positive integer as exponent : ');
    var result=1;

    if(isNaN(base) || base < 0){
        console.log('Error! The programe expects a positive integer for base')
    }
    else if(isNaN(exp) || exp < 0){
        console.log('Error! The programe expects a positive integer for exponent')
    }
    else{
        for (var i=1; i<=exp;i++){
            result = (result * base);
        }
        console.log('The answer is : ' + result);
    }

}

function displaySumOfMultiples(){
    console.log('Exercise 3 : Sum of Multiples');
    var limit = 0, x = 0, result = 0;

    limit = prompt('Enter a positive integer for limit : ');
    x = prompt('Enter a positive integer for x : ');
    result=0;  
    
    

    if(isNaN(limit) || limit < 0){
        console.log('Error! The programe expects a positive integer for limit')
    }
    else if(isNaN(x) || x < 0){
        console.log('Error! The programe expects a positive integer for x')
    }
    else{ 
        x=Number(x);
        limit=Number(limit);
        for (i = x; i <= limit; i += x) 
        { 
            result += i; 
        }
        
 
        console.log('The answer is : ' + result);
    }

}

function getNoOfDigits(){
    console.log('Exercise 4 : Display no of digits in the number');

    var no=0, count=0;
     no  = prompt('Enter a positive integer for displaying no of digits in it. : ');

    if(isNaN(no) || no < 0){
        console.log('Error! The programe expects a positive integer for limit')
    } 
    else{ 
        no=Number(no); 
        if( no == 0)
            console.log('The no of digits are : 1');
        else{
            while(no > 0) 
            { 
                no = Math.floor(no / 10);
                count++;
            }
            console.log('The no of digits are : ' + count);
        } 
        
    }
}