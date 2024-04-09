


const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const paymentResult = document.getElementById("paymentResult");
const subResult = document.getElementById("subResult");


mySubmit.onclick = function () {
    if(myCheckBox.checked) {
        subResult.textContent = `You are subscribed!`;
    }
    else {
        subResult.textContent = `You are not subscribed`;
    }

    if(visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(masterCardBtn.checked) {
          paymentResult.textContent = `You are payin with MasterCard`;
    }
    else if(payPalBtn.checked) {
        paymentResult.textContent = `You are paying with Paypal`;
    }
    else {
        paymentResult.textContent = `You must select a payment type`;
    }
}


      
    