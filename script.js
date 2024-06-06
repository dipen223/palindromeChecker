const input_text = document.querySelector("#text-input");
const check_btn  = document.querySelector("#check-btn");

function checkIfEmpty(){
    if (input_text.value.trim() === ""){
        window.alert("Please input a value");
    }
}

check_btn.onclick = checkIfEmpty;