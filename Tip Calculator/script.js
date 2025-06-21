let bill = document.querySelector("#bill");
let tip = document.querySelector("#tip");
let total = document.querySelector("span");
const calculate = document.querySelector("#calculate");
const clear = document.querySelector("#clear");


calculate.addEventListener("click", function(){
    let billAmount = parseFloat(bill.value);
    let tipPercentage = parseFloat(tip.value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers in both fields.");
        total.textContent = "0.00";
        return;
    }

    let amount = billAmount + (billAmount*tipPercentage/100);
    total.textContent = amount.toFixed(2);
})

clear.addEventListener("click", function(){
    bill.value = "";
    tip.value = "";
    total.textContent = "0.00";
});