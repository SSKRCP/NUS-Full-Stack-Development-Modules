import math

def currencyConverter_USDToSGD(): 
    userInputAmt=0.00
    sgdAmount=0.00 

    try:
        userInputAmt = input('Enter the amount of USD to be changed to SGD : ')
        userInputAmt = float(userInputAmt)
        sgdAmount=userInputAmt * 1.31

        # Formatted output
        print(f'USD ${userInputAmt:.2f} = SGD ${sgdAmount:.2f}')
        # Rounded output
        print(f'USD ${userInputAmt} = SGD ${round(sgdAmount, 2)}')

    except ValueError:
        print('Invalid input!')


def currencyConverter_SGDToUSD(): 
    userInputAmt=0.00 
    usdAmount=0.00

    try:
        userInputAmt = input('Enter the amount of SGD to be changed to USD : ')
        userInputAmt = float(userInputAmt)
        usdAmount=userInputAmt / 1.31

        # Formatted output
        print(f'SGD ${userInputAmt:.2f} = USD ${usdAmount:.2f}')
        # Rounded output
        print(f'SGD ${userInputAmt} = USD ${round(usdAmount, 2)}')

    except ValueError:
        print('Invalid input!')


def temperatureConverter_CToF():
    inputTemp=0
    outputTemp=0

    try:
        inputTemp = input('Enter temperature in Celcious : ')
        inputTemp=float(inputTemp)
        outputTemp=((inputTemp  * 9) / 5) + 32

        print(f'{inputTemp} degree Celcius = {outputTemp} degree Fahrenheit')

    except ValueError:
        print('Invalid input!')

def temperatureConverter_FToC():
    inputTemp=0
    outputTemp=0

    try:
        inputTemp = input('Enter temperature in Fahrenheit : ')
        inputTemp=float(inputTemp)
        outputTemp=(inputTemp -32 ) / 1.8

        print(f'{inputTemp} degree Fahrenheit = {outputTemp} degree Celcius')

    except ValueError:
        print('Invalid input!')

def getHypotenuse():
    side1=0
    side2=0
    hypotenuse=0

    try:
        side1 = input('Enter the length of first side of right-angled triangle : ')
        side1=float(side1)
        side1_sqr = side1 * side1

        side2 = input('Enter the length of second side of right-angled triangle : ')
        side2=float(side2)
        side2_sqr = side2 * side2

        hypotenuse = math.sqrt(side1_sqr + side2_sqr)

        print(f'The hypotenuse of a right-angled triangle with sides {side1} and {side2} is {hypotenuse}')

    except ValueError:
        print('Invalid input!')

def getSideOfRightAngleTrianle():
    side1=0
    side2=0
    hypotenuse=0

    try:
        side1 = input('Enter the length of first side of right-angled triangle : ')
        side1=float(side1)
        side1_sqr = side1 * side1

        hypotenuse = input('Enter the length of hypotenuse : ')
        hypotenuse=float(hypotenuse)
        hypotenuse_sqr = hypotenuse * hypotenuse

        diff = hypotenuse_sqr - side1_sqr
        side2 = math.sqrt(diff)

        print(f'The second side of right-angled triangle is {side2}')

    except ValueError:
        print('Invalid input!')


def swapVariableValues():
    num1=0
    num2=0 

    try:
         
        num1 = input('Enter the first number : ') 
        num2 = input('Enter the secind number : ') 

        if not num1.isdigit() :
            print('Please enter valid number 1')
        elif not num2.isdigit():
            print('Please enter valid number 2')
        else :
            num1=int(num1)
            num2=int(num2)
            num1 = num1 + num2
            num2 = num1 - num2
            num1 = num1 - num2
            print(f'I swapped the numbers. Now they are {num1}, {num2}')          

    except ValueError:
        print('Invalid input!')


def compoundInterestCalculator():
    principalAmount=0
    interestRate=0
    noOfYears=0
    compoundFrequency=0
    futureValue = 0

    try:
        principalAmount = float(input('Enter the Principal Amount : '))
        interestRate = float(input('Enter the Interest Rate (%) : '))
        noOfYears = float(input('Enter the number of years : '))
        compoundFrequency = float(input('Enter the frequncy (number of times interest is compounded annaually) : '))

        futureValue = principalAmount * ((1.0 + ((interestRate /100) / compoundFrequency)) ** (noOfYears * compoundFrequency))

        print('Compound Interest is : ${:.2f}'.format(futureValue - principalAmount))
        print('Future Value is : ${:.2f}'.format(futureValue))
    except ValueError:
        print('Invalid input!')


if __name__ == "__main__":
    #currencyConverter_USDToSGD()
    #currencyConverter_SGDToUSD()
    #temperatureConverter_CToF()
    #temperatureConverter_FToC()
    #getHypotenuse()
    #getSideOfRightAngleTrianle()
    #swapVariableValues()
    compoundInterestCalculator()
