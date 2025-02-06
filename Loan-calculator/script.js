
document.getElementById("calculateBtn").addEventListener("click", function () {

  const loanAmount = (document.getElementById("loanAmount").value);
  const interestRate = (document.getElementById("interestRate").value);
  const loanTerm = (document.getElementById("loanTerm").value);


  if ( loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
    document.getElementById("result").textContent = "Please enter valid positive numbers.";
    return;
  }


  const monthlyInterestRate = interestRate / 100 / 12;
  const totalPayments = loanTerm * 12;


  const x = Math.pow(1 + monthlyInterestRate, totalPayments);
  const monthlyPayment = (loanAmount * monthlyInterestRate * x) / (x - 1);

  // const resultEl = document.getElementById("result");
  // resultEl.textContent = `Your monthly payment is $ ${monthlyPayment.toFixed(2)}.`;
  // resultEl.style.color = "red"

  // const paymentEl = document.querySelector("span, .green-text");
  // paymentEl.style.color ="green";
  // paymentElement.textContent = monthlyPayment.toFixed(2);
  // paymentElement.style.color = "green";



  document.getElementById("result").innerHTML = `Your monthly payment is
 $<span id="payment">${monthlyPayment.toFixed(2)}</span>`;
  document.getElementById("payment").style.color = "green";
});
