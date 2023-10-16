const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#number");
const submitButton = document.querySelector("#submitButton");

function createPhoneFormat(numbers) {
  const isValidInput = Array.isArray(numbers);
  if (!isValidInput) {
    alert("Error! Try again!");
  }
  const numericString = numbers.join("");

  const formattedNumber =
    "(" +
    numericString.substring(0, 3) +
    ")-" +
    numericString.substring(3, 6) +
    "-" +
    numericString.substring(6);

  return formattedNumber;
}
submitButton.addEventListener("click", (e) => {
  const nameValue = nameInput.value;
  const numberArray = numberInput.value.split("").map(Number);
  const numberValue = createPhoneFormat(numberArray);
  if (nameValue.trim() === "" || numberValue.trim() === "") {
    alert("Please fill in all fields");
    e.preventDefault();
  } else {
    alert(
      `Hello, ${nameValue}! We will phone you in 30 minutes by this ${numberValue}`
    );
  }
});
