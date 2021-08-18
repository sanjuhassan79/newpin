 function getPin() {
     const pin = Math.round(Math.random() * 10000);

     const pinString = pin + '';
     if (pinString.length == 4) {
         return pin;
     } else {
         return getPin();
     }
 }


 function generatePin() {
     const pin = getPin()
     console.log(pin);

     document.getElementById('display-pin').value = pin

 }

 document.getElementById('key-pad').addEventListener('click', (event) => {

     const number = event.target.innerText;
     const calcInput = document.getElementById('typed-numbers');
     if (isNaN(number)) {
         if (number == 'C') {
             calcInput.value = '';

         }
     } else {

         const previousNumber = calcInput.value;
         const newnumber = previousNumber + number;
         calcInput.value = newnumber;

     }


 })

 function verifyPin() {

     const pin = document.getElementById('display-pin').value;
     const typedNumbers = document.getElementById('typed-numbers').value;

     if (pin == typedNumbers) {

         const notifySuccess = document.getElementById('notify-success');

         notifySuccess.style.display = 'block'

     } else {
         const notifyFail = document.getElementById('notify-fail');

         notifyFail.style.display = 'block'
     }
 }