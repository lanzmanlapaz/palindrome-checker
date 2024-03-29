const inputText = document.getElementById("text-input");
let validatedText = "";
let validatedTextReversed = "";
let characterArr = [];
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("resultText");

function inputValidate() {
  validatedText = inputText.value.trim();
  validatedText = validatedText.replace(/\s/g, "").toLowerCase();
  validatedText = validatedText.replace(/\W|_/g, "").toLowerCase();
  resultText.textContent = validatedText;
}

function reverseText() {
  characterArr = validatedText.split("");
  characterArr = characterArr.reverse();
  characterArr.forEach((character) => (validatedTextReversed += character));
  validatedTextReversed = validatedTextReversed.toLowerCase();
  console.log(validatedTextReversed);
}

function checkPalindrome() {
  inputValidate();
  reverseText();
  return (resultText.textContent =
    validatedText === validatedTextReversed
      ? `${inputText.value} is a palindrome`
      : `${inputText.value} is not a palindrome`);
}

function checkContent() {
  if (inputText.value === "") {
    alert("Please input a value");
  } else {
    validatedText = "";
    validatedTextReversed = "";
    characterArr = [];
    checkPalindrome();
  }
}
checkButton.addEventListener("click", checkContent);
