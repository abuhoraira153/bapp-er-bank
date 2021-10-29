// handle deposit button evet
document.getElementById('deposit-button').addEventListener('click', function(){
    //get the amount that deposited
    const dedpositInput = document.getElementById('deposit-input');
    const newDepositAmountText = dedpositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText)
    // console.log(depositAmount);
    //update deposit total
    const depostiTotal = document.getElementById('deposit-total');
    const prevDepositAmountText = depostiTotal.innerText;
    const prevDepositAmount = parseFloat(prevDepositAmountText)
    const newDepositTotal = newDepositAmount + prevDepositAmount;
    depostiTotal.innerText = newDepositTotal;
    //update account balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const prevBalanceAmount = parseFloat(totalBalanceText);
    const newBalanceTotal = prevBalanceAmount + newDepositAmount;
    totalBalance.innerText = newBalanceTotal;
    //clear deposit input field
    dedpositInput.value = '';
})
//handle widthdraw event
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputText);
    // console.log(newWithdrawAmount)
    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const prevWithdrawText = withdrawTotal.innerText;
    const prevWithdrawAmount = parseFloat(prevWithdrawText);
    const newWithdrawTotal = prevWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText  = newWithdrawTotal;
    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const prevBalanceText = balanceTotal.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceText);
    const newBalanceTotal2 = prevBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal2
    //clear withdraw input
    withdrawInput.value = '';
})