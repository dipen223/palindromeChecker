const input_text = document.querySelector("#text-input");
const check_btn = document.querySelector("#check-btn");
const result = document.querySelector("#result")

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

function checkPalindrome(str){
    const cleanedStr = cleanInput(str);
    const reversedStr = reverseString(cleanedStr);
    return cleanedStr == reversedStr;
}

check_btn.addEventListener("click",() =>{
    if(!checkIfEmpty()){
        const isPalindrome = checkPalindrome(input_text.value);
        if (isPalindrome){
            result.textContent = `${input_text.value} is a palindrome.`;
        }
        else{
            result.textContent = `${input_text.value} is not a palindrome.`
        }
    }
})