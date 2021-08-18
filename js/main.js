function getpin() {

    const pin = Math.round(Math.random() * 10000);
    const stingPin = pin + '';
    if (stingPin.length == 4) {
        return pin;
    } else {
        return getpin();
    }




}

function generatePin() {
    const pin = getpin();
    console.log(pin);

    document.getElementById('display-pin').value = pin;


}

document.getElementById('key-pad').addEventListener('click', (e) => {

    const number = e.target.innerText;


    const caltypedNumbers = document.getElementById('typed-numbers')

    if (isNaN(number)) {
        if (number == 'C') {
            caltypedNumbers.value = '';
        }

    } else {

        const preNumber = caltypedNumbers.value;
        const newNumber = preNumber + number;
        caltypedNumbers.value = newNumber
    }





})

document.getElementById('verifyPin').addEventListener('click', () => {

    const genpin = document.getElementById('display-pin').value;
    const calpin = document.getElementById('typed-numbers').value;

    if (genpin == calpin) {
        const notifySuccess = document.getElementById('notify-success');

        notifySuccess.style.display = 'block'
        const notifyFail = document.getElementById('notify-fail');

        notifyFail.style.display = 'none'


    } else {
        const notifyFail = document.getElementById('notify-fail');

        notifyFail.style.display = 'block'
        const notifySuccess = document.getElementById('notify-success');

        notifySuccess.style.display = 'none'

    }




})