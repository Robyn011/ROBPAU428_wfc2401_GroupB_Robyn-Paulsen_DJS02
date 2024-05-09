const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
});


/*
1) startup = No calculation performed

Unresolved Stories:

2) Dividing numbers result in a decimal number should round down :)

3) if empty the following should be displayed:
 “Division not performed. Both values are required in inputs. Try again”.

4) An invalid division should log an error in the console:
  Division not performed. Invalid number provided. Try again

5) Providing anything that is not a number should crash the program:
  Something critical went wrong. Please reload the page

*/