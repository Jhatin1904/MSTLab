// Function to check if a number is even or odd
function checkEvenOrOdd() {
    const number = document.getElementById('number').value;
    const result = document.getElementById('result');

    if (number === '') {
        result.textContent = "Please enter a number!";
    } else {
        if (number % 2 === 0) {
            result.textContent = number + " is an Even number.";
        } else {
            result.textContent = number + " is an Odd number.";
        }
    }
}

// Function to check if a string is a palindrome
function checkPalindrome() {
    const text = document.getElementById('text').value;
    const palindromeResult = document.getElementById('palindromeResult');

    if (text === '') {
        palindromeResult.textContent = "Please enter text!";
    } else {
        const reversedText = text.split('').reverse().join('');
        if (text === reversedText) {
            palindromeResult.textContent = text + " is a Palindrome.";
        } else {
            palindromeResult.textContent = text + " is not a Palindrome.";
        }
    }
}
