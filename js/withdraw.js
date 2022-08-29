document.getElementById('btn-withdraw').addEventListener('click', function () {
    const getNewWithdrawAmount = getInputFieldValueById('withdraw-field');
    const getPreviousWithdrawAmount = getElementValueById('withdraw-total');
    const newWithdrawTotal = getNewWithdrawAmount + getPreviousWithdrawAmount;
    setTextElementById('withdraw-total', newWithdrawTotal);

    const getPreviousBalance = getElementValueById('balance-total');
    const newBalanceTotal = getPreviousBalance - getNewWithdrawAmount;
    setTextElementById('balance-total', newBalanceTotal);
})