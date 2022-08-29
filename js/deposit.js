


document.getElementById('btn-deposit').addEventListener('click', function () {
    // get deposit new value
    const newDepositAmount = getInputFieldValueById('deposit-field');
    // get deposit previous value
    const previousDepositTotal = getElementValueById('deposit-total');
    // calculate new deposit value
    const newDepositTotal = newDepositAmount + previousDepositTotal;
    // set new total deposit value to the previous value
    setTextElementById('deposit-total', newDepositTotal);

    // get previous value of balance
    const getPreviousBalance = getElementValueById('balance-total');

    // calculate new total balance 
    const newBalanceTotal = getPreviousBalance + newDepositAmount;

    // set new balance total to the previous total
    setTextElementById('balance-total', newBalanceTotal);


})

