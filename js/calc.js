function calc () {
    let display = document.querySelector('.calc_display');
    let keyboard = document.querySelector('.calc_keyboard_number');
    let x;

    keyboard.addEventListener('click', function (event) {
        let displayText =  display.innerText;
        if (event.target.innerText === 'C') {
            display.innerHTML = '';
        } else {
            if (event.target.innerText ==="." && displayText.includes('.')) {
            } else {
                display.innerHTML = displayText + event.target.innerText;
            }
        }
    })


}

calc();
