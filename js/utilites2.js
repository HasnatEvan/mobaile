function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value 
    const inputNumber=parseFloat(inputValue)
    return  inputNumber;

}

function getTextFieldValueById(id){
    const textValue=document.getElementById(id).innerText
    const textNumber=parseFloat(textValue)
    return textNumber;
}

// button er jonno

function showSectionById(id){
    document.getElementById('add-money-from').classList.add('hidden')
    document.getElementById('cash-out-from').classList.add('hidden')
    document.getElementById('Transections-from').classList.add('hidden')
    // show the section with provied is as paramitter
    document.getElementById(id).classList.remove('hidden')
  

}
