// console.log('clicked')
document.getElementById('Add-Money-btn').addEventListener('click',function(event){
    event.preventDefault;


    const inputAmount=document.getInputFieldValueById('input-amount')
    const inputPassword=document.getInputFieldValueById('input-password')
    console.log(inputAmount,inputPassword)
})