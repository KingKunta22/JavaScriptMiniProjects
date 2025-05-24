const input = document.querySelector('#input');
const submitBtn = document.querySelector('#submit');

function reverseString(str) {
    return str.split("").reverse().join("");
}

function check() {
    value = input.value
    reversedValue = reverseString(value);

    if (value == reversedValue) {
        alert("It is a palindrome word!");
    } else {
        alert("It is not a palindrome word :(");
    }
}

submitBtn.addEventListener('click', () => {
    check();

    input.value = "";
})

