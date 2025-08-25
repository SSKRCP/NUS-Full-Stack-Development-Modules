import random

def temperatureConverter():
    conversionType=''
    inputTemp=0
    outputTemp=0

    try:
        conversionType = input('Enter temperature conversion type : ')

        if conversionType.upper() == 'C':
            inputTemp = input('Enter temperature to convert in Celcious : ')
            inputTemp = float(inputTemp)
            if (inputTemp < 0 or inputTemp > 100):
                print('Invalid temperature value!')
            else:
                outputTemp=((inputTemp  * 9) / 5) + 32
                print(f'{inputTemp} degree Celcius = {outputTemp} degree Fahrenheit')
        elif conversionType.upper() == 'F':
            inputTemp = input('Enter temperature to convert in Fahrenheit : ')
            inputTemp = float(inputTemp)
            if (inputTemp < 32 or inputTemp > 212):
                print('Invalid temperature value!')
            else:
                outputTemp=(inputTemp -32 ) / 1.8
                print(f'{inputTemp} degree Fahrenheit = {outputTemp} degree Celcius')
        else:
            print('Invalid temperature conversion type!')

    except ValueError:
        print('Invalid input!')

def checkValidTriangle():
    userinput=''

    try:
        userinput = input('Enter three angles of the triangle deparated by space : ').split()
      
        if len(userinput) < 3 or len(userinput) > 3:
            print('Please enter three angles as integer. Try again!')
        else:
            angle1 = int(userinput[0].strip())
            angle2 = int(userinput[1].strip())
            angle3 = int(userinput[2].strip())

            if(angle1 + angle2 +  angle3) == 180 :
                print('It is a valid triangle!')

                if angle1 == angle2 == angle3:
                    print('It is an equilateral triangle!')
                elif(angle1 == angle2) or(angle2 == angle3) or (angle1 == angle3):
                    print('It is an isosceles triangle!')

                if(angle1 == 90 or angle2 == 90 or angle3 == 90):
                    print('It is a right angled triangle!')

                if ((angle1 >  90) or (angle2 >  90) or (angle3 >  90)):        
                    print('It is an obtuse triangle!')    
                else:        
                    print('It is an acute triangle!')

            else:
                print('It is NOT a valid triangle!')
    except ValueError:
        print('Invalid input!')


def validateNRIC():
    inputNRIC=''
    firstChar=''
    lastChar=''
    temp=0
    totalSum=0
    try:
        inputNRIC = input('Enter your NRIC number : ')
        if len(inputNRIC) == 9: 
            if inputNRIC[0] == 'S' or inputNRIC[0] == 'T' or inputNRIC[0] == 'F' or inputNRIC[0] == 'G':    
                weighted_total = int(inputNRIC[1]) * 2 + int(inputNRIC[2]) * 7 + int(inputNRIC[3]) * 6 + int(inputNRIC[4]) * 5 + int(inputNRIC[5]) * 4 + int(inputNRIC[6]) * 3 + int(inputNRIC[7]) * 2
        
                if inputNRIC[0] == 'T' or inputNRIC[0] == 'G':            
                    weighted_total += 4
            
                mod_11 = weighted_total % 11
            
                if inputNRIC[0] == 'S' or inputNRIC[0] == 'T':                
                    if mod_11 == 0:
                        check_alphabet = 'J'
                    elif mod_11 == 1:
                        check_alphabet = 'Z'
                    elif mod_11 == 2:
                        check_alphabet = 'I'
                    elif mod_11 == 3:
                        check_alphabet = 'H'
                    elif mod_11 == 4:
                        check_alphabet = 'G'
                    elif mod_11 == 5:
                        check_alphabet = 'F'
                    elif mod_11 == 6:
                        check_alphabet = 'E'
                    elif mod_11 == 7:
                        check_alphabet = 'D'
                    elif mod_11 == 8:
                        check_alphabet = 'C'
                    elif mod_11 == 9:
                        check_alphabet = 'B'
                    elif mod_11 == 10:
                        check_alphabet = 'A'                
                else:                
                    if mod_11 == 0:
                        check_alphabet = 'X'
                    elif mod_11 == 1:
                        check_alphabet = 'W'
                    elif mod_11 == 2:
                        check_alphabet = 'U'
                    elif mod_11 == 3:
                        check_alphabet = 'T'
                    elif mod_11 == 4:
                        check_alphabet = 'R'
                    elif mod_11 == 5:
                        check_alphabet = 'Q'
                    elif mod_11 == 6:
                        check_alphabet = 'P'
                    elif mod_11 == 7:
                        check_alphabet = 'N'
                    elif mod_11 == 8:
                        check_alphabet = 'M'
                    elif mod_11 == 9:
                        check_alphabet = 'L'
                    elif mod_11 == 10:
                        check_alphabet = 'K'
            
                if inputNRIC[8] == check_alphabet:                
                    print('{} is a valid identity card number'.format(inputNRIC))        
                else:            
                    print('{} is NOT a valid identity card number'.format(inputNRIC))
    
            else:        
                print('The first character of an identity card number must be the alphabet S, T, F or G')
    
        else:    
            print('Identity card number must be 9 characters')
    except ValueError:
        print('Invalid NRIC!')
    

