window.onload = () => {
  let range = document.querySelector("input[type=range]");
  let checkbox = document.querySelector("input[type=checkbox]");
  displayValue(range.value);
  range.addEventListener("input", (e) => {
    displayValue(e.target.value, checkbox.checked);
  });
  checkbox.addEventListener("input", (e) => {
    displayValue(range.value, e.target.checked);
  });
};

function displayValue(val, checked) {
  let pageviews = document.querySelector("#pageview");
  let price = document.querySelector("#price");
  let amount = 0.0;
  switch (val) {
    case "1":
      pageviews.textContent = "10K";
      amount = checked ? 8 * 0.75 : 8;
      price.textContent = "$" + amount.toFixed(2);
      break;
    case "2":
      pageviews.textContent = "50K";
      amount = checked ? 12 * 0.75 : 12;
      price.textContent = "$" + amount.toFixed(2);
      break;
    case "3":
      pageviews.textContent = "100K";
      amount = checked ? 16 * 0.75 : 16;
      price.textContent = "$" + amount.toFixed(2);
      break;
    case "4":
      pageviews.textContent = "500K";
      amount = checked ? 24 * 0.75 : 24;
      price.textContent = "$" + amount.toFixed(2);

      break;
    case "5":
      pageviews.textContent = "1M";
      amount = checked ? 36 * 0.75 : 36;
      price.textContent = "$" + amount.toFixed(2);
      break;
  }
}
