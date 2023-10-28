const billSplit = document.getElementById("bill-split");

billSplit.addEventListener("submit", divideBill);

function divideBill(event) {
  event.preventDefault();
  const input = getInputs();
  calcOutput(input);
}

function getInputs() {
  let totalBill = document.getElementById("totalBill").value;
  let noOfPerson = document.getElementById("no-of-person").value;
  return { totalBill, noOfPerson };
}

function calcOutput(input) {
  billSplit.reset();

  let billPerPerson = input.totalBill / input.noOfPerson;
  document.getElementById("bill-per-person").innerHTML =
    billPerPerson.toFixed(2);
}