def generateNRIC():
    lastChar='' 
    try:
        inputType = input('Enter your identity card type (S, T, F or G only) : ')
        inputType=inputType.upper()
        if inputType == 'S' or inputType =='T' or inputType =='F' or inputType =='G':
            digit_1 = random.randint(0,9)
            digit_2 = random.randint(0,9)
            digit_3 = random.randint(0,9)
            digit_4 = random.randint(0,9)
            digit_5 = random.randint(0,9)
            digit_6 = random.randint(0,9)
            digit_7 = random.randint(0,9)

            digitTotal = (digit_1 * 2) + (digit_2 * 7) + (digit_3 * 6) + (digit_4 * 5) + (digit_5 * 4) + (digit_6 * 3) + (digit_7 * 2)
            print(digitTotal)

            if inputType =='T' or inputType =='G':
                digitTotal += 4
            
            remainder = digitTotal % 11

            if(inputType == 'S' or inputType =='T'):
                match remainder:
                    case 0:
                        lastChar = 'J'
                    case 1:
                        lastChar = 'Z'
                    case 2:
                        lastChar = 'I'
                    case 3:
                        lastChar = 'H'
                    case 4:
                        lastChar = 'G'
                    case 5:
                        lastChar = 'F'
                    case 6:
                        lastChar = 'E'
                    case 7:
                        lastChar = 'D'
                    case 8:
                        lastChar = 'C'
                    case 9:
                        lastChar = 'B'
                    case 10:
                        lastChar = 'A'
            elif(inputType == 'F' or inputType =='G'):
                match remainder:
                    case 0:
                        lastChar = 'X'
                    case 1:
                        lastChar = 'W'
                    case 2:
                        lastChar = 'U'
                    case 3:
                        lastChar = 'T'
                    case 4:
                        lastChar = 'R'
                    case 5:
                        lastChar = 'Q'
                    case 6:
                        lastChar = 'P'
                    case 7:
                        lastChar = 'N'
                    case 8:
                        lastChar = 'M'
                    case 9:
                        lastChar = 'L'
                    case 10:
                        lastChar = 'K'
            print(lastChar)
            print(remainder)
            finalNRIC = inputType + str(digit_1)+ str(digit_2)+ str(digit_3)+ str(digit_4)+ str(digit_5)+ str(digit_6)+ str(digit_7)+ lastChar
            print('Generated identity card number id {}'.format(finalNRIC))  
        else:
            print('Invalid input!')     
    except ValueError:
        print('Invalid input!')
    
def smartHomeSimulation():
    try:
        inputCommand = input('Enter a command for the smart home system : ').strip()
        match inputCommand:
            case 'A':
                print('Lights turned on')
            case 'B':
                print('Lights turned off')
            case 'C':
                print('Alart has been set')
            case 'D':
                print('Alart has been disarmed')
            case 'E':
                print('All doors are now locked')
            case 'F':
                print('All doors are now unlocked')
            case _:
                print('Invalid command')
    except ValueError:
        print('Invalid input!')    

if __name__ == "__main__":
    #temperatureConverter()
    #checkValidTriangle()
    #validateNRIC()
    #generateNRIC()
    smartHomeSimulation()