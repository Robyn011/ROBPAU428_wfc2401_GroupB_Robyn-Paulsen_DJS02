const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

function disableForm() {
  // Disable form elements upon encountering an error
  const formElements = form.querySelectorAll("input, button");
  formElements.forEach(element => {
    element.disabled = true;
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);
    const divisionResult = dividend / divider;

    // Check if division result is not a number
    if (isNaN(divisionResult)) {
      throw new Error("Something critical went wrong. Please reload the page");
    }

  // Check if inputs are empty
  if (dividend === "" || divider === "") {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
  } else {
    // Check if inputs are valid numbers
    if (isNaN(dividend) || isNaN(divider)) {
      result.innerText = "Please enter valid numbers.";
    } else {
      // Check if inputs are valid numbers
      if (isNaN(dividend) || isNaN(divider)) {
        result.innerText = "Please enter valid numbers.";
      } else {
        // Check if divider is zero
        if (divider == 0) {
          result.innerText =
            "Division not performed. Invalid number provided. Try again";
        } else {
          const quotient = Math.floor(dividend / divider);
          result.innerText = "Result: " + quotient;
          
        }
      }
    }
  }
}
  catch (error) {
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error(error);
      // Disable form elements upon encountering an error
    disableForm()
  }
});


