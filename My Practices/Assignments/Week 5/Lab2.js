const inputPrompt = require('prompt-sync')();

console.log('Exercise 1 and 2 : Find the Largest and the Smallest number');    
var num1 = inputPrompt('Enter Number 1 : ','0');
var num2 = inputPrompt('Enter Number 2 : ','0');
var num3 = inputPrompt('Enter Number 3 : ','0');

//**** Exercise 1 : Find the largest number */
var largestNo = GetLargestNumber(num1,num2,num3);
console.log( 'The Largest number among above three numbers is =' + largestNo);

//**** Exercise 2 : Find the smallest number */
var smallestNo = GetSmallestNumber(num1,num2,num3);
console.log( 'The Smallest number among above three numbers is =' + smallestNo);

//**** Exercise 3 : Temperature Conversion */
TemperatureConversion();


//**** Exercise 4 and 5 : Grading System */
console.log('Exercise 4 and 5 : Grading System');    
var testScore = inputPrompt('Enter your test score : ','0');

//**** Exercise 4 : Grading System with IF statement */
var testGrade1 = displayGradesWithIf(testScore);
if(testGrade1 != '')
    console.log( 'The grade for your score (using IF statement) is : ' + testGrade1);

//**** Exercise 5 : Grading System with Switch statement */ 
var testGrade2 = displayGradesWithSwitch(testScore);
if(testGrade2 != '')
    console.log( 'The grade for your score (using Switch statement) is : ' + testGrade2);


function GetLargestNumber(num1,num2,num3){   
    var largestNo = num1;

    if(largestNo < num2){
        largestNo= num2;
    }
    if(largestNo < num3){
        largestNo= num3;
    }

    return largestNo;
}

function GetSmallestNumber(num1,num2,num3){   
    var smallestNo = num1;

    if(smallestNo > num2){
        smallestNo = num2;
    }
    if(smallestNo > num3){
        smallestNo= num3;
    }

    return smallestNo;
}

function TemperatureConversion(){
    var freezingC = 0;
    var freezingF = 32;
    var boilingC = 100;
    var boilingF = 212;

    console.log('Exercise 3 : Temperature Conversion'); 
    console.log('Enter Type as 1 for Celsius to Fahrenheit conversion');  
    console.log('Enter Type as 2 for Fahrenheit to Celsius conversion'); 
    inputType = inputPrompt('Enter Type of Conversion (1-2): ','1');
    inputTemp = inputPrompt('Enter temprature in the original scale : ',0);
       

    switch(inputType){
        case '1': 
            //** Celsius to Fahrenheit  */ 
            if(inputTemp >= freezingC && inputTemp <= boilingC){ 
                var outputTemp= Math.round((inputTemp * 9 /5 + 32) * 100) / 100;
                console.log( inputTemp + ' Celsius is ' + outputTemp + ' Fahrenheit ');
            }
            else{
                console.log('Error: Invalid Temperature value provided');
            }
            break;
        case '2': 
            //** Fahrenheit to Celsius  */ 
             if(inputTemp >= freezingF && inputTemp <= boilingF){                
                var outputTemp= Math.round(((inputTemp - 32) * 5/9) * 100) / 100;
                console.log( inputTemp + ' Fahrenheit is ' + outputTemp + ' Celsius ');

            }
            else{
                console.log('Error: Invalid Temperature value provided');
            }
            break;
        default:
            console.log('Invalid Type');

    }
}

function displayGradesWithIf(marks){
    var grade='';
    if(isNaN(marks)){
        console.log('Invalid marks! Please enter a valid number between 0 and 100');
    }
    else if(marks < 0 || marks > 100){
            console.log('Marks should be a valid number between 0 and 100');
        }
    else{         
            if(marks >= 90){
                grade = 'A';
            }
            else if(marks >= 80 && marks <= 89){
                grade = 'B';
            }
            else if(marks >= 70 && marks <= 79){
                grade = 'C';
            }
            else if(marks >= 60 && marks <= 69){
                grade = 'D';
            }
            else if(marks < 60){
                grade = 'F';
            }
         
    }
    return grade;
}

function displayGradesWithSwitch(testScore){ 
    var grade='';
    if(isNaN(testScore)){
        console.log('Invalid score! Please enter a valid number between 0 and 100');
    }
    else{
        const marks = Number(testScore);
        if(marks < 0 || marks > 100){
            console.log('Marks should be a valid number between 0 and 100');
        }
        else{ 
            
            switch(true){
                case(marks >= 90): 
                    grade = 'A';
                    break;
                case(marks >= 80 && marks <= 89): 
                    grade = 'B';
                    break;
                case(marks >= 70 && marks <= 79): 
                    grade = 'C';
                    break;
                case(marks >= 60 && marks <= 69): 
                    grade = 'D';
                    break;
                case(marks < 60): 
                    grade = 'F';
                    break;
            }
        }
    }
    
    return grade;
}