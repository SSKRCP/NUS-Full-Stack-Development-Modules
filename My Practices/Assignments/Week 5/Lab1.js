
Exercise1();
Exercise2_USD_To_SGD();
Exercise2_SGD_To_USD();
Exercise3();
Exercise4_Celsius_To_Fahrenheit(); 
Exercise4_Fahrenheit_To_Celsius();
Exercise5();

function Exercise1(){
    console.log('Exercise 1 : Chicken Rice');
    const userinput =require('prompt-sync')();
    var chicken = userinput('How much kg of chicken is required for a portion of chicken rice for 1 diner? ', '1');
    var rice = userinput('How much kg of rice is required for a portion of chicken rice for 1 diner? ', '1');
    var chilli = userinput('How much kg of chilli is required for a portion of chicken rice for 1 diner? ', '1');
    var noOfDinners = userinput('How many diner(s) are there? ', '1');

    var totalChicken = chicken * noOfDinners;
    var totalRice = rice * noOfDinners;
    var totalChilli = chilli * noOfDinners;

    console.log('Total chicken required for' + noOfDinners + 'dinners is :' + totalChicken +' kg');
    console.log('Total rice required for' + noOfDinners + 'dinners is :' + totalRice +' kg');
    console.log('Total chilli required for' + noOfDinners + 'dinners is :' + totalChilli +' kg');
}

function convert_USD_To_SGD(usdAmount){
     var sgdAmount = 0;
     sgdAmount = usdAmount * 1.3100;
     return sgdAmount;
}

function convert_SGD_To_USD(sgdAmount){
     var usdAmount = 0;
     usdAmount = sgdAmount / 1.3100;
     return usdAmount;
}

function Exercise2_USD_To_SGD(){
    console.log('Exercise 2 : Currency Exchange USD-To-SGD');

    const userinput =require('prompt-sync')();
    var usdAmount = userinput('Enter the USD Amount: ','0.00');
    var sgdAmount = convert_USD_To_SGD(usdAmount);
    console.log('USD ' + usdAmount + ' = SGD ' + sgdAmount);
}

function Exercise2_SGD_To_USD(){
    console.log('Exercise 2 : Currency Exchange SGD-To-USD');
     
    const userinput =require('prompt-sync')();
    var sgdAmount= userinput('Enter the SGD Amount: ','0.00');
    var usdAmount= convert_SGD_To_USD(sgdAmount);
    console.log('SGD ' + sgdAmount + ' = USD ' + usdAmount);
}

function Exercise3(){

    const userinput =require('prompt-sync')();
    
    //*** USD to SGD */
    console.log('Exercise 3 : Currency Exchange Rounding USD-To-SGD');
    var usdAmount = userinput('Enter the USD Amount: ','0.00');
    var sgdAmount = Math.round(convert_USD_To_SGD(usdAmount) * 100)/100;
    console.log('USD ' + usdAmount + ' = SGD ' + sgdAmount + ' (Rounded)');

    //*** SGD to USD */
    console.log('Exercise 3 : Currency Exchange Rounding SGD-To-USD');
 
    var sgdAmount = userinput('Enter the SGD Amount: ','0.00');
    var usdAmount = Math.round(convert_SGD_To_USD(sgdAmount) * 100)/100;
    console.log('SGD ' + sgdAmount + ' = USD ' + usdAmount + ' (Rounded)');

}

function Exercise4_Celsius_To_Fahrenheit(){
    console.log('Exercise 4 : Temperature Conversion : Celsius To Fahrenheit');

    const userInput = require('prompt-sync')();
    
    //*** Celsius To Fahrenheit */
    var tempCensius = userInput('Enter temperaure in Celsius: ', '0');
    var temlFahrenheit= Math.round((tempCensius * 9 /5 + 32) * 10) / 10;
    console.log( tempCensius + ' Celsius is ' + temlFahrenheit + ' Fahrenheit');
}

function Exercise4_Fahrenheit_To_Celsius(){
    console.log('Exercise 4 : Temperature Conversion : Fahrenheit To Celsius');
    const userInput = require('prompt-sync')();
    
    //*** Fahrenheit To Celsius */
    var  temlFahrenheit = userInput('Enter temperaure in Fahrenheit: ', '0');
    var tempCensius = Math.round(((temlFahrenheit - 32) * 5/9) * 10) / 10;
    console.log(  temlFahrenheit + ' Fahrenheit is ' + tempCensius + ' Celsius');
}

function Exercise5(){
    console.log('Exercise 5 : Find the Last Digit');

    const userInput = require('prompt-sync')();

    var num = userInput('Enter a number:', '0');
    if(isNaN(num)){
        console.log('Sorry, the input value is not a number.');
    }
    else{
        var remainder = num % 10;
        console.log('The last digit of ' + num + ' is ' + remainder);
    }
    
    
}