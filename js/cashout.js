 document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const cashOutAmount=getInputFieldValueById('cash-out-amount')
    const cashOutPin=getInputFieldValueById('cash-out-pin')
    // console.log('click',cashOutAmount,cashOutPin)
    if(isNaN(cashOutAmount)){
        alert('Something Wrong Please Enter The Number')
        return;
    }
    if(cashOutPin===9999){
        const balance=getTextFieldValueById('account-balance')
        if(cashOutAmount > balance){
            alert('You DO Not Have Enough Money TO The Cash Out')
            return
        }
        const newBalance=balance-cashOutAmount
        console.log(newBalance)
        document.getElementById('account-balance').innerText=newBalance

        // add to transection-history
        const div=document.createElement('div')
        div.classList.add('bg-yellow-300')
        div.innerHTML=`
        <h4 class="text-2xl font-bold">Cash Out</h4>
        <p>${cashOutAmount} withdraw in new balance ${newBalance}p>
        `
        document.getElementById('Transections-contanier').appendChild(div)
    }
    else{
        alert('Some Thing Wrong')
    }
 })