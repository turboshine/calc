const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

function getUserInputNumber() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription);

}

function writeToLog(operation, prevResult, numToOperate, latestResult){
    const logEntry = {
        operation : operation,
        pastResult : prevResult,
        currentVal : numToOperate,
        result : latestResult
      };
      logEntries.push(logEntry);
      console.log(logEntries);
}

function add() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+',initialResult,enteredNumber);
  writeToLog('ADD',initialResult,enteredNumber,currentResult);
}

function subtract(){
    const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-',initialResult,enteredNumber);
  writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult);
}

function multiply(){
    const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*',initialResult,enteredNumber);
  writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult);
}

function divide(){
    const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/',initialResult,enteredNumber);
  writeToLog('DIVIDE',initialResult,enteredNumber,currentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);