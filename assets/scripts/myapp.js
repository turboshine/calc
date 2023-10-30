const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input feild
function getUserNumberInput(){
    return parseInt(usrInput.value);
}

/**
 * Creates a calculation description and writes it to the output.
 *
 * This function takes an operator, the result before the calculation, and the
 * calculation number, and generates a calculation description by combining
 * these values. The resulting description is then written to the output using
 * the provided outputResult function.
 *
 * @param {string} operator - The operator used in the calculation (e.g., '+', '-', '*', '/').
 * @param {number} resultBeforeCalc - The result value before the calculation.
 * @param {number} calcNumber - The number used in the calculation.
 */
function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
     const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
     outputResult(currentResult,calcDescription);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry ={
        operation: operationIdentifier,
        prevResult : prevResult,
        number : operationNumber,
        result : newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();

    if(
        calculationType != 'ADD' &&
        calculationType != 'SUBTRACT'  &&
        calculationType != 'MULTIPLY' &&
        calculationType != 'DIVIDE' ||
        !enteredNumber
    ) {
        return;
    }
    
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'ADD'){
        currentResult += enteredNumber;
        mathOperator = '+'
    } else if(calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if(calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    
    createAndWriteOutput(mathOperator,initialResult,enteredNumber);       
    writeToLog('calculationType',initialResult,enteredNumber,currentResult); 
}

function add(){
    calculateResult('ADD');
}

function subtract(){
    calculateResult('SUBTRACT');
}

function multiply(){
    calculateResult('MULTIPLY');
}

function divide(){
    calculateResult('DIVIDE');
}

 addBtn.addEventListener('click',add);
 subtractBtn.addEventListener('click',subtract); 
 multiplyBtn.addEventListener('click',multiply);
 divideBtn.addEventListener('click',divide);