// Calculate
function calculate()
{
    let result = document.querySelector('#result');
    let input = document.querySelector('#formula-input');
    if (input.value == '') {
        result.innerText = 0;
        return;
    }
    let evaluated = eval(input.value);
    if (evaluated == undefined) {
        result.innerText = 'Error';
        return;
    }
    result.innerText = evaluated
}


// Handle keyboard buttons
keyboard_buttons = document.querySelectorAll('.keyboard > button');

// Add event listener to each button
keyboard_buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Handle delete button
        if (this.innerText == 'DEL') {
            let input = document.querySelector('#formula-input');
            input.value = input.value.slice(0, -1);
        }
        // Handle clear button
        else if (this.innerText == 'C') {
            let input = document.querySelector('#formula-input');
            input.value = '';
        }
        // Handle rest of the buttons
        else {
            let text = this.innerText;
            let input = document.querySelector('#formula-input');
            input.value += text;
        }
        calculate();
    });
});

// Handle input
input = document.querySelector('#formula-input');
input.addEventListener('input', calculate);

