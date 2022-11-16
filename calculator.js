window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 5000, years: 5, rate: 2.5};
  const loanInput = document.getElementById("loan-amount");
  loanInput.value = values.amount;
  const termInput = document.getElementById("loan-years");
  termInput.value = values.years;
  const rateInput = document.getElementById("loan-rate");
  rateInput.value = values.rate;
  update();
  }

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate/100) / 12;
  const pwr = Math.floor(values.years *12);
  return (
    (monthlyRate * values.amount) / (1 - Math.pow((1 + monthlyRate), -pwr))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyOutput = document.getElementById("monthly-payment");
  monthlyOutput.innerText = "$" + monthly;
}
