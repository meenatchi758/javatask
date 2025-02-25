
let subtotal = 120.50;
let discountAmount = 0;
let finalTotal = subtotal;


const validDiscountCodes = {
    "SAVE10": 0.10, 
    "WELCOME15": 0.15 
};


document.getElementById("apply-discount").addEventListener("click", function() {
    const codeInput = document.getElementById("discount-code").value.trim().toUpperCase();
    const messageElement = document.getElementById("discount-message");

    if (validDiscountCodes[codeInput]) {
        let discountPercentage = validDiscountCodes[codeInput];
        discountAmount = subtotal * discountPercentage;
        finalTotal = subtotal - discountAmount;

       
        document.getElementById("discount").textContent = discountAmount.toFixed(2);
        document.getElementById("final-total").textContent = finalTotal.toFixed(2);
        messageElement.textContent = `✅ Discount applied! You saved $${discountAmount.toFixed(2)}.`;
        messageElement.className = "success";
    }
     else {
        messageElement.textContent = "❌ Invalid discount code. Try again.";
        messageElement.className = "error";
        discountAmount = 0;
        finalTotal = subtotal;
        document.getElementById("discount").textContent = "0.00";
        document.getElementById("final-total").textContent = subtotal.toFixed(2);
    }
});


document.getElementById("place-order").addEventListener("click", function() {
    alert(`Order placed successfully! Final total: $${finalTotal.toFixed(2)}`);
});
