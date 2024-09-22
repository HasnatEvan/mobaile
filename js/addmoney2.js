document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault()

    const inputAmount=getInputFieldValueById('input-amount')
    const inputPin=getInputFieldValueById('input-pin')
    // console.log(inputAmount,inputPin)
if(isNaN(inputAmount)){
    alert('Something Wrong Please Enter The Number')
    return;
}
    if(inputPin===1234){
        const accountBalance=getTextFieldValueById('account-balance')
        const newBalance=accountBalance+inputAmount
       
        document.getElementById('account-balance').innerText=newBalance



        // add to transection-history
        const p =document.createElement('p')
        p.innerText=`Added: ${inputAmount} Tk. Balance:${newBalance}`
        console.log(p)
        // should be a common function
        document.getElementById('Transections-contanier').appendChild(p)
    }
    else{
        alert('Failed to the add money')
    }
    

})