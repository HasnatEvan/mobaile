document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('clicked')
     
    // getInputFieldValueById()
    // const inputAmount=getInputFieldValueById()
    // console.log('Add money value',inputAmount)

    // const inputAmount=document.getElementById('input-amount').value 
    // const amountNumber=parseFloat(inputAmount)


const inputAmount=getInputFieldValueById('input-amount')
const inputPin=getInputFieldValueById('input-pin')
console.log('add money with peramitter',inputAmount,inputPin)


})