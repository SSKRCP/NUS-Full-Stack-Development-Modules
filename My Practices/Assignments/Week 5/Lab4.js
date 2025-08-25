var prompt = require('prompt-sync')();

//IsPerfectSquare();
//IsInfinitePerfectSquare();
//GetFirstDigit();
//GetAnyDigit();
//GuessComputerAge();
//IntegerSorting();
//IsPalindrome();
//CollatzConjecture();

function IsPerfectSquare(){
    var inputNo = prompt('Enter an integer no : ');

    if(isNaN(inputNo)){
        console.log('Invalid No!');
    }
    else{
        inputNo = Number(inputNo);

        if(inputNo > 100 || inputNo < 0)
            console.log('The number should not be within 0 to 100');
        else{
             let result=false;

        for(var i=0; i<=10; i++){
            if(inputNo == i*i){
                result=true;
                break;
            }
        }

        if(result)
            console.log('The number ' + inputNo + ' is a perfect square');
        else
            console.log('The number ' + inputNo + ' is NOT a perfect square');
        }
       
    }
}

function IsInfinitePerfectSquare(){
    var inputNo = prompt('Enter an integer no : ');

    if(isNaN(inputNo)){
        console.log('Invalid No!');
    }
    else{
        inputNo = Number(inputNo);
        var i=0,  temp=0;
        var result=false;

        do{
            temp = i*i;
            if(inputNo == temp){
                result=true;
                break;
            }  
            i++;  
        }
        while(inputNo > temp)
         

    if(result)
        console.log('The number ' + inputNo + ' is a perfect square');
    else
        console.log('The number ' + inputNo + ' is NOT a perfect square');
    }
       
}

function GetFirstDigit(){
     var inputNo = prompt('Enter an integer no : ');

    if(isNaN(inputNo)){
        console.log('Invalid No!');
    }
    else{
        inputNo = Number(inputNo);
        let temp = inputNo, result = 0;
 
        if(inputNo < 0)
            console.log('The number should not be a positive number');
        else{
            while(temp > 10){
                temp = temp / 10; 
            }
            temp = Math.trunc(temp); 
        }
         
        console.log('The first digit of the number ' + inputNo + ' is ' + temp);
         
       
   
    }
}
 
function GetAnyDigit(){
    var inputNo = prompt('Enter an integer no : ');
    var digitNo = prompt('Enter which digit you want to know : ');    
    var inputLength = (inputNo.length);
    

    if(isNaN(inputNo) && isNaN(digitNo)){
        console.log('Invalid No or digit no!');
    }
    else{
        inputNo = Number(inputNo);
        digitNo=Number(digitNo);
        var temp = inputNo;

        if(digitNo <= 0){
            console.log('Error! Digit position must be greater than 0');
        }
        else if(digitNo > inputLength){
            console.log('Error! Digit position is more than the number of digits');
        }
        else{
            for(var i=inputLength; i > digitNo; i--){
                temp = temp / 10;
                ////console.log(temp);
            }
            temp = Math.trunc(temp); 
             ////console.log(temp);
            temp = temp % 10;
             ////console.log(temp);
        } 
         
        console.log('The '+ digitNo + 'th digit of the number ' + inputNo + ' is ' + temp);      
    }
}

function GuessComputerAge(){
    var randomAge = getRandomInt(1, 100);
    console.log('Random no is ' + randomAge);

    var userInput=0, noOfAttempts=0;

    while(true)
    {
        do{
            userInput = prompt('Enter your guess = ');
            noOfAttempts+=1;

            if(userInput == randomAge){
                console.log('You have guessed ' + userInput + ' correctly in ' + noOfAttempts + ' attempts')
            }
            else if(userInput > randomAge){
                console.log('Your guess is too big '); 
            }
            else{
                console.log('Your guess is too small '); 
            }       
        }
        while(userInput != randomAge)
        
        wantContinue = prompt('Do you want to continue playing the game? (Y to continue) = ');

        if(wantContinue != 'Y' &&  wantContinue != 'y')
        {
            break;
        }
        else{
            noOfAttempts=0;
        }    

    }
    
}


function IntegerSorting(){
    var resultArr = [], inputArr = [];
    var userInput = 0, userInputNumber = 0;

    do{
        userInput = prompt('Enter an integer (Invalid integer to stop) : ');
        if(isNaN(userInput) == false){
            userInputNumber = Number(userInput); 
            inputArr.push(userInputNumber);
        } 
    }
    while((isNaN(userInput)) == false)
    
    for(var i=0; i < inputArr.length; i++){
        for(var j=0; j < inputArr.length; j++){
            if(inputArr[j] > inputArr[j+1]){
                let temp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = temp;
            }
        }
    }
    var returnString='Sorted Numbers : ';
      for(var i=0; i < inputArr.length; i++){
        returnString +=  inputArr[i] + ','; 
      }
      returnString = returnString.slice(0, -1);
      console.log(returnString);
}

function IsPalindrome(){
    var inputArr=[], reverseArr=[];
    var isPalindrome=true;

    var userInput = prompt('Enter the word : ');
    if(userInput.length > 0){
        for(var i=0; i < userInput.length; i++){
            inputArr.push(userInput[i]);
        }
        for(var j=userInput.length -1; j >= 0 ; j--){
            reverseArr.push(userInput[j]);
        }
        for(var i=0; i < inputArr.length; i++){
           if(inputArr[i].toLocaleLowerCase() != reverseArr[i].toLocaleLowerCase()){
                isPalindrome=false;
                break;
           }
        }
        if(isPalindrome){
            console.log('It’s a palindrome');
        }
        else{
             console.log('Not a palindrome');
        }
    }
    else{
        console.log('Invalid word!');
    }
}

function CollatzConjecture(){

    var num = Number(prompt('Enter a positive integer: '));

        if (num > 0)
        {
            while (num != 1)
            {
                console.log(num);

                if (num % 2 == 0)
                {
                    num = num / 2;
                }
                else
                {
                    num = num * 3 + 1
                }
            }

            console.log(num);
        }
        else
        {
            console.log('ERROR!: You have entered an invalid number');
        }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}