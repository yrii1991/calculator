function calc () {
    let display = document.querySelector('.calc_display');
    let keyboard = document.querySelector('.calc_keyboard_number');

    keyboard.addEventListener('click', function (event) {
        let displayText =  display.innerText;
        if (event.target.innerText === 'C') {
            display.innerHTML = '';
        } else {
            // console.log(event.target.innerText);
            display.innerHTML = displayText + event.target.innerText;
        }
    })


}

calc();
