const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.close');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    inputs.forEach(input=>{
        if(input.classList.contains('name-input')){   // for the name input
            if(input.value === ''){
                input.parentElement.classList.add('error-empty');
                input.parentElement.classList.remove('error-invalid');
            }else if(input.value !== '' && input.value.match(/^[0-9]+$/) !== null){
                input.parentElement.classList.remove('error-empty');
                input.parentElement.classList.add('error-invalid');
            }
            else{
                input.parentElement.classList.remove('error-empty');
                input.parentElement.classList.remove('error-invalid');
            }
        }else if(input.classList.contains('date')){  // for the month and year inputs
            if(input.value === ''){
                input.parentElement.parentElement.classList.add('error-empty');
                input.parentElement.parentElement.classList.remove('error-invalid');
            }else if(input.value !== '' && input.value.match(/^[0-9]+$/) === null){  // wil return null if value has anything accept number
                input.parentElement.parentElement.classList.remove('error-empty');
                input.parentElement.parentElement.classList.add('error-invalid');
            }else{
                input.parentElement.parentElement.classList.remove('error-empty');
                input.parentElement.parentElement.classList.remove('error-invalid');
            }
        }else{
            if(input.value === ''){   // for the other inputs
                input.parentElement.classList.add('error-empty');
                input.parentElement.classList.remove('error-invalid');
            }else if(input.value !== '' && input.value.match(/^[0-9]+$/) === null){
                input.parentElement.classList.remove('error-empty');
                input.parentElement.classList.add('error-invalid');
            }else{
                input.parentElement.classList.remove('error-empty');
                input.parentElement.classList.remove('error-invalid');
            }
        }

        if(input.parentElement.classList.contains('error-empty')    // check if `input-field` has error classes
        || input.parentElement.classList.contains('error-invalid')
        ||input.parentElement.parentElement.classList.contains('error-invalid')
        || input.parentElement.parentElement.classList.contains('error-empty')){
            modal.style.display = 'none';
        }else{
            modal.style.display = "flex";
        }
    })
})

modalClose.addEventListener('click',()=>{
    modal.style.display = "none";
})

//input value handlers

const nameInput = document.querySelector('.name-input');
nameInput.addEventListener('input',(e)=>{
    document.querySelector('.name-output').textContent = e.target.value;
})

const numberInput = document.querySelector('.number-input');
numberInput.addEventListener('input',(e)=>{
    let formattedNumber = e.target.value.toString().replace(/\d{4}(?=.)/g, '$& ');  //place a space after every 4 characters
    document.querySelector('.number-output').textContent = formattedNumber;
})

const monthInput = document.querySelector('.month-input');
monthInput.addEventListener('input',(e)=>{
    formattedMonth = ('0' + e.target.value).slice(-2);  // add a 0 to the number if it's less then 10. (e.g. 9 => 09)
    document.querySelector('.month-output').textContent = formattedMonth;
})

const yearInput = document.querySelector('.year-input');
yearInput.addEventListener('input',(e)=>{
    formattedYear = ('0' + e.target.value).slice(-2);
    document.querySelector('.year-output').textContent = formattedYear;
})

const cvcInput = document.querySelector('.cvc-input');
cvcInput.addEventListener('input',(e)=>{
    document.querySelector('.cvc-output').textContent = e.target.value;
})