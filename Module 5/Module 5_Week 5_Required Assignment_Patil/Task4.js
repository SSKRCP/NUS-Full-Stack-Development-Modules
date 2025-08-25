
/**** Function to calculate the area */
/**** Two parameters - length and width */
function calculateArea(length, width){
    let area=0;
    
    /**** Calculate area of the rectangle */
    area = length * width;
     
    /*** return the area as a result. */
    return area;
}

/*** Call the above function with sample values and display the result.  */
let length = 12;
let width = 13;
if(isNaN(length) || isNaN(width)){
        console.log('Invalid values for length or width.');
}
else{
    let result = calculateArea(length, width);

    console.log('The length of rectangle is : ' + length);
    console.log('The width of rectangle is : ' + width);
    console.log('The area of rectangle is : ' + result);
}
