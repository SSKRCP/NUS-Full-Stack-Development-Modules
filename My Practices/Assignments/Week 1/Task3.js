
/*
    Below Function  greetUser accepts parameter called name.  
    It then concatenate the value of name with text 'Hello' and logs the greeting message.
    It can be called multiple times, passing different values for name parameter.
 */

function greetUser(name){
    console.log("Hello, " + name +"!");
}

//*** Call greetUser function with parameter = 'Alice' */
//*** The output will be  Hello, Alice! */
greetUser("Alice");

//*** Call greetUser function with parameter = 'Bob' */
//*** The output will be  Hello, Bob! */
greetUser("Bob");

//*** Call greetUser function with parameter = 'Charlie' */
//*** The output will be  Hello, Charlie! */
greetUser("Charlie");