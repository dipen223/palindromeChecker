const input_text = document.querySelector("#text-input");
const check_btn = document.querySelector("#check-btn");

function checkIfEmpty() {
    if (input_text.value.trim() === "") {
        window.alert("Please input a value");
    }
}

check_btn.onclick = checkIfEmpty;

function cleanInput(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

function reverseString(str){
    return str.split('').reverse().join('');
}