document.getElementById("checkout-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let isValid = true;

    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    let card = document.getElementById("card").value.trim();
    let expiry = document.getElementById("expiry").value.trim();
    let cvv = document.getElementById("cvv").value.trim();

  
    if (name === "") {
        showError("nameError", "Full name is required.");
        isValid = false;
    } else {
        hideError("nameError");
    }

  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError("emailError", "Invalid email format.");
        isValid = false;
    } else {
        hideError("emailError");
    }

  
    if (address === "") {
        showError("addressError", "Address is required.");
        isValid = false;
    } else {
        hideError("addressError");
    }

    if (!isValidCardNumber(card)) {
        showError("cardError", "Invalid credit card number.");
        isValid = false;
    } else {
        hideError("cardError");
    }

   
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
        showError("expiryError", "Enter a valid expiry date (MM/YY).");
        isValid = false;
    } else {
        hideError("expiryError");
    }

 
    if (!/^\d{3}$/.test(cvv)) {
        showError("cvvError", "CVV must be 3 digits.");
        isValid = false;
    } else {
        hideError("cvvError");
    }

  
    if (isValid) {
        alert("Payment Successful! Thank you for your purchase.");
        document.getElementById("checkout-form").reset();
    }
});


function showError(id, message) {
    let errorElement = document.getElementById(id);
    errorElement.innerText = message;
    errorElement.style.color = "red";
}


function hideError(id) {
    document.getElementById(id).innerText = "";
}


function isValidCardNumber(cardNumber) {
    let sum = 0;
    let alternate = false;
    cardNumber = cardNumber.replace(/\D/g, "");

    if (cardNumber.length !== 16) return false; 

    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i]);

        if (alternate) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }

        sum += digit;
        alternate = !alternate;
    }

    return sum % 10 === 0;
}
